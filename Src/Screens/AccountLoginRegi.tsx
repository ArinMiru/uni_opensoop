import { View } from "react-native";
import React from "react";
import { LoginBackground } from "../Components/Background";
import { LongButton, RegiButton } from "../Components/Button";
import { ScreenProps } from "../Navigations/StackNavigator";
import { Image } from "react-native";
import { deviceHeight, deviceWidth } from "../Utils/DeviceUtils";
const AccountLoginRegi: React.FC<ScreenProps> = ({ navigation }) => {
  // 타입을 명시적으로 설정
  
  return (
    <LoginBackground>
        <View style={{flex:5, justifyContent:"center", alignItems:"center"}}>
            <Image style={{resizeMode:"contain", width:deviceWidth*0.5, marginTop:deviceHeight*0.1}} source={require("../Assets/Images/LoginRegiImage.png")}></Image>
        </View>
        <View style={{flex:3, justifyContent:"center", alignItems:"center"}}>
            <LongButton onPress={() => navigation.navigate("AccountLogin")} navigation={navigation} text="로그인"/>
            <RegiButton text="회원가입"/>
        </View>
        
    </LoginBackground>
  );
};

export default AccountLoginRegi;
