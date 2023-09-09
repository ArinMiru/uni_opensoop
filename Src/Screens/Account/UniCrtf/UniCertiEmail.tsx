import React from "react";
import { RegiCommonView } from "../../../Components/CommonSrc/RegiCommon"
import { ScreenProps } from "../../../Navigations/StackNavigator";

const UniCertiEmail: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <RegiCommonView
      bigtext="이메일"
      smalltext="입력하기"
      inputtext="이메일"
      buttontext="인증번호 전송"
      onPress={() => navigation.navigate("AccountLoginRegi")}
      navigation={navigation}
    />
  );
};

export default UniCertiEmail;
