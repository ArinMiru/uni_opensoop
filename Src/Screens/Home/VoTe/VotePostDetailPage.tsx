import React from "react";
import { View, Text } from "react-native";
import TextStyle from "../../../Styles/TextStyle";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { VoteStatusButton } from "../../../Components/VoteCompo/VoteButton";
import { VoteUnSlctButton } from "../../../Components/VoteCompo/VoteButton";
import { VoteRegiButton } from "../../../Components/VoteCompo/VoteButton";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { ScreenProps } from "../../../Navigations/StackNavigator";

/**
 * @Dowon(김도원 생성)
 * 투표 게시물 별 상세 페이지 (투표하는 페이지)
 * VotePostDetailPage
 * API -> 투표 조회 (연결)
 * 투표 조회에 모든 정보들 포함되어있음
 * 투표 버튼 클릭 후 별도 API 호출 필요 ( 실시간 투표 현황 업데이트 위함 )
 * 서비스 URL -> VotBubListSvc
 * 어떤 투표 정보를 파싱해야하는지 작성해뒀음 (참고)
 */

const VotePostDetailPage: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <AccountBackground>
      <BackIconTopbarStyle text="투표" onPress={() => navigation.goBack()} />

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
          flex: 3,
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
          <VoteUnSlctButton text="VOT_INFO" />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: deviceWidth * 1,
          }}
        >
          <VoteUnSlctButton text="VOT_INFO" />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            width: deviceWidth * 1,
          }}
        >
          <VoteUnSlctButton text="VOT_INFO" />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <VoteRegiButton />
      </View>
      <View
        style={{
          flex: 3,
          width: deviceWidth * 1,
          justifyContent: "flex-start",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <VoteStatusButton />
        {["02", "03", "05"].includes(/* userData?.TIT_CD ?? */ "") ? (
          //상단 userData 주석 api 포함 예정
          <VoteStatusButton
          // onPressDel={}
          />
        ) : (
          <View style={{ flex: 3, width: deviceWidth * 1 }}></View>
        )}
      </View>
    </AccountBackground>
  );
};

export default VotePostDetailPage;
