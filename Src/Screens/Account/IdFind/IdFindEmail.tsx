import React from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";

/** 이메일로 아이디 찾기 Screen */

const IdFindEmail: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <RegiCommonView
      bigtext="이메일"
      smalltext="로 아이디 찾기"
      inputtext="이메일"
      buttontext="다음"
      onPress={() => navigation.navigate("IdFindOut")}
      navigation={navigation}
    />
  );
};

export default IdFindEmail;
