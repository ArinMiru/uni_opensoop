import React from "react";
import { View, Text } from "react-native";
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

const VotPostStatusPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData();
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
            {"VOT_TITLE"}
          </Text>
          <Text
            style={[
              TextStyle.medium09,
              { marginRight: deviceWidth * 0.06 },
              { color: "#9E9E9E" },
            ]}
          >
            {"VOT_EXPR_DATE "} {"마감"}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "column",
            width: deviceWidth * 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              width: deviceWidth * 1,
            }}
          >
            <VoteStatusPageButton text="VOT_INFO" votestatusnum="5" />
            {/** votestatusnum="VOT_SUB_TOT" */}
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: deviceWidth * 1,
            }}
          >
            <VoteStatusPageButton text="VOT_INFO" votestatusnum="5" />
            {/** votestatusnum="VOT_SUB_TOT" */}
          </View>
        </View>
        <View
          style={{
            flex: 5,
            width: deviceWidth * 1,
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <VoteStatusPageButton text="VOT_INFO" votestatusnum="5" />
          {/** votestatusnum="VOT_SUB_TOT" */}
        </View>
      </View>
    </Background>
  );
};

export default VotPostStatusPage;
