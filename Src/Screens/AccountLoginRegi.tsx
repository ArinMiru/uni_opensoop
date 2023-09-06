import { View } from "react-native";
import React from "react";
import { LoginBackground } from "../Components/Background";
import { LongButton, RegiButton } from "../Components/Button";
import { ScreenProps } from "../Navigations/StackNavigator";
import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";
import { Image } from "react-native";
const AccountLoginRegi: React.FC<ScreenProps> = ({ navigation }) => {
  // 타입을 명시적으로 설정
  const openModal = () => {
    navigation.navigate("ModalScreen");
  };
  return (
    <LoginBackground>
        <View style={{flex:5, justifyContent:"center", alignItems:"center"}}>
            <Image source={require("../Assets/Images/LoginRegiImage.png")}></Image>
        </View>
        <View style={{flex:3, justifyContent:"center", alignItems:"center"}}>
            <LongButton text="로그인"/>
            <RegiButton text="회원가입"/>
        </View>
        
    </LoginBackground>
  );
};

export default AccountLoginRegi;
