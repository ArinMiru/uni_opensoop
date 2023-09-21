import React from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";

const UniCertiStudNum: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <RegiCommonView
      IconPress={() => navigation.navigate("UniCertiGrad")}
      bigtext="학번"
      smalltext="선택하기"
      inputtext="학번"
      buttontext="다음"
      onPress={() => navigation.navigate("UniCertiEmail")}
      navigation={navigation}
    />
  );
};

export default UniCertiStudNum;
