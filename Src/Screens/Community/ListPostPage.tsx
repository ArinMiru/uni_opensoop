import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { FreeData } from "../../Utils/_private/ApiData/FreeData";
import { QuesBubListSvc } from "../../Services/_private/QusetPostData";
import { FlatList, View, TouchableWithoutFeedback } from "react-native";
import { FreeBubListCall } from "../../Services/_private/FreeApi";
import { ListCategorieCompo } from "../../Components/ListCompo/ListCommonCompo/ListCategorieCompo";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";
import { FreeListIclucontnButton } from "../../Components/ListCompo/FreCompo/FreButtonCompo";
import { ScreenProps } from "../../Navigations/StackNavigator";
import { MenuTopbarStyle } from "../../Components/AllCompo/TopbarCompo";
import NewBackgroundStyle from "../../Styles/NewBackgroundStyle";
import { Background } from "../../Components/AllCompo/Background";
import { SgsListContentButton } from "../../Components/ListCompo/SgsCompo/SgsButtonCompo";
import { QstListContentButton } from "../../Components/ListCompo/QstCompo/QstButtonCompo";
import { SugBubListData } from "../../Utils/_private/ApiData/SugBubListData";
import { SugBubListSvc } from "../../Services/_private/SugBubListApi";
import { QuestData } from "../../Utils/_private/ApiData/QuestData";
import Spinner from "react-native-loading-spinner-overlay";
import { ModalReuableFuction } from "../../Utils/ReusableFuction/ModalReuableFuction";
import { useModal } from "../../Screens/ModalContext";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import EditDelCloseModalStyle from "../../Styles/ModalStyles/EditDelCloseModalStyles";
import { QstModalCompo } from "../../Components/AllCompo/ModalCompo";
import { ListAnsTextInput } from "../../Components/AllCompo/ListAnsTextInputCompo";
import { useNavigation } from "@react-navigation/native";

const ListPostPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData();
  const [selectedCategory, setSelectedCategory] = useState("자유");
  const [freeData, setFreeData] = useState<FreeData | null>(null);
  const [questData, setQuestData] = useState<QuestData | null>(null);
  const [sugsData, setSugsData] = useState<SugBubListData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const isFocused = useIsFocused();
  const modalFunctions = ModalReuableFuction();
  const appNavigation = useNavigation();

  const { isModalVisible, setIsModalVisible } = useModal();

  // 모달을 열 때
  const openModal = () => {
    setIsModalVisible(true);
    // ... 모달 열기 관련 코드
  };

  // 모달을 닫을 때
  const closeModal = () => {
    setIsModalVisible(false);
    // ... 모달 닫기 관련 코드
  };

  useEffect(() => {
    // 모달의 상태에 따라 바텀탭 네비게이션 가시성 조정
    const setOptions = appNavigation.setOptions({
      tabBarVisible: !isModalVisible,
    });
    return setOptions;
  }, [isModalVisible, appNavigation]);

  useEffect(() => {
    if (userData !== null && isFocused) {
      setLoading(true);
      // 화면 포커스일 때만 실행
      // 자유게시판 데이터 가져오기
      FreeBubListCall(
        userData.LOGIN_ID,
        userData.MEMB_SC_CD,
        userData.MEMB_DEP_CD,
        userData.TIT_CD
      )
        .then((data) => {
          if (data !== null) {
            const sorted = { ...data };
            if (sorted.FREE_BUB) {
              sorted.FREE_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
            }
            setFreeData(sorted);
            console.log("실행");
          }
        })
        .catch((error) => {
          console.error("자유게시판 데이터 가져오기 오류:", error);
        });

      // 건의게시판 데이터 가져오기
      SugBubListSvc(
        userData.LOGIN_ID,
        userData.MEMB_SC_CD,
        userData.MEMB_DEP_CD,
        userData.TIT_CD
      )
        .then((data) => {
          if (data != null) {
            const sorted = { ...data };
            if (sorted.SUG_BUB) {
              sorted.SUG_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
            }
            setSugsData(sorted);
          }
        })
        .catch((error) => {
          console.error("건의게시판 데이터 가져오기 오류", error);
        });

      // 질문게시판 데이터 가져오기
      QuesBubListSvc(
        userData.LOGIN_ID,
        userData.MEMB_SC_CD,
        userData.MEMB_DEP_CD,
        userData.TIT_CD
      )
        .then((data) => {
          if (data !== null) {
            const sorted = { ...data };
            if (sorted.QUES_BUB) {
              sorted.QUES_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
            }
            setQuestData(sorted);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("질문게시판 데이터 가져오기 오류:", error);
        });
    }
  }, [userData, isFocused]);

  return (
    <Background>
      <BottomSheetModalProvider>
        {isModalVisible && <ListAnsTextInput />}
        <BottomSheetModal
          ref={modalFunctions.bottomSheetModalRef}
          index={1}
          snapPoints={["50%", "95%"]}
          enablePanDownToClose={true}
          onDismiss={() => {
            modalFunctions.handleCloseModal();
          }}
        >
          <View style={EditDelCloseModalStyle.contentContainer}>
            <QstModalCompo />
          </View>
        </BottomSheetModal>
        {selectedCategory === "자유" && (
          <MenuTopbarStyle
            Title="자유게시판"
            MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
            MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
            onPress={() => navigation.goBack()}
            onPressRegi={() => navigation.navigate("FrePostRegiPage")}
          />
        )}
        {selectedCategory === "건의" && (
          <MenuTopbarStyle
            Title="건의게시판"
            MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
            MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
            onPress={() => navigation.goBack()}
            onPressRegi={() => navigation.navigate("SgsPostRegiPage")}
          />
        )}
        {selectedCategory === "질문" && (
          <MenuTopbarStyle
            Title="질문게시판"
            MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
            MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
            onPress={() => navigation.goBack()}
            onPressRegi={() => navigation.navigate("QstPostRegiPage")}
          />
        )}
        <View
          style={[
            NewBackgroundStyle.BottomTabBackgroundStyle,
            { alignItems: "center" },
          ]}
        >
          <View
            style={{
              width: "100%",
              height: deviceHeight * 0.1,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <ListCategorieCompo
              firsttext="자유"
              secondtext="건의"
              thirdtext="질문"
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </View>
          <Spinner
            // 로딩 상태에 따라 Spinner를 화면에 표시
            visible={loading}
            textContent={"로딩 중..."}
            textStyle={{ color: "#FFF" }}
          />
          {selectedCategory === "자유" && freeData && (
            <FlatList
              data={freeData.FREE_BUB}
              keyExtractor={(item) => item.CRE_SEQ.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: deviceWidth * 1,
                    alignItems: "center",
                  }}
                >
                  <FreeListIclucontnButton
                    nickname={item.NICK_NM}
                    freposttime={item.CRE_DAT}
                    fretit={item.TIT}
                    frecont={item.CONT}
                    onPress={() => {
                      navigation.navigate("FrePostDetailPage", {
                        CRE_SEQ: item.CRE_SEQ,
                        NICK_NM: item.NICK_NM,
                        LIKE_CNT: item.LIKE_CNT,
                        CRE_DAT: item.CRE_DAT,
                        CONT: item.CONT,
                        TIT: item.TIT,
                        AnsFree: item.ANS_FREE,
                      });
                    }}
                  />
                </View>
              )}
            />
          )}
          {selectedCategory === "건의" && sugsData && (
            <FlatList
              data={sugsData.SUG_BUB}
              keyExtractor={(item) => item.CRE_SEQ.toString()}
              renderItem={({ item }) => {
                const canAccess =
                  userData?.TIT_CD === "05" || // 관리자
                  userData?.TIT_CD === "02" || // 학회장
                  userData?.TIT_CD === "03" || // 부학회장
                  item.MEMB_ID === userData?.LOGIN_ID; // 게시물 작성자와 현재 사용자의 아이디가 같은 경우
                return (
                  <View
                    style={{
                      width: deviceWidth * 1,
                      alignItems: "center",
                    }}
                  >
                    <SgsListContentButton
                      title={canAccess ? item.TIT : "비공개 게시물입니다."}
                      poststatus={""}
                      anonynick={canAccess ? item.NICK_NM : "재학생"}
                      sgsposttime={item.CRE_DAT}
                      postUserId={item.MEMB_ID}
                      currentUserId={userData?.LOGIN_ID}
                      TIT_CD={userData?.TIT_CD}
                      onPress={() => {
                        if (canAccess) {
                          navigation.navigate("SgsPostDetailPage", {
                            CRE_SEQ: item.CRE_SEQ,
                            CONT: item.CONT,
                            TIT: item.TIT,
                            CRE_DAT: item.CRE_DAT,
                            NICK_NM: item.NICK_NM,
                            AnsFree: item.ANS_FREE,
                          });
                        } else {
                          // 접근 권한이 없는 경우, 사용자에게 알림을 표시할 수 있습니다.
                          alert("해당 게시물에 접근 권한이 없습니다.");
                        }
                      }}
                    />
                  </View>
                );
              }}
            />
          )}

          {selectedCategory === "질문" && questData && (
            <FlatList
              data={questData.QUES_BUB}
              keyExtractor={(item) => item.CRE_SEQ.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: deviceWidth * 1,
                    alignItems: "center",
                  }}
                >
                  <FreeListIclucontnButton
                    nickname={item.NICK_NM}
                    freposttime={item.CRE_DAT}
                    fretit={item.TIT}
                    frecont={item.CONT}
                    onPress={() => {
                      // 1. 각 항목을 클릭했을 때 해당 게시글 데이터 추출
                      const postData = {
                        CRE_SEQ: item.CRE_SEQ,
                        AnsFree: item.ANS_FREE,
                      };
                      console.log(postData);
                      // 2. 공통 컴포넌트로 데이터 전달
                      modalFunctions.handleButtonPress(postData);
                    }}
                  />
                </View>
              )}
            />
          )}
        </View>
        {modalFunctions.modalVisible && (
          <TouchableWithoutFeedback onPress={modalFunctions.handleCloseModal}>
            <View style={EditDelCloseModalStyle.overlay} />
          </TouchableWithoutFeedback>
        )}
      </BottomSheetModalProvider>
    </Background>
  );
};

export default ListPostPage;
