import { View, Text } from "react-native";
import React from "react";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { GreenCheckIcon } from "../../../Components/AllCompo/IconCompo/CheckIcon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import textStyle from "../../../Styles/TextStyle";

const UniCertiChk: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <AccountBackground>
      <View style={{ flex: 3, justifyContent: "flex-end" }}>
        <GreenCheckIcon />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text style={[textStyle.bold25]}>인증 완료</Text>
      </View>
      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <OnlyAccountButton
          text="로그인하러 가기"
          onPress={() => navigation.navigate("AccountLogin")}
          navigation={navigation}
        />
      </View>
    </AccountBackground>
  );
};

export default UniCertiChk;
