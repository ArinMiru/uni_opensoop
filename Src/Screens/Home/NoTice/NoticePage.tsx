import { SafeAreaView, Text } from "react-native";
import React from "react";
import { getUserData } from "../../../Utils/ApiData/UserData";

const NoTicePage = () => {
  const userData = getUserData();
  return (
    <SafeAreaView style={{ flex: 2 }}>
      <Text>{userData?.MEMB_NM}</Text>
    </SafeAreaView>
  );
};

export default NoTicePage;
