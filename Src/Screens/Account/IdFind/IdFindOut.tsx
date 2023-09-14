import React from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";

/** 이메일로 아이디 찾기 아이디 출력 Screen */

const IdFindOut: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <RegiCommonView
      bigtext="아이디"
      smalltext="확인하기"
      inputtext="아이디 출력(변경예정)" //Text OutPut
      buttontext="로그인하러 가기"
      onPress={() => navigation.navigate("AccountLoginRegi")}
      navigation={navigation}
    />
  );
};

export default IdFindOut;
