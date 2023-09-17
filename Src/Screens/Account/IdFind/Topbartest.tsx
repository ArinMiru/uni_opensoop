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
import { DrawerScreenProps } from "../../../Navigations/StackNavigator";

const TopbarStyletest: React.FC<DrawerScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={BackgroundStyle.AccountBackground}>
      <MenuTopbarStyle text="공지사항" navigation={navigation} />
      <View style={{ flex: 8 }}></View>
    </SafeAreaView>
  );
};

export default TopbarStyletest;
