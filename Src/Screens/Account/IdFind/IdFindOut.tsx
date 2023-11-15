import React from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";

/** 이메일로 아이디 찾기 아이디 출력 Screen */

const IdFindOut: React.FC<ScreenProps> = ({ navigation, route }) => {
  const memberId = route.params?.memberId; // 넘어온 아이디 값

  return (
    <RegiCommonView
      IconPress={() => navigation.navigate("IdFindEmail")}
      bigtext="아이디"
      smalltext="확인하기"
      inputtext={memberId}
      buttontext="로그인하러 가기"
      onPress={() => navigation.navigate("AccountLogin")}
      navigation={navigation}
      editable={false}
      
    />
  );
};

export default IdFindOut;
