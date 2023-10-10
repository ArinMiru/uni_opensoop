import { View, Alert } from "react-native";
import React, { useState } from "react";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import {
  OnlyAccountButton,
  IdPassFindButton,
} from "../../../Components/AccountCompo/AccountButton";
import { OnlyAccountInputCompoMarginTop3 } from "../../../Components/AccountCompo/AccoutTextInput";
import { BlackBackIconButton } from "../../../Components/IconCompo/BackIconButton";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { Image } from "react-native";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { loginUser } from "../../../Services/_private/EndPointApiFuntion";

const AccountLogin: React.FC<ScreenProps> = ({ navigation }) => {
  // 아이디와 비밀번호 상태값과 타입 명시적 설정 설정
  const [LOGIN_ID, setLOGIN_ID] = useState<string>("");
  const [LOGIN_PASS, setLOGIN_PASS] = useState<string>("");

  const handleLogin = async () => {
    const result = await loginUser(LOGIN_ID, LOGIN_PASS);

    // getUserData 함수를 호출하여 사용자 정보를 가져옴
    const userData = getUserData();

    if (userData?.RSLT_CD === "00") {
      navigation.navigate("DrawerNavigator");
    }
  };

  return (
    <AccountBackground>
      <View
        style={{
          flex: 2,
          justifyContent: "flex-start",
          width: deviceWidth * 1,
        }}
      >
        <BlackBackIconButton
          text=""
          onPress={() => navigation.navigate("AccountLoginRegi")}
          navigation={navigation}
        ></BlackBackIconButton>
        <Image
          style={{
            resizeMode: "contain",
            width: deviceWidth * 0.7,
            marginLeft: deviceWidth * 0.15,
            marginTop: deviceHeight * 0.08,
          }}
          source={require("../../../Assets/Images/Loginimage.png")}
        ></Image>
      </View>
      <View style={{ flex: 1 }}>
        <OnlyAccountInputCompoMarginTop3
          text="아이디"
          value={LOGIN_ID}
          onChangeText={(text) => setLOGIN_ID(text)}
        />
      </View>
      <View style={{ flex: 2 }}>
        <OnlyAccountInputCompoMarginTop3
          text="비밀번호"
          value={LOGIN_PASS}
          onChangeText={(text) => setLOGIN_PASS(text)}
        />
      </View>
      <View
        style={{
          flex: 2,
        }}
      >
        <OnlyAccountButton text="로그인" onPress={handleLogin} />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <IdPassFindButton
          text="아이디찾기"
          onPress={() => navigation.navigate("IdFindEmail")}
        />
        <IdPassFindButton
          text="비밀번호찾기"
          onPress={() => navigation.navigate("PassFindForId")}
        />
      </View>
    </AccountBackground>
  );
};

export default AccountLogin;
