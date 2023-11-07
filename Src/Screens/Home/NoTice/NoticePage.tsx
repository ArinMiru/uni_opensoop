import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { openBubListCall } from "../../../Services/_private/NoticeApi";
import { NoticeData } from "../../../Utils/_private/ApiData/NoticeData";
import { MenuTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
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
import Spinner from "react-native-loading-spinner-overlay";
import { Alert } from "react-native";
import {
  MembLikeUpdSvc,
  MembLikeMinusUpdSvc,
} from "../../../Services/_private/EndPointApiFuntion";

const NoTicePage: React.FC<ScreenProps> = ({ navigation }) => {
  const modalFunctions = ModalReuableFuction();
  const userData = getUserData();
  const [sortedData, setSortedData] = useState<NoticeData>({
    RSLT_CD: undefined,
    OPEN_BUB: [],
  });
  const [data, setData] = useState<NoticeData>({
    RSLT_CD: undefined,
    OPEN_BUB: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCreSeq, setSelectedCreSeq] = useState<number>(0);
  const [page, setPage] = useState<number>(1); // 페이지 번호 상태

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
    console.log(data);
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
    modalFunctions.handleCloseModal();
  };

  const modalItemEdit = () => {
    if (sortedData && selectedCreSeq) {
      const selectedNotice = sortedData.OPEN_BUB.find(
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
      }
    }
    modalFunctions.handleCloseModal();
  };

  const accumulateLike = async (creseq: number) => {
    // 서닝이가 만들었다 -> 한줄한줄 주석 남겨 놓아야 함
    try {
      // 1. 좋아요 누적 요청을 보냄
      const responseData = await MembLikeUpdSvc(creseq);

      if (responseData) {
        // 2. 성공적으로 서버 응답을 받은 경우
        const updatedData = data; // 기존 데이터를 복사
        // 3. 증가할 게시물을 찾습니다. 즉 해당하는 CRE_SEQ 값의 게시글을 찾으러 떠남
        const selectedNotice = updatedData.OPEN_BUB.find(
          (item) => item.CRE_SEQ === creseq
        );
        if (selectedNotice) {
          // 4. 게시물의 좋아요 수를 1 증가
          selectedNotice.LIKE_CNT += 1;
          // 5. 업데이트된 데이터로 상태를 업데이트
          setData(updatedData);
          console.log("좋아요 누적 성공");
        }
      } else {
        // 6. 서버 응답이 실패한 경우
        console.error("좋아요 누적 실패");
      }
    } catch (error) {
      // 7. 오류가 발생한 경우
      console.log("좋아요 누적 오류", error);
    }
  };

  const accumulateMinusLike = async (creseq: number) => {
    try {
      // 1. 좋아요 차감 요청을 보냅니다
      const responseData = await MembLikeMinusUpdSvc(creseq);

      if (responseData) {
        // 2. 성공적으로 서버 응답을 받은 경우
        const updatedData = data; // 기존에 저장되어 있던 데이터를 복사
        // 3. 차감할 게시물을 찾습니다. 즉 해당하는 CRE_SEQ 값의 게시글을 찾으러 떠남
        const selectedNotice = updatedData.OPEN_BUB.find(
          (item) => item.CRE_SEQ === creseq
        );
        if (selectedNotice) {
          // 4. 게시물의 좋아요 수를 1 감소
          selectedNotice.LIKE_CNT -= 1;
          // 5. 업데이트된 데이터로 상태를 업데이트
          setData(updatedData);
        }
      } else {
        // 6. 서버 응답이 실패한 경우
        console.error("좋아요 차감 실패");
      }
    } catch (error) {
      // 7. 오류가 발생한 경우
      console.log("좋아요 차감 오류", error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
      }}
    >
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
            <EditModalCompo EditonPress={modalItemEdit} />
            <DelModalCompo DelonPress={modalItemDel} />
            <CloseModalCompo CloseonPress={modalFunctions.handleCloseModal} />
          </View>
        </BottomSheetModal>
        <MenuTopbarStyle
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
          ]}
        >
          <Spinner
            visible={loading}
            textContent={"로딩 중..."}
            textStyle={{ color: "#FFF" }}
          />
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
