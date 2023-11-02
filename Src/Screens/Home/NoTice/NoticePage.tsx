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
import { useIsFocused } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import { Alert } from "react-native";
import { timeSince } from "../../../Utils/timeUtils";

function decodeBase64Image(base64String: string) {
  return `data:image/jpeg;base64,${base64String}`;
}

const NoTicePage: React.FC<ScreenProps> = ({ navigation }) => {
  const modalFunctions = ModalReuableFuction();
  const isFocused = useIsFocused();
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
            setData((prevData) => {
              const updatedOpenBub = [...prevData.OPEN_BUB, ...data.OPEN_BUB];
              updatedOpenBub.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ); // 새로 추가된 데이터를 포함하여 전체 배열을 다시 정렬
              return {
                ...prevData,
                OPEN_BUB: updatedOpenBub,
              };
            });
          }
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("데이터 가져오기 오류:", error);
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
              return (
                <NoticePostBoxView
                  MEMB_NM={item.MEMB_NM}
                  MEMB_CD={item.TIT_NM}
                  MEMB_DEP_CD={item.MEMB_DEP_NM}
                  Title={item.TIT}
                  PostingTime={timeSince(item.CRE_DAT)}
                  postLike={item.LIKE_CNT}
                  PostContent={item.CONT}
                  onPress={() => handleItemPress(item.CRE_SEQ)}
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
