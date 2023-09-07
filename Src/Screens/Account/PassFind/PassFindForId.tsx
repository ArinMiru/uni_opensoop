import React from "react";
import { RegiCommonView } from "../../../Components/CommonSrc/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";

const PassFindForId: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <RegiCommonView
      bigtext="아이디"
      smalltext="로 비밀번호 찾기"
      inputtext="아이디"
      buttontext="다음"
      onPress={() => navigation.navigate("AccountLoginRegi")}
      navigation={navigation}
    />
  );
};

export default PassFindForId;