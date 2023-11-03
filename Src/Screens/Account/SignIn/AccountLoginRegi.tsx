import { View } from "react-native";
import React from "react";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import {
  OnlyAccountButton,
  OnlyAccountRegiButton,
} from "../../../Components/AccountCompo/AccountButton";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { Image } from "react-native";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";

const AccountLoginRegi: React.FC<ScreenProps> = ({ navigation }) => {
  // 타입을 명시적으로 설정

  return (
    <AccountBackground>
      <View style={{ flex: 5, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            resizeMode: "contain",
            width: deviceWidth * 0.5,
            marginTop: deviceHeight * 0.1,
          }}
          source={require("../../../Assets/Images/LoginRegiImage.png")}
        ></Image>
      </View>
      <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
        <OnlyAccountButton
          onPress={() => navigation.navigate("AccountLogin")}
          navigation={navigation}
          text="로그인"
        />
        <OnlyAccountRegiButton
          onPress={() => navigation.navigate("RegiId")}
          navigation={navigation}
          text="회원가입"
        />
      </View>
    </AccountBackground>
  );
};

export default AccountLoginRegi;
