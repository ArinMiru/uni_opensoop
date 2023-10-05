import { View, Text } from "react-native";
import React from "react";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import {
  SqsPost,
  SqsComment,
} from "../../../Components/ListCompo/SgsCompo/SgsCompo";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { CommentInput } from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";

const SgsPostClkToast: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <AccountBackground>
      <BackIconTopbarStyle text="게시판" onPress={() => navigation.goBack()} />
      <View
        style={[
          SgsButtonStyles.divideContentsLine,
          {
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            width: deviceWidth * 1,
          },
        ]}
      >
        <SqsPost
          nickname="닉네임"
          sgstit="도원씨 안녕하세요"
          sgscont="사실 안 안녕하다 이녀석아 ㅋㅋ"
          sgsposttime="0초전"
        />
      </View>
      <View style={{ flex: 5 }}>
        <SqsComment
          commtnick="익명이"
          comtt="한우를 먹고 싶나 오마에"
          commtime="10년전"
        />
      </View>
      <View style={{ flex: 1 }}>
        <CommentInput text="댓글을 입력하세요." />
      </View>
    </AccountBackground>
  );
};

export default SgsPostClkToast;
