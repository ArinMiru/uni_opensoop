import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import {
  OpenLikeButtton,
  OpenPhotoButton,
  OpenPhotoPlusBox,
  OpenPhotoDelBox,
} from "../../Components/ListCompo/OpenCompo/OpenButton";

const ListTest = () => {
  return (
    <SafeAreaView style={BackgroundStyle.AccountBackground}>
      <OpenPhotoButton />
      <OpenLikeButtton />
      <OpenPhotoPlusBox />
      <OpenPhotoDelBox />
    </SafeAreaView>
  );
};

export default ListTest;
