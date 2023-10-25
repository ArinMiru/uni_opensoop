import { View, Alert, Keyboard, Animated } from "react-native";
import React, { useState, useEffect, useRef } from "react";
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

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const buttonPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(buttonPosition, {
      toValue: isFocused ? -deviceHeight * 0.099 : 0, // 원하는 위치값으로 이동
      duration: 250, // 움직이는 시간
      useNativeDriver: false, // native driver 사용 설정
    }).start();
  }, [isFocused]);

  useEffect(() => {
    // 키보드가 나타날 때의 이벤트 리스너
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsFocused(true);
      }
    );

    // 키보드가 사라질 때의 이벤트 리스너
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsFocused(false);
      }
    );

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleLogin = async () => {
    const result = await loginUser(LOGIN_ID, LOGIN_PASS);

    // getUserData 함수를 호출하여 사용자 정보를 가져옴
    const userData = getUserData();

    if (userData?.RSLT_CD === "00") {
      navigation.navigate("BottomTabNavigations");
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
          keyboardType="default"
          autoCapitalize="none"
          onFocus={() => setIsFocused(true)} // 포커스될 때
          onBlur={() => setIsFocused(false)} // 포커스가 해제될 때
        />
      </View>
      <View style={{ flex: 1 }}>
        <OnlyAccountInputCompoMarginTop3
          text="비밀번호"
          value={LOGIN_PASS}
          onChangeText={(text) => setLOGIN_PASS(text)}
          autoCapitalize="none"
          keyboardType="default"
          secureTextEntry={true}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <Animated.View
        style={{
          flex: 3,
          justifyContent: "center",
          transform: [{ translateY: buttonPosition }], // Animated value를 이용한 변환
        }}
      >
        <OnlyAccountButton text="로그인" onPress={handleLogin} />
      </Animated.View>
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
