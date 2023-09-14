import { View } from "react-native";
import React from "react";
import { LoginBackground } from "../../../Components/Reusable/Background";
import { IconButton } from "../../../Components/Reusable/Button";
import { LongButton } from "../../../Components/Reusable/Button";
import {
  OnlyAccountInputMarginTop2,
  OnlyAccountInputMarginTop3,
} from "../../../Components/AccountCompo/AccoutTextInput";
import { RegiTextflex1 } from "../../../Components/AccountCompo/AccountText";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { Image } from "react-native";

const RegiPass: React.FC<ScreenProps> = ({ navigation }) => {
  // 타입을 명시적으로 설정

  return (
    <LoginBackground>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          width: deviceWidth * 1,
        }}
      >
        <IconButton
          text=""
          onPress={() => navigation.navigate("RegiNmNic")}
          navigation={navigation}
        ></IconButton>
      </View>
      <RegiTextflex1 text="회원가입" />
      <View style={{ flex: 3 }}>
        <OnlyAccountInputMarginTop3 text="비밀번호" />
        <OnlyAccountInputMarginTop2 text="비밀번호 확인" />
      </View>
      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <LongButton
          text="다음"
          onPress={() => navigation.navigate("RegiNmNic")}
        />
      </View>
    </LoginBackground>
  );
};

export default RegiPass;
