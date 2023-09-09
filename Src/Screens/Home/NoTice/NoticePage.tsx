import { SafeAreaView, Text } from "react-native";
import React from "react";
import { getUserData } from "../../../Utils/ApiData/UserData";

const userData = getUserData();

const NoTicePage = () => {
  return (
    <SafeAreaView style={{ flex: 2 }}>
      {userData ? (
        <Text>
          {userData.LOGIN_ID} {userData.NICK_NM}
        </Text>
      ) : (
        <Text>데이터를 불러오는 중입니다...</Text>
      )}
    </SafeAreaView>
  );
};

export default NoTicePage;