import React from "react";
import { RegiCommonView } from "../../../Components/CommonSrc/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";

const UniCertiDprtSrch: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <RegiCommonView
      bigtext="학과/전공"
      smalltext="선택하기"
      inputtext="학과/전공"
      buttontext="다음"
      onPress={() => navigation.navigate("AccountLoginRegi")}
      navigation={navigation}
    />
  );
};

export default UniCertiDprtSrch;
