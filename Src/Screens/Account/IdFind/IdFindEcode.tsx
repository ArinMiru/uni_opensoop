import React from "react";
import { RegiCommonView } from "../../../Components/CommonSrc/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
const IdFindEcode: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <RegiCommonView
      bigtext="인증번호"
      smalltext="입력하기"
      text="안농이"
      buttontext="완료"
      onPress={() => navigation.navigate("IdFindOut")}
      navigation={navigation}
    />
  );
};

export default IdFindEcode;
