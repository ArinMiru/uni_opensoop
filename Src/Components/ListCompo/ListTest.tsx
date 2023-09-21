import { View, Text } from "react-native";
import React from "react";
import { RegiButton } from "../ListCompo/RegiButton";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import {
  FreBefoClikButton,
  FreButton,
  SgsBefoClikButton,
  QstBefoClikButton,
  SgsButton,
  QstButton,
} from "../ListCompo/ListCategorieButton";
import {
  OpenFreSgsTitInputBox,
  OpenFreSgsContInputBox,
} from "./ListCommonInput";
import { ListCategorieCompo } from "../ListCompo/ListCategorieCompo";

const ListTest = () => {
  return (
    <SafeAreaView style={BackgroundStyle.AccountBackground}>
      <RegiButton text="등록" />
      <FreBefoClikButton text="자유" />
      <SgsBefoClikButton text="건의" />
      <QstBefoClikButton text="질문" />
      <FreButton text="자유" />
      <SgsButton text="건의" />
      <QstButton text="질문" />
      <OpenFreSgsTitInputBox text="제목을 입력하세요." />
      <OpenFreSgsContInputBox text="내용을 입력하세요." multiline={true} />
      <ListCategorieCompo />
    </SafeAreaView>
  );
};

export default ListTest;
