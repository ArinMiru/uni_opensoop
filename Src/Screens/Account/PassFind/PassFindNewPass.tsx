import { View, Text } from "react-native";
import React, { useState } from "react";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { OnlyAccountInputCompoMarginTop3 } from "../../../Components/AccountCompo/AccoutTextInput";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { RegiTextflex1 } from "../../../Components/AccountCompo/AccountText";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import BackgroundStyle from "../../../Styles/BackgroundStyle";
import textStyle from "../../../Styles/TextStyle";
import { deviceHeight } from "../../../Utils/DeviceUtils";
import { Image } from "react-native";
import RegiUserData, {
  setUserDataAndNavigate,
} from "../../../Utils/_private/RegiData/RegiUserData";

const PassFindNewPass: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <AccountBackground>
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
        }}
      ></View>
      <View style={BackgroundStyle.titleTextFlex}>
        <Text
          style={[
            textStyle.bold25,
            {
              color: "#4BB781",
              marginLeft: deviceWidth * 0.1,
              lineHeight: deviceWidth * 0.09,
            },
          ]}
        >
          새로운 비밀번호
        </Text>
        <Text
          style={[
            textStyle.medium20,
            {
              color: "#424C43",
              marginLeft: deviceWidth * 0.01,
              lineHeight: deviceHeight * 0.0459,
            },
          ]}
        >
          입력하기
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <OnlyAccountInputCompoMarginTop3 text="새로운 비밀번호" />
        <OnlyAccountInputCompoMarginTop3 text="새로운 비밀번호 확인" />
      </View>
      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <OnlyAccountButton
          text="다음"
          onPress={() => navigation.navigate("PassFindChk")}
        />
      </View>
    </AccountBackground>
  );
};

export default PassFindNewPass;
