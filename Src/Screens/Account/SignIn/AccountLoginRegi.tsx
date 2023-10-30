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
import { SrchDupleButton } from "../../../Components/AccountCompo/AccountButton";

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
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SrchDupleButton
            text="김도원"
            onPress={() => navigation.navigate("DowonTestScreen")}
          ></SrchDupleButton>
          <SrchDupleButton
            text="정은유"
            onPress={() => navigation.navigate("JungTestScreen")}
          ></SrchDupleButton>
          <SrchDupleButton
            text="류채현"
            onPress={() => navigation.navigate("RyuTestScreen")}
          ></SrchDupleButton>
        </View>
      </View>
    </AccountBackground>
  );
};

export default AccountLoginRegi;
