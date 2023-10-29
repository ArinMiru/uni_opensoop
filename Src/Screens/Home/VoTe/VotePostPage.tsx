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

const VotePostPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData();
  const isFocused = useIsFocused();
  const [voteData, setVoteData] = useState<VoteData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [isButtonOn, setIsButtonOn] = useState<boolean>(false); // 1. 상태 관리

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
              sorted.VOTE_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
            }
            setVoteData(sorted);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("투표 게시판 데이터 가져오기 오류:", error);
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
      <View style={[NewBackgroundStyle.BottomTabBackgroundStyle]}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              marginTop: "5%",
              alignContent: "center",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              style={[
                { flexDirection: "row" },
                { alignItems: "center" },
                { marginRight: deviceWidth * 0.08 },
              ]}
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
                투표중
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: deviceWidth * 1,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Spinner
            // 로딩 상태에 따라 Spinner를 화면에 표시
            visible={loading}
            textContent={"로딩 중..."}
            textStyle={{ color: "#FFF" }}
          />
          <FlatList
            data={filteredVoteData} // 3. 필터링된 데이터 사용
            keyExtractor={(item) => item.CRE_SEQ.toString()}
            renderItem={({ item }) => {
              if (item.VOT_GO_CD === "VG") {
                return (
                  <UnVotedListButton
                    title={item.VOTE_TITLE}
                    poststatus={"투표 중"}
                    posttime={item.VOT_EXPR_DATE}
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
                );
              } else if (item.VOT_GO_CD === "VF") {
                return (
                  <VotedListButton
                    title={item.VOTE_TITLE}
                    poststatus={"투표 종료"}
                    posttime={item.VOT_EXPR_DATE}
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
