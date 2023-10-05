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
      <QstListButton
        nickname="테스트"
        postanswer="답변하기"
        postcontent="ㅁㄴㅇㄹㅁㄴㅇㄹ"
      ></QstListButton>
      <QstListQstPushButton
        nickname="테스트"
        postanswer="답변하기"
        postcontent="ㅁㄴㅇㄹㅁㄴㅇㄹ"
        postanswercontent="찜닭이닭"
      ></QstListQstPushButton>
    </SafeAreaView>
  );
};

export default ListTest;
