import React from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";

const PassFindForId: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <RegiCommonView
      IconPress={() => navigation.navigate("AccountLogin")}
      bigtext="아이디"
      smalltext="로 비밀번호 찾기"
      inputtext="아이디"
      buttontext="다음"
      onPress={() => navigation.navigate("PassFindForEmail")}
      navigation={navigation}
    />
  );
};

export default PassFindForId;
