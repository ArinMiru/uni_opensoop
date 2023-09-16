import React from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import {
  MenuTopbar,
  MenuTopbarManager,
} from "../../../Components/AllCompo/TopbarCompo";
import BackgroundStyle from "../../../Styles/BackgroundStyle";
import { Text, View, SafeAreaView } from "react-native";

/** 이메일로 아이디 찾기 아이디 출력 Screen */

const Topbartest: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={BackgroundStyle.loginBackground}>
      <MenuTopbarManager text="공지사항" />
      <View
        style={{
          flex: 8,
          backgroundColor: "red",
        }}
      ></View>
    </SafeAreaView>
  );
};

export default Topbartest;
