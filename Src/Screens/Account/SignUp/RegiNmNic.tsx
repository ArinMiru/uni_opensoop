import { View } from "react-native";
import React from "react";
import { LoginBackground } from "../../../Components/Reusable/Background";
import { LongInput } from "../../../Components/Reusable/TextInput";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { Image } from "react-native";
import {
  RegiText2,
  RegiCommonButton2,
  RegiNextButton,
} from "../../../Components/CommonView/CommonCompo";

const RegiNmNic: React.FC<ScreenProps> = ({ navigation }) => {
  // 타입을 명시적으로 설정

  return (
    <LoginBackground>
      <RegiText2 text="회원가입" />
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <LongInput text="이름을 입력해주세요." />
      </View>
      <RegiCommonButton2 inputText="닉네임" text="중복 확인" />
      <RegiNextButton
        text="다음"
        onPress={() => navigation.navigate("RegiPass")}
        navigation={navigation}
      />
    </LoginBackground>
  );
};

export default RegiNmNic;
