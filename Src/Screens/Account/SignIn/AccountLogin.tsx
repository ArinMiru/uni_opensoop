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
  // 아이디와 비밀번호 상태값과 타입 명시적 설정 설정
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 아이디 입력값 상태 핸들러
  const idInputChange = (idInput: string) => {
    setId(idInput);
  };

  // 비밀번호 입력값 상태 핸들러
  const passInputChange = (passInput: string) => {
    setPassword(passInput);
  };
  /**
   * 로그인 버튼 클릭시 동작 핸들러
   */
  const handleLoginPress = async () => {
    try {
      await fetchData(id, password);                                            // 1. 아이디와 비밀번호를 서버로 전송하여 데이터 가져오기
      const userData = getUserData();                                           // 2. 서버로부터 UserData 가져오기
      if (userData) {                                                           
        if (userData.RSLT_CD === "00") {                                        // 3. UserData가 존재하는 경우
          navigation.navigate("NoticePage");                                    // 4. RSLT_CD가 "00"이면 로그인 성공 메시지 출력 및 NoticePage로 이동
        } else {                                                                // 5. RSLT_CD가 "00"이 아니면 로그인 실패 메시지 출력
          Alert.alert(
            "에러",
            "로그인 실패: 아이디 또는 비밀번호가 일치하지 않습니다."
          );
        }
      } else {                                                                  // 6. UserData가 존재하지 않으면 서버에서 데이터를 가져오지 못한 경우 메시지 출력
        Alert.alert(
          "에러",
          "로그인 실패: 서버에서 데이터를 가져오지 못했습니다."
        );
      }
    } catch (error) {                                                           // 7. 데이터 전송 중 오류 발생 시 오류 메시지 출력
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
          onChangeText={idInputChange}
        />
        <LongInput
          text="비밀번호"
          value={password}
          onChangeText={passInputChange}
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
