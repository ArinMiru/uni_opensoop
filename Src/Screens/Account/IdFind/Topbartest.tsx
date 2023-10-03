import React from "react";
import {
  MenuTopbarStyle,
  MenuTopbarStyleManager,
  BackIconTopbarStyle,
  BackIconDelTopbarStyle,
  BackIconRegiTopbarStyle,
  BackIconEditTopbarStyle,
} from "../../../Components/AllCompo/TopbarCompo";
import BackgroundStyle from "../../../Styles/BackgroundStyle";
import { View, SafeAreaView } from "react-native";
import { ScreenProps } from "../../../Navigations/StackNavigator";

const Topbartest: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={BackgroundStyle.AccountBackground}>
      <MenuTopbarStyle text="공지사항" navigation={navigation} />
      <View style={{ flex: 8 }}></View>
    </SafeAreaView>
  );
};

export default Topbartest;
