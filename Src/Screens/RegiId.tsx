import { View } from "react-native";
import React from "react";
import { LoginBackground } from "../Components/Background";
import { IconButton } from "../Components/Button";
import { ScreenProps } from "../Navigations/StackNavigator";
import { Image } from "react-native";
import { deviceWidth } from "../Utils/DeviceUtils";
import { RegiText1, RegiCommonButton3, RegiNextButton } from "../Components/CommonView/CommonCompo";

const RegiId: React.FC<ScreenProps> = ({ navigation }) => {
  // 타입을 명시적으로 설정
  return (
    <LoginBackground>
        <View style={{flex:1, justifyContent:"flex-start", width:deviceWidth*1}}>
            <IconButton text="" onPress={() => navigation.navigate("AccountLoginRegi")} navigation={navigation}></IconButton>
        </View>
        <RegiText1 text="회원가입"/>
        <RegiCommonButton3 inputText="아이디" text="중복 확인"/>
        <RegiNextButton text="다음" onPress={() => navigation.navigate("RegiNmNic")} navigation={navigation}/>
    </LoginBackground>
  );
};

export default RegiId;