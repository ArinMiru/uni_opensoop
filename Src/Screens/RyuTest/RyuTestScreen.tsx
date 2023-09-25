import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import { QstListButton } from "../../Components/ListCompo/QstCompo/QstButtonCompo";
import { AnswerInputBox } from "../../Components/ListCompo/QstCompo/QstInputCompo";

const ListTest = () => {
  return (
    <SafeAreaView style={BackgroundStyle.AccountBackground}>
      <QstListButton />
      <AnswerInputBox />
    </SafeAreaView>
  );
};

export default ListTest;
