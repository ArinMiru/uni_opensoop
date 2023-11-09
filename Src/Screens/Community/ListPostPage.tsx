import React, { useEffect, useState } from "react";
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { FreeData } from "../../Utils/_private/ApiData/FreeData";
import { quesBubListSvc } from "../../Services/_private/QusetApi";
import { FlatList, View, Alert } from "react-native";
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
import { timeSince } from "../../Utils/timeUtils";

const ListPostPage: React.FC<ScreenProps> = ({ navigation, route }) => {
  const userData = getUserData();
  const [selectedCategory, setSelectedCategory] = useState("자유");
  const [freeData, setFreeData] = useState<FreeData>({
    RSLT_CD: "",
    FREE_BUB: [],
  });
  const [questData, setQuestData] = useState<QuestData | null>({
    RSLT_CD: "",
    QUES_BUB: [],
  });
  const [sugsData, setSugsData] = useState<SugBubListData | null>({
    RSLT_CD: "",
    SUG_BUB: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [freePage, setFreePage] = useState<number>(1);
  const [questPage, setQuestPage] = useState<number>(1);
  const [sugPage, setSugPage] = useState<number>(1);

  // ListPostPage 컴포넌트 내부
  React.useEffect(() => {
    if (route.params?.selectedCategory) {
      setSelectedCategory(route.params.selectedCategory);
    }
  }, [route.params?.selectedCategory]);

  const fetchData = (category: string, page: number) => {
    setLoading(true);
    switch (category) {
      case "자유":
        FreeBubListCall(page)
          .then((data) => {
            if (data !== null) {
              const sorted = { ...data };
              if (sorted.FREE_BUB) {
                sorted.FREE_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
              }
              if (page === 1) {
                setFreeData({ RSLT_CD: "", FREE_BUB: [] });
                setFreePage(1);
              }
              setFreeData((prevData) => {
                return {
                  ...prevData,
                  FREE_BUB: [...prevData.FREE_BUB, ...sorted.FREE_BUB],
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
        break;
      case "질문":
        quesBubListSvc(page)
          .then((data) => {
            if (data !== null) {
              const sorted = { ...data };
              if (sorted.QUES_BUB) {
                sorted.QUES_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
              }
              if (page === 1) {
                setQuestData({ RSLT_CD: "", QUES_BUB: [] });
                setQuestPage(1);
              }
              setQuestData((prevData) => {
                if (prevData) {
                  return {
                    ...prevData,
                    QUES_BUB: [...prevData.QUES_BUB, ...sorted.QUES_BUB],
                    RSLT_CD: prevData.RSLT_CD,
                  };
                } else {
                  return {
                    QUES_BUB: sorted.QUES_BUB,
                    RSLT_CD: "00",
                  };
                }
              });
            }
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            console.error("데이터 가져오기 오류:", error);
            Alert.alert("오류", "데이터를 가져오는데 실패했습니다.");
          });

        break;
      case "건의":
        SugBubListSvc(page)
          .then((data) => {
            if (data !== null) {
              const sorted = { ...data };
              if (sorted.SUG_BUB) {
                sorted.SUG_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
              }
              if (page === 1) {
                setSugsData({ RSLT_CD: "", SUG_BUB: [] });
                setSugPage(1);
              }
              setSugsData((prevData) => {
                if (prevData) {
                  return {
                    ...prevData,
                    SUG_BUB: [...prevData.SUG_BUB, ...sorted.SUG_BUB],
                    RSLT_CD: prevData.RSLT_CD,
                  };
                } else {
                  return {
                    SUG_BUB: sorted.SUG_BUB,
                    RSLT_CD: "00",
                  };
                }
              });
            }
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            console.error("데이터 가져오기 오류:", error);
            Alert.alert("오류", "데이터를 가져오는데 실패했습니다.");
          });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const categories = ["자유", "건의", "질문"];
    categories.forEach((category) => {
      fetchData(category, 1);
    });
  }, []);

  const fetchNextPage = () => {
    if (selectedCategory === "자유") {
      let freeNewPage = freePage + 1;
      fetchData(selectedCategory, freeNewPage);
      setFreePage(freeNewPage);
    } else if (selectedCategory === "질문") {
      let quesNewPage = questPage + 1;
      fetchData(selectedCategory, quesNewPage);
      setQuestPage(quesNewPage);
    } else if (selectedCategory === "건의") {
      let sugsNewPage = sugPage + 1;
      fetchData(selectedCategory, sugsNewPage);
      setSugPage(sugsNewPage);
    }
  };
  const loadNewPage = () => {
    if (selectedCategory === "자유") {
      fetchData(selectedCategory, 1);
    } else if (selectedCategory === "질문") {
      fetchData(selectedCategory, 1);
    } else if (selectedCategory === "건의") {
      fetchData(selectedCategory, 1);
    }
  };

  return (
    <Background>
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
            keyExtractor={(item, index) =>
              item.CRE_SEQ.toString() + "-" + index
            }
            renderItem={({ item }) => (
              <View
                style={{
                  width: deviceWidth * 1,
                  alignItems: "center",
                }}
              >
                <FreeListIclucontnButton
                  nickname={item.NICK_NM}
                  freposttime={timeSince(item.CRE_DAT)}
                  frepostanscount={item.ANS_FREE.map(
                    (ans) => ans.TOTAL_ANS
                  ).reduce((a, b) => a + b / 2, 0)}
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
            onEndReached={fetchNextPage}
            onEndReachedThreshold={0.1}
            onRefresh={loadNewPage}
            refreshing={loading}
          />
        )}
        {selectedCategory === "건의" && sugsData && (
          <FlatList
            data={sugsData.SUG_BUB}
            keyExtractor={(item, index) =>
              item.CRE_SEQ.toString() + "-" + index
            }
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
                    sgsposttime={timeSince(item.CRE_DAT)}
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
            onEndReached={fetchNextPage}
            onEndReachedThreshold={0.1}
            onRefresh={loadNewPage}
            refreshing={loading}
          />
        )}

        {selectedCategory === "질문" && questData && (
          <FlatList
            data={questData.QUES_BUB}
            keyExtractor={(item, index) =>
              item.CRE_SEQ.toString() + "-" + index
            }
            renderItem={({ item }) => (
              <View
                style={{
                  width: deviceWidth * 1,
                  alignItems: "center",
                }}
              >
                <QstListContentButton
                  nickname={item.NICK_NM}
                  qstposttime={timeSince(item.CRE_DAT)}
                  postanswercount={10}
                  postcontent={item.TIT}
                  onPress={() => {
                    navigation.navigate("QstPostDetailPage", {
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
            onEndReached={fetchNextPage}
            onEndReachedThreshold={0.1}
            onRefresh={loadNewPage}
            refreshing={loading}
          />
        )}
      </View>
    </Background>
  );
};

export default ListPostPage;
