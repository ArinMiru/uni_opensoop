import { View, Text } from "react-native";
import React from "react";
import { RegiButton } from "../../Components/ListCompo/RegiButton";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import {
  FreeListButton,
  FreEditButton,
  FreDelButton,
} from "../../Components/ListCompo/FreCompo/FreButton";
import {
  FreEditDelButton,
  FreLikeButtton,
  FreeListIclucontnButton,
} from "../../Components/ListCompo/FreCompo/FreButtonCompo";
import { OpenProfileIcon } from "../../Components/IconCompo/ProfileIcon";

const ListTest = () => {
  return (
    <SafeAreaView style={BackgroundStyle.AccountBackground}>
      <FreeListButton />
      <FreEditButton />
      <FreDelButton />
      <FreEditDelButton />
      <OpenProfileIcon />
      <FreLikeButtton />
      <FreeListIclucontnButton />
    </SafeAreaView>
  );
};

export default ListTest;
