import React from "react";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import {
  MenuTopbarStyle,
  MenuTopbarStyleManager,
  BackIocnTopbarStyle,
  BackIconDelTopbarStyle,
  BackIconRegiTopbarStyle,
  BackIconEditTopbarStyle,
} from "../../../Components/AllCompo/TopbarCompo";
import BackgroundStyle from "../../../Styles/BackgroundStyle";
import { View, SafeAreaView } from "react-native";

const TopbarStyletest: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={BackgroundStyle.AccountBackground}>
      <BackIconRegiTopbarStyle text="공지사항" />
      <View style={{ flex: 8 }}></View>
    </SafeAreaView>
  );
};

export default TopbarStyletest;
