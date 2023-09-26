import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import { QstListButton } from "../../Components/ListCompo/QstCompo/QstButtonCompo";
import { AnswerInputBox } from "../../Components/ListCompo/QstCompo/QstInputCompo";

const ListTest = () => {
  return (
    <SafeAreaView style={BackgroundStyle.AccountBackground}>
      <QstListButton
        nickname="김정일"
        postanswer="답변하기"
        postcontent="우리의 소망은 통일??"
      />
      <AnswerInputBox />
    </SafeAreaView>
  );
};

export default ListTest;
