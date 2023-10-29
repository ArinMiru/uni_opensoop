import React from "react";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import TextStyle from "../../../Styles/TextStyle";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { VoteStatusPageButton } from "../../../Components/VoteCompo/VoteButton";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import {
  votBubStatCall,
  votBubListCall,
} from "../../../Services/_private/VoteApi";

/**
 * @Dowon(김도원 생성)
 * VotePostStatusPage
 */
interface VoteItem {
  index: number;
  text: string;
}

interface VoteStatData {
  RSLT_CD: string;
  VOT_BUB: VoteStatItem[];
}

interface VoteStatItem {
  RSLT_CD: string;
  VOT_TOT: number;
  VOT_SEQ: number;
  VOT_SUB_TOT: number;
  PRCT: number;
}

const VotPostStatusPage: React.FC<ScreenProps> = ({ navigation, route }) => {
  const userData = getUserData();
  const [voteStatData, setVoteStatData] = useState<VoteStatData | null>(null);

  const {
    VOT_TITLE,
    VOT_DESC,
    VOT_INFO,
    VOT_EXPR_DATE,
    CRE_SEQ,
    VOT_TYPE_CD,
    VOT_SEL_SEQ,
  } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      const data = await votBubStatCall(CRE_SEQ);
      console.log("Loaded data:", data);
      setVoteStatData(data);
    };
    fetchData();
  }, [CRE_SEQ]);

  const parseVOT_INFO = (vot_info: string) => {
    return vot_info.split(",").map((item) => {
      const [key, value] = item.split(":");
      return {
        id: key,
        name: value,
      };
    });
  };

  const parsedVotInfo = parseVOT_INFO(VOT_INFO);
  console.log("Parsed VOT_INFO:", parsedVotInfo);

  return (
    <Background>
      <BackIconTopbarStyle
        Title="투표현황"
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        onPress={() => navigation.goBack()}
      />
      <View style={[NewBackgroundStyle.OnlyTopRadiusBackgroundStyle]}>
        <View
          style={{
            flex: 1,
            width: deviceWidth * 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={[
              TextStyle.bold25,
              { marginLeft: deviceWidth * 0.06 },
              { color: "#1E232C" },
            ]}
          >
            {VOT_TITLE}
          </Text>
          <Text
            style={[
              TextStyle.medium09,
              { marginRight: deviceWidth * 0.06 },
              { color: "#9E9E9E" },
            ]}
          >
            {VOT_EXPR_DATE} {"마감"}
          </Text>
        </View>
        <View
          style={{
            flex: 6,
            flexDirection: "column",
            width: deviceWidth * 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {parsedVotInfo.map((item) => {
            const matchedVoteStat = voteStatData?.VOT_BUB.find(
              (voteStat) => voteStat.VOT_SEQ === Number(item.id)
            );
            console.log("Matched Vote Stat for", item.id, ":", matchedVoteStat);

            return (
              <View
                style={{
                  flex: 0.8,
                  justifyContent: "center",
                  alignItems: "center",
                  width: deviceWidth * 1,
                }}
              >
                <VoteStatusPageButton
                  key={item.id}
                  text={item.name}
                  votestatusnum={
                    matchedVoteStat
                      ? matchedVoteStat.VOT_SUB_TOT.toString()
                      : "0"
                  }
                />
              </View>
            );
          })}
          <View style={{ flex: 4 }}>
            <Text>{""}</Text>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default VotPostStatusPage;
