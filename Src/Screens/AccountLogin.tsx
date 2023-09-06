import { View } from "react-native";
import React from "react";
import { LoginBackground } from "../Components/Background";
import { LongButton, LoginButton, IconButton } from "../Components/Button";
import { LongInput } from "../Components/TextInput";
import { ScreenProps } from "../Navigations/StackNavigator";
import { Image } from "react-native";
import { deviceHeight, deviceWidth } from "../Utils/DeviceUtils";
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";

const AccountLoginRegi: React.FC<ScreenProps> = ({ navigation }) => {
  // 타입을 명시적으로 설정
  const openModal = () => {
    navigation.navigate("ModalScreen");
  };
  return (
    <LoginBackground>
        <View style={{flex:2, justifyContent:"flex-start", width:deviceWidth*1}}>
            <IconButton text="" onPress={() => navigation.navigate("AccountLoginRegi")} navigation={navigation}></IconButton>
            <Image style={{resizeMode:"contain", width:deviceWidth*0.7, marginLeft:deviceWidth*0.15, marginTop:deviceHeight*0.08}} source={require("../Assets/Images/Loginimage.png")}></Image>
        </View>
        <View style={{flex:2.5, justifyContent:"center", alignItems:"center"}}>
            <LongInput text="아이디"/>
            <LongInput text="비밀번호"/>
        </View>
        <View style={{flex:2, justifyContent:"center", alignItems:"center"}}>
            <LongButton text="로그인"/>
        </View>
        <View style={{flex:3,justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
            <LoginButton text="아이디찾기"/> 
            <LoginButton text="비밀번호찾기"/>
        </View>
    </LoginBackground>
  );
};

export default AccountLoginRegi;
