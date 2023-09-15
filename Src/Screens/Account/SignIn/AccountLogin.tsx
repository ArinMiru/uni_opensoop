import { View, Alert } from "react-native";
import React, { useState } from "react";
import { LoginBackground } from "../../../Components/Reusable/Background";
import {
  LongButton,
  LoginButton,
  IconButton,
} from "../../../Components/Reusable/Button";
import {
  LongInput,
  LongInputMargin,
} from "../../../Components/Reusable/TextInput";
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

    if (getUserData()?.RSLT_CD === "00") {
      navigation.navigate("NoticePage");
    }
  };

  return (
    <LoginBackground>
      <View
        style={{
          flex: 2,
          justifyContent: "flex-start",
          width: deviceWidth * 1,
        }}
      >
        <IconButton
          text=""
          onPress={() => navigation.navigate("AccountLoginRegi")}
          navigation={navigation}
        ></IconButton>
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
      <View style={{ flex: 2.5 }}>
        <LongInputMargin
          text="아이디"
          value={LOGIN_ID}
          onChangeText={(text) => setLOGIN_ID(text)}
        />
        <LongInput
          text="비밀번호"
          value={LOGIN_PASS}
          onChangeText={(text) => setLOGIN_PASS(text)}
        />
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <LongButton text="로그인" onPress={handleLogin} />
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <LoginButton
          text="아이디찾기"
          onPress={() => navigation.navigate("IdFindEcode")}
        />
        <LoginButton text="비밀번호찾기" />
      </View>
    </LoginBackground>
  );
};

export default AccountLogin;
