import React from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";

const UniCertiEcode: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <RegiCommonView
      bigtext="인증번호"
      smalltext="입력하기"
      inputtext="인증번호"
      buttontext="완료"
      onPress={() => navigation.navigate("AccountLoginRegi")}
      navigation={navigation}
    />
  );
};

export default UniCertiEcode;
