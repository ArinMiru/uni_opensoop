import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { ViewUnvottedButton } from "../../../Components/VoteCompo/VoteButton";
import { UnVotedListButton } from "../../../Components/VoteCompo/VoteButton";
import { VotedListButton } from "../../../Components/VoteCompo/VoteButton";
import { MenuTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { votBubListCall } from "../../../Services/_private/VoteApi";
import { VoteData } from "../../../Utils/_private/ApiData/VoteData";
import { useIsFocused } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import textStyle from "../../../Styles/TextStyle";
import { timeUntilVoteEnds } from "../../../Utils/voteTimeUtil";

const VotePostPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData();
  const isFocused = useIsFocused();
  const [voteData, setVoteData] = useState<VoteData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isButtonOn, setIsButtonOn] = useState<boolean>(false);

  const filteredVoteData = isButtonOn
    ? voteData?.VOTE_BUB.filter((item) => item.VOT_GO_CD === "VG")
    : voteData?.VOTE_BUB;

  useEffect(() => {
    if (userData !== null && isFocused) {
      setLoading(true);
      votBubListCall()
        .then((data) => {
          if (data !== null) {
            const sorted = { ...data };
            if (sorted.VOTE_BUB) {
              // 투표 중 항목이 위에 오도록 정렬
              sorted.VOTE_BUB.sort((a, b) => {
                if (a.VOT_GO_CD === "VG" && b.VOT_GO_CD !== "VG") {
                  return -1;
                } else if (a.VOT_GO_CD !== "VG" && b.VOT_GO_CD === "VG") {
                  return 1;
                }

                // 투표 종료 항목은 투표 중 항목 뒤에 오도록 정렬
                if (a.VOT_GO_CD === "VF" && b.VOT_GO_CD === "VF") {
                  return (
                    new Date(a.VOT_EXPR_DATE).getTime() -
                    new Date(b.VOT_EXPR_DATE).getTime()
                  );
                }

                return 0; // 그 외의 경우에는 순서를 변경하지 않음
              });
            }
            setVoteData(sorted);
          }
          setLoading(false);
        })
        .catch((error) => {
        });
    }
  }, [userData, isFocused]);

  return (
    <Background>
      <MenuTopbarStyle
        Title="투표"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPressRegi={() => navigation.navigate("VotePostRegiPage")}
      />
      <View style={[NewBackgroundStyle.VoteTabBackgroundStyle]}>
        <View
          style={{
            flexDirection: "row",
            width: deviceWidth * 0.881,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              marginTop: "4%",
              marginBottom: "4%",
            }}
          >
            <TouchableOpacity
              style={[{ flexDirection: "row" }, { alignItems: "center" }]}
              onPress={() => setIsButtonOn(!isButtonOn)}
            >
              {isButtonOn ? (
                <Ionicons
                  name="ios-radio-button-on"
                  size={deviceWidth * 0.05}
                  color="#4BB781"
                />
              ) : (
                <Ionicons
                  name="ios-radio-button-off"
                  size={deviceWidth * 0.05}
                  color="#4BB781"
                />
              )}
              <Text
                style={[
                  textStyle.regular10,
                  { color: "#4BB781" },
                  { marginLeft: deviceWidth * 0.02 },
                ]}
              >
                진행중인 투표만 보기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: deviceWidth * 1,
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Spinner
            visible={loading}
            textContent={"로딩 중..."}
            textStyle={{ color: "#FFF" }}
          />
          <FlatList
            data={filteredVoteData} // 3. 필터링된 데이터 사용
            keyExtractor={(item, index) =>
              item.CRE_SEQ.toString() + "-" + index
            }
            renderItem={({ item }) => {
              if (item.VOT_GO_CD === "VG") {
                return (
                  <View
                    style={{
                      width: deviceWidth * 1,
                      alignItems: "center",
                    }}
                  >
                    <UnVotedListButton
                      title={item.VOTE_TITLE}
                      poststatus={"투표 중"}
                      posttime={timeUntilVoteEnds(item.VOT_EXPR_DATE)}
                      onPress={() =>
                        navigation.navigate("VotePostDetailPage", {
                          VOT_TITLE: item.VOTE_TITLE,
                          VOT_DESC: item.VOT_DESC,
                          VOT_EXPR_DATE: item.VOT_EXPR_DATE,
                          VOT_INFO: item.VOT_INFO,
                          VOT_TYPE_CD: item.VOT_TYPE_CD,
                          VOT_SEL_SEQ: item.VOT_SEL_SEQ,
                          CRE_SEQ: item.CRE_SEQ,
                        })
                      }
                    />
                  </View>
                );
              } else if (item.VOT_GO_CD === "VF") {
                return (
                  <View
                    style={{
                      width: deviceWidth * 1,
                      alignItems: "center",
                    }}
                  >
                    <VotedListButton
                      title={item.VOTE_TITLE}
                      poststatus={"투표 종료"}
                      posttime={timeUntilVoteEnds(item.VOT_EXPR_DATE)}
                      onPress={() =>
                        navigation.navigate("VotePostDetailPage", {
                          VOT_TITLE: item.VOTE_TITLE,
                          VOT_DESC: item.VOT_DESC,
                          VOT_EXPR_DATE: item.VOT_EXPR_DATE,
                          VOT_INFO: item.VOT_INFO,
                          VOT_TYPE_CD: item.VOT_TYPE_CD,
                          VOT_SEL_SEQ: item.VOT_SEL_SEQ,
                          CRE_SEQ: item.CRE_SEQ,
                        })
                      }
                    />
                  </View>
                );
              }
              return null; // 아무 컴포넌트도 반환하지 않을 경우
            }}
          />
        </View>
      </View>
    </Background>
  );
};

export default VotePostPage;
