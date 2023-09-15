import React from "react";
import { RegiCommonView } from "../../../Components/CommonSrc/RegiCommon"
import { ScreenProps } from "../../../Navigations/StackNavigator";

const PassFindForEmail: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <RegiCommonView
      bigtext="이메일"
      smalltext="로 비밀번호 찾기"
      inputtext="이메일"
      buttontext="인증번호 전송"
      onPress={() => navigation.navigate("PassFindEcode")}
      navigation={navigation}
    />
  );
};

export default PassFindForEmail;
