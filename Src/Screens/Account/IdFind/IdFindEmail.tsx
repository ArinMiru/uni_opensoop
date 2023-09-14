import React from "react";
import { RegiCommonView } from "../../../Components/CommonSrc/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";

const IdFindEmail: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <RegiCommonView
      bigtext="이메일"
      smalltext="로 아이디 찾기"
      text="이메일"
      buttontext="다음"
      onPress={() => navigation.navigate("IdFindEcode")}
      navigation={navigation}
    />
  );
};

export default IdFindEmail;
