import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import {
  QstListButton,
  QstListQstPushButton,
} from "../../Components/ListCompo/QstCompo/QstButtonCompo";
import { AnswerInputBox } from "../../Components/ListCompo/QstCompo/QstInputCompo";
import QstPostPage from "../Community/QuesTion/QstPostPage";

const ListTest = () => {
  return (
    <SafeAreaView style={BackgroundStyle.AccountBackground}>
      <QstListButton></QstListButton>
      <QstListQstPushButton></QstListQstPushButton>
    </SafeAreaView>
  );
};

export default ListTest;
