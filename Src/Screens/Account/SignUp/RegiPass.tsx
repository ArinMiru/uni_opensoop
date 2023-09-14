import { View } from "react-native";
import React from "react";
import { LoginBackground } from "../../../Components/Reusable/Background";
import {
  LongInput,
  LongInputMargin,
} from "../../../Components/Reusable/TextInput";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { Image } from "react-native";
import {
  RegiText2,
  RegiNextButton,
} from "../../../Components/CommonView/CommonCompo";

const RegiPass: React.FC<ScreenProps> = ({ navigation }) => {
  // 타입을 명시적으로 설정

  return (
    <LoginBackground>
      <RegiText2 text="회원가입" />
      <View style={{ flex: 3.3 }}>
        <LongInputMargin text="비밀번호" />
        <LongInput text="비밀번호 확인" />
      </View>
      <RegiNextButton
        text="다음"
        onPress={() => navigation.navigate("AccountLoginRegi")}
        navigation={navigation}
      />
    </LoginBackground>
  );
};

export default RegiPass;
