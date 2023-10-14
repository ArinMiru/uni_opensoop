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
  const [sortedData, setSortedData] = useState<NoticeData | null>(null); // 정렬된 공지사항 데이터

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

  // 해당 게시글의 CRE_SEQ를 얻기 위한 함수 예시 특정 변수에 저장하는 로직을 변경 하여야 됌 아마도 Utils 디렉토리로 이동할 예정임
  const handleItemPress = (creSeq: number) => {
    console.log(creSeq);
  };

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
          data={sortedData?.OPEN_BUB}
          keyExtractor={(item) => item.CRE_SEQ.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item.CRE_SEQ)}>
              {/* 해당 게시글의 CRE_SEQ 값을얻기 위한 예시 나중에 바텀시트 나오는 버튼 클릭 시 얻는걸로 변경하여야 됌 지금은 게시글 자체만 클릭해도 얻어 짐*/}
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
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={renderSeparator}
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
