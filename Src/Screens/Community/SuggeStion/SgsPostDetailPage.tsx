import { View, Platform, KeyboardAvoidingView } from "react-native";
import React from "react";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import {
  SqsPost,
  SqsComment,
} from "../../../Components/ListCompo/SgsCompo/SgsCompo";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { CommentInput } from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import { ScrollView } from "react-native-gesture-handler";

const SgsPostClkToast: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <AccountBackground>
      <BackIconTopbarStyle text="게시판" onPress={() => navigation.goBack()} />
      <KeyboardAvoidingView
        style={{ flex: 1, marginBottom: deviceWidth * 0.02 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "android" ? -600 : 0}
      >
        <ScrollView>
          <SqsPost
            nickname="닉네임"
            sgstit="도원씨 안녕하세요"
            sgscont="사실 안 안녕하다 이녀석아 ㅋㅋ"
            sgsposttime="0초전"
          />
          <View
            style={[
              SgsButtonStyles.divideContentsLine,
              { marginTop: deviceHeight * 0.018 },
            ]}
          ></View>
          <SqsComment
            sgsansnick="익명이"
            sgsanstit="한우를 먹고 싶나 오마에"
            sgsanstime="10년전"
          />
          <CommentInput text="댓글을 입력하세요." />
        </ScrollView>
      </KeyboardAvoidingView>
    </AccountBackground>
  );
};

export default SgsPostClkToast;
