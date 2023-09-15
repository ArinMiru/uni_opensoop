import { SafeAreaView, Text } from "react-native";
import React from "react";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";

const NoTicePage = () => {
  const userData = getUserData();
  return (
    <SafeAreaView style={{ flex: 2 }}>
      <Text>{userData?.MEMB_NM}</Text>
      {userData?.TIT_CD === "02" && <Text> 학회장 </Text>}
    </SafeAreaView>
  );
};

export default NoTicePage;
