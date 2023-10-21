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

const NoTicePage: React.FC<ScreenProps> = ({ navigation }) => {
  const modalFunctions = ModalReuableFuction();
  // 사용자 데이터와 공지사항 데이터 상태를 정의합니다.
  const userData = getUserData(); // 현재 사용자 데이터
  const [sortedData, setSortedData] = useState<NoticeData | null>(null); // 정렬된 공지사항 데이터
  const [selectedCreSeq, setSelectedCreSeq] = useState<number>(0);

  // 컴포넌트가 렌더링될 때 한 번만 실행되는 부분입니다.
  useEffect(() => {
    // 사용자 데이터가 존재하면 공지사항 데이터를 가져옵니다.
    if (userData !== null) {
      openBubListCall(
        userData.LOGIN_ID,
        userData.MEMB_SC_CD,
        userData.MEMB_DEP_CD,
        userData.TIT_CD
      )
        .then((data) => {
          if (data !== null) {
            // 데이터를 CRE_SEQ 기준으로 내림차순 정렬 예시
            const sorted = { ...data };
            if (sorted.OPEN_BUB) {
              sorted.OPEN_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
            }
            setSortedData(sorted);
          }
        })
        .catch((error) => {
          console.error("데이터 가져오기 오류:", error);
        });
    }
  }, []);

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

  /*-------------------------------------------------------------------*/

  /**
   * @ArinMiru(김도원)
   * 02(학회장),03(부학회장),05(관리자) 경우 MenuTopbarStyleManger 노출
   * 이외의 경우 MenuTopbarStyle 노출
   */

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
        {/* 수정 바람 */}
        {/* 수정 완료 @ArinMiru김도원 23.10.03 */}
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
          {/* FlatList를 사용하여 공지사항 데이터 출력 */}
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
