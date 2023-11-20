import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { openBubListCall } from "../../../Services/_private/NoticeApi";
import { NoticeData } from "../../../Utils/_private/ApiData/NoticeData";
import { ManagerMenuTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import Constants from "expo-constants";
import { NoticePostBoxView } from "../../../Components/ListCompo/OpenCompo/NoticePostCompo";
import { ModalReuableFuction } from "../../../Utils/ReusableFuction/ModalReuableFuction";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import EditDelCloseModalStyle from "../../../Styles/ModalStyles/EditDelCloseModalStyles";
import {
  EditModalCompo,
  DelModalCompo,
  CloseModalCompo,
} from "../../../Components/AllCompo/ModalCompo";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { openBubListDell } from "../../../Services/_private/NoticeApi";
import { deviceHeight } from "../../../Utils/DeviceUtils";
import { Alert } from "react-native";
import {
  MembLikeUpdSvc,
  MembLikeMinusUpdSvc,
} from "../../../Services/_private/EndPointApiFuntion";
import { NoticeProps } from "../../../Utils/NavigationProp/NoticeProp";
import { StatusBar } from "expo-status-bar";

const NoTicePage: React.FC<NoticeProps> = ({ navigation, route }) => {
  const modalFunctions = ModalReuableFuction();
  const userData = getUserData();
  const [data, setData] = useState<NoticeData>({
    RSLT_CD: undefined,
    OPEN_BUB: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCreSeq, setSelectedCreSeq] = useState<number>(0);
  const [page, setPage] = useState<number>(1); // 페이지 번호 상태

  useEffect(() => {
    const newPageload = route?.params?.newPageload;
    if (newPageload) {
      fetchNoticeData(1);
    }
  }, [route?.params?.newPageload]);

  const fetchNoticeData = (defaultPage: number) => {
    if (userData !== null) {
      setLoading(true);
      openBubListCall(defaultPage)
        .then((data) => {
          if (data !== null) {
            const sorted = { ...data };
            if (sorted.OPEN_BUB) {
              sorted.OPEN_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
            }
            if (defaultPage === 1) {
              setData({
                RSLT_CD: undefined,
                OPEN_BUB: [],
              });
            }
            setData((prevData) => {
              return {
                ...prevData,
                OPEN_BUB: [...prevData.OPEN_BUB, ...sorted.OPEN_BUB],
              };
            });
          }
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          Alert.alert("오류", "데이터를 가져오는데 실패했습니다.");
        });
    }
  };

  useEffect(() => {
    fetchNoticeData(1);
  }, []);

  const loadNewPage = () => {
    fetchNoticeData(1);
  };

  const nextPage = () => {
    setPage(page + 1);
    fetchNoticeData(page);
  };

  const renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: "#ddd", marginVertical: 4 }} />
  );

  const handleItemPress = (creseq: number) => {
    setSelectedCreSeq(creseq);
    modalFunctions.handleButtonPress(creseq);
  };

  const modalItemDel = () => {
    openBubListDell(selectedCreSeq);
    Alert.alert("삭제", "삭제 되었습니다.");
    fetchNoticeData(1);
    modalFunctions.handleCloseModal();
  };
  const modalItemEdit = () => {
    if (data && selectedCreSeq) {
      const selectedNotice = data.OPEN_BUB.find(
        (item) => item.CRE_SEQ === selectedCreSeq
      );

      if (selectedNotice) {
        const IMAGE_INFO = selectedNotice.IMAGE_INFO.map((image) => ({
          FILE_BASE64: image.FILE_PATH,
          FILE_NM: "image.webp",
          IMG_SEQ: Number(image.IMG_SEQ),
        }));

        navigation.navigate("NoticeEditPage", {
          CRE_SEQ: selectedNotice.CRE_SEQ,
          CONT: selectedNotice.CONT,
          TIT: selectedNotice.TIT,
          ImageInfo: IMAGE_INFO,
        });
      } else {
        Alert.alert("ERROR", "알 수 없는 에러가 발생 하였습니다.");
      }
    }
    fetchNoticeData(1);
    modalFunctions.handleCloseModal();
  };

  const accumulateLike = async (creseq: number) => {
    try {
      // 'MembLikeUpdSvc' 함수에 'creseq' 값을 인자로 넘겨 좋아요 요청을 비동기적으로 보낸다.
      const responseData = await MembLikeUpdSvc(creseq);

      // 'responseData'가 존재하면, 즉 요청에 성공적으로 응답을 받았다면 아래 로직을 수행한다.
      if (responseData) {
        // 현재 상태인 'data'의 복사본을 'updatedData'에 할당한다.
        const updatedData = data;
        // 'updatedData' 내의 'OPEN_BUB' 배열을 순회하며 'creseq'와 일치하는 'CRE_SEQ' 속성을 가진 객체를 찾는다.
        const selectedNotice = updatedData.OPEN_BUB.find(
          (item) => item.CRE_SEQ === creseq
        );
        // 일치하는 게시물이 있다면,
        if (selectedNotice) {
          // 'selectedNotice'의 좋아요 수를 증가시키는 등의 추가 작업이 필요할 수 있다.
          // 현재 예시에서는 그러한 작업이 생략되어 있으며, 단순히 'data' 상태를 'updatedData'로 갱신한다.
          setData(updatedData);
          // 콘솔에 성공 메시지를 출력한다.
        }
      } else {
        // 'responseData'가 없다면, 요청이 실패한 것으로 간주하고 콘솔에 실패 메시지를 출력한다.
      }
    } catch (error) {
      // 요청 과정 중에 오류가 발생하면, catch 블록이 실행되며 콘솔에 오류 내용을 출력한다.
    }
  };

  // 좋아요 차감 기능을 수행하는 비동기 함수
  const accumulateMinusLike = async (creseq: number) => {
    try {
      // 1. 좋아요 차감 API를 호출합니다.
      const responseData = await MembLikeMinusUpdSvc(creseq);

      if (responseData) {
        // 2. API 호출이 성공적으로 완료되면, 현재 상태의 데이터를 복사하여 새로운 객체에 할당합니다.
        const updatedData = data; // 'data'는 상태 데이터를 나타내며, 이전 상태를 참조합니다.

        // 3. 차감된 좋아요 수를 반영할 게시물을 찾습니다. 이때 'CRE_SEQ' 값이 매개변수로 전달된 'creseq'와 일치하는 게시물을 찾습니다.
        const selectedNotice = updatedData.OPEN_BUB.find(
          (item) => item.CRE_SEQ === creseq
        );

        // 4. 해당 게시물이 존재하면, 좋아요 수를 차감합니다.
        if (selectedNotice) {
          selectedNotice.LIKE_CNT -= 1; // 'LIKE_CNT'를 감소시키는 로직이 필요합니다.

          // 5. 상태를 업데이트합니다. 이는 리액트 컴포넌트의 상태를 새로운 값으로 설정하는 부분입니다.
          setData(updatedData);

          // 6. 차감 성공 메시지를 콘솔에 출력합니다.
        }
      } else {
        // 7. API 호출에 실패했을 때, 오류 메시지를 콘솔에 출력합니다.
      }
    } catch (error) {
      // 8. 예외가 발생했을 때, 오류 메시지를 콘솔에 출력합니다.
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <StatusBar style="light" backgroundColor="black" />
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={modalFunctions.bottomSheetModalRef}
          index={1}
          snapPoints={[
            deviceHeight * 0.25,
            deviceHeight * 0.25,
            deviceHeight * 0.25,
          ]}
          onDismiss={modalFunctions.handleCloseModal}
        >
          <View style={EditDelCloseModalStyle.contentContainer}>
            <EditModalCompo EditonPress={() => modalItemEdit()} />
            <DelModalCompo DelonPress={modalItemDel} />
            <CloseModalCompo CloseonPress={modalFunctions.handleCloseModal} />
          </View>
        </BottomSheetModal>
        <ManagerMenuTopbarStyle
          Title="공지사항"
          MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
          MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
          onPress={() => navigation.goBack()}
          onPressRegi={() => navigation.navigate("NoticePostRegiPage")}
        />
        <View
          style={[
            NewBackgroundStyle.BottomTabBackgroundStyle,
            { alignItems: "center" },
            { paddingTop: deviceHeight * 0.01 },
          ]}
        >
          <FlatList
            data={data?.OPEN_BUB}
            keyExtractor={(item, index) =>
              item.CRE_SEQ.toString() + "-" + index
            }
            renderItem={({ item }) => {
              const imagePaths = item.IMAGE_INFO.map(
                (imageInfo) => imageInfo.FILE_PATH
              );
              return (
                <NoticePostBoxView
                  MEMB_NM={item.MEMB_NM}
                  MEMB_CD={item.TIT_NM}
                  MEMB_DEP_CD={item.MEMB_DEP_NM}
                  Title={item.TIT}
                  PostingTime={item.CRE_DAT}
                  postLike={item.LIKE_CNT}
                  PostContent={item.CONT}
                  PostImage={imagePaths}
                  onPress={() => handleItemPress(item.CRE_SEQ)}
                  onLikePress={() => accumulateLike(item.CRE_SEQ)}
                  onDislikePress={() => accumulateMinusLike(item.CRE_SEQ)}
                />
              );
            }}
            ItemSeparatorComponent={renderSeparator}
            onEndReached={nextPage}
            onEndReachedThreshold={0.1}
            onRefresh={loadNewPage}
            refreshing={loading}
          />
          {modalFunctions.modalVisible && (
            <TouchableWithoutFeedback onPress={modalFunctions.handleCloseModal}>
              <View style={EditDelCloseModalStyle.overlay} />
            </TouchableWithoutFeedback>
          )}
        </View>
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default NoTicePage;
