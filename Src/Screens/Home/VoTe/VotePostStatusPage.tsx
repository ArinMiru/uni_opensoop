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
  const [processedData, setProcessedData] = useState<VoteItem[]>([]);
  const {
    VOT_TITLE,
    VOT_DESC,
    VOT_INFO,
    VOT_EXPR_DATE,
    CRE_SEQ,
    VOT_TYPE_CD,
    VOT_SEL_SEQ,
  } = route.params;

  const formattedVOT_EXPR_DATE = VOT_EXPR_DATE.split(" ")[0];

  

  useEffect(() => {
    const fetchData = async () => {
      const data = await votBubStatCall(CRE_SEQ);
      
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
            width: deviceWidth * 0.775,
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              marginBottom: "3%",
            }}
          >
            <Text style={[TextStyle.bold23, { color: "#1E232C" }]}>
              {VOT_TITLE}
            </Text>
          </View>
          <View
            style={{
              flex: 0.4,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginBottom: "4%",
            }}
          >
            <Text style={[TextStyle.medium09, { color: "#9E9E9E" }]}>
              {formattedVOT_EXPR_DATE} {"마감"}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 4,
            flexDirection: "column",
            width: deviceWidth * 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {parsedVotInfo.map((item) => {
            const matchedVoteStat = voteStatData?.VOT_BUB.find(
              (voteStat) => voteStat.VOT_SEQ === Number(item.id)
            );


            return (
              <View
                style={{
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
        </View>
        <View style={{ flex: 4.5 }}></View>
      </View>
    </Background>
  );
};

export default VotPostStatusPage;
