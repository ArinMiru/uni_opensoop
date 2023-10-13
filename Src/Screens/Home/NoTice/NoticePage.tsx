import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { openBubListCall } from "../../../Services/_private/NoticeApi";
import { NoticeData } from "../../../Utils/_private/ApiData/NoticeData";
import { MenuTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { DrawerActions } from "@react-navigation/native"; // DrawerActions 추가
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native"; // React Navigation v6의 경우
import Constants from "expo-constants";
import { NoticePostBoxView } from "../../../Components/ListCompo/OpenCompo/NoticePostCompo";
import { ModalReuableFuction } from "../../../Utils/ReusableFuction/ModalReuableFuction";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import TextStyle from "../../../Styles/TextStyle";
import EditDelCloseModalStyle from "../../../Styles/ModalStyles/EditDelCloseModalStyles";
import {
  EditModalCompo,
  DelModalCompo,
  CloseModalCompo,
} from "../../../Components/AllCompo/ModalCompo";

const NoTicePage = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<ParamListBase>;
}) => {
  const modalFunctions = ModalReuableFuction();
  // 사용자 데이터와 공지사항 데이터 상태를 정의합니다.
  const userData = getUserData(); // 현재 사용자 데이터
  const [noticeData, setNoticeData] = useState<NoticeData | null>(null); // 공지사항 데이터

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
            setNoticeData(data); // 가져온 데이터를 상태에 저장합니다.
          }
        })
        .catch((error) => {
          console.error("데이터 가져오기 오류:", error);
        });
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 호출됩니다.

  // FlatList 항목들 사이에 구분선을 그리기 위한 함수
  const renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: "#ddd", marginVertical: 4 }} />
  );

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
          snapPoints={modalFunctions.snapPoints}
          onDismiss={modalFunctions.handleCloseModal}
        >
          <View style={EditDelCloseModalStyle.contentContainer}>
            <EditModalCompo EditonPress={modalFunctions.handleEditPress} />
            <DelModalCompo DelonPress={modalFunctions.handleDeletePress} />
            <CloseModalCompo CloseonPress={modalFunctions.handleCloseModal} />
          </View>
        </BottomSheetModal>
        {/* 수정 바람 */}
        {/* 수정 완료 @ArinMiru김도원 23.10.03 */}
        <MenuTopbarStyle
          text="공지사항"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          onPressRegi={() => navigation.navigate("MNoticePostRegiPage")}
        />
        {/* FlatList를 사용하여 공지사항 데이터 출력 */}
        <FlatList
          data={noticeData?.OPEN_BUB}
          keyExtractor={(item) => item.CRE_SEQ.toString()} // "CRE_SEQ"를 문자열로 사용하여 고유 키로 지정
          renderItem={({ item }) => (
            <NoticePostBoxView
              MEMB_NM={item.MEMB_NM}
              MEMB_CD={item.TIT_NM}
              MEMB_DEP_CD={item.MEMB_DEP_NM}
              Title={item.TIT}
              PostingTime={item.CRE_DAT}
              postLike={item.LIKE_CNT}
              PostContent={item.CONT}
              onPress={modalFunctions.handleButtonPress}
            ></NoticePostBoxView>
          )}
          ItemSeparatorComponent={renderSeparator} // 항목 사이에 구분선 삽입
        />
        {modalFunctions.modalVisible && (
          <TouchableWithoutFeedback onPress={modalFunctions.handleCloseModal}>
            <View style={EditDelCloseModalStyle.overlay} />
          </TouchableWithoutFeedback>
        )}
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default NoTicePage;
