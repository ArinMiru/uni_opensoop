import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
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

const NoTicePage: React.FC<ScreenProps> = ({ navigation }) => {
  const modalFunctions = ModalReuableFuction();
  const isFocused = useIsFocused();
  const userData = getUserData();
  const [sortedData, setSortedData] = useState<NoticeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCreSeq, setSelectedCreSeq] = useState<number>(0);

  useEffect(() => {
    if (isFocused && userData !== null) {
      setLoading(true);
      openBubListCall(
        userData.LOGIN_ID,
        userData.MEMB_SC_CD,
        userData.MEMB_DEP_CD,
        userData.TIT_CD
      )
        .then((data) => {
          if (data !== null) {
            const sorted = { ...data };
            if (sorted.OPEN_BUB) {
              sorted.OPEN_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
            }
            setSortedData(sorted);
          }
          // 데이터를 성공적으로 가져왔을 때 로딩 상태를 비활성화
          setLoading(false);
        })
        .catch((error) => {
          // 데이터 가져오기 오류 시 로딩 상태를 비활성화

          console.error("데이터 가져오기 오류:", error);
        });
    }
  }, [userData, isFocused]);

  // 화면 포커스와 sortedData가 변경될 때마다 데이터를 다시 가져오도록 설정

  // FlatList 항목들 사이에 구분선을 그리기 위한 함수
  const renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: "#ddd", marginVertical: 4 }} />
  );

  const handleItemPree = (creseq: number) => {
    setSelectedCreSeq(creseq);
    console.log(selectedCreSeq);
    modalFunctions.handleButtonPress();
  };

  const modalItemDel = () => {
    openBubListDell(selectedCreSeq);
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
            <EditModalCompo EditonPress={modalFunctions.handleEditPress} />
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
            // 로딩 상태에 따라 Spinner를 화면에 표시
            visible={loading}
            textContent={"로딩 중..."}
            textStyle={{ color: "#FFF" }}
          />
          <FlatList
            data={sortedData?.OPEN_BUB}
            keyExtractor={(item) => item.CRE_SEQ.toString()}
            renderItem={({ item }) => {
              return (
                <NoticePostBoxView
                  MEMB_NM={item.MEMB_NM}
                  MEMB_CD={item.TIT_NM}
                  MEMB_DEP_CD={item.MEMB_DEP_NM}
                  Title={item.TIT}
                  PostingTime={item.CRE_DAT}
                  postLike={item.LIKE_CNT}
                  PostContent={item.CONT}
                  onPress={() => handleItemPree(item.CRE_SEQ)}
                />
              );
            }}
            ItemSeparatorComponent={renderSeparator}
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
