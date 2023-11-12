import { Alert, View } from "react-native";
import React, { useEffect } from "react";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import {
  OnlyAccountButton,
  OnlyAccountRegiButton,
} from "../../../Components/AccountCompo/AccountButton";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { Image } from "react-native";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { checkStoredJWTToken } from "../../../Utils/_private/.secure/.autoLogin";
import { autoLogin } from "../../../Services/_private/EndPointApiFuntion";

const AccountLoginRegi: React.FC<ScreenProps> = ({ navigation }) => {
  /* useEffect(() => {
    const jwtAutoLogin = async () => {
      try {
        const tokenCheck = await checkStoredJWTToken();

        if (tokenCheck !== null) {
          const loginauto = await autoLogin(tokenCheck);

          if (loginauto !== null && loginauto === "00") {
            navigation.reset({
              index: 0,
              routes: [{ name: "BottomTabNavigations" }],
            });
          } else {
            Alert.alert(
              "경고",
              "로그인 30일이 경과 하여 자동 로그인이 해제 되었습니다 다시 로그인 해주세요"
            );
          }
        }
      } catch (error) {
        console.error("JWT 토큰 확인 및 자동 로그인 오류:", error);
      }
    };

    jwtAutoLogin();
  }, []); */

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
