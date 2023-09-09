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
import { fetchData } from "../../../Services/ApiService";
import { getUserData } from "../../../Utils/ApiData/UserData";

const AccountLogin: React.FC<ScreenProps> = ({ navigation }) => {
  // 타입을 명시적으로 설정
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleData1Change = (text: string) => {
    setId(text);
  };

  const handleData2Change = (text: string) => {
    setPassword(text);
  };

  const handleLoginPress = async () => {
    try {
      await fetchData(id, password);
      const userData = getUserData();
      if (userData) {
        if (userData.RSLT_CD === "00") {
          navigation.navigate("NoticePage");
        } else {
          Alert.alert(
            "에러",
            "로그인 실패: 아이디 또는 비밀번호가 일치하지 않습니다."
          );
        }
      } else {
        Alert.alert(
          "에러",
          "로그인 실패: 서버에서 데이터를 가져오지 못했습니다."
        );
      }
    } catch (error) {
      console.error("데이터 전송 중 오류 발생:", error);
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
          value={id}
          onChangeText={handleData1Change}
        />
        <LongInput
          text="비밀번호"
          value={password}
          onChangeText={handleData2Change}
        />
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <LongButton text="로그인" onPress={handleLoginPress} />
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <LoginButton text="아이디찾기" />
        <LoginButton text="비밀번호찾기" />
      </View>
    </LoginBackground>
  );
};

export default AccountLogin;
