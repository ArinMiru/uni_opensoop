import { View } from "react-native";
import React, { useState } from "react";
import { LoginBackground } from "../../../Components/Reusable/Background";
import { IconButton } from "../../../Components/Reusable/Button";
import { LongButton } from "../../../Components/Reusable/Button";
import {
  OnlyAccountInputMarginTop2,
  OnlyAccountInputMarginTop3,
} from "../../../Components/AccountCompo/AccoutTextInput";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { RegiTextflex1 } from "../../../Components/AccountCompo/AccountText";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { setUserDataAndNavigate } from "../../../Utils/_private/RegiData/RegiUserData";

const RegiPass: React.FC<ScreenProps> = ({ navigation }) => {
  const [pass, setPass] = useState<string>("");
  const regiPassData = () => {
    setUserDataAndNavigate("PASS",pass,navigation,"AccountLoginRegi")
  }
  return (
    <LoginBackground>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          width: deviceWidth * 1,
        }}
      >
        <IconButton
          text=""
          onPress={() => navigation.navigate("RegiNmNic")}
          navigation={navigation}
        ></IconButton>
      </View>
      <RegiTextflex1 text="회원가입" />
      <View style={{ flex: 3 }}>
        <OnlyAccountInputMarginTop3
          text="비밀번호"
          value="pass"
          onChangeText={(text) => setPass(text)}
        />
        <OnlyAccountInputMarginTop2 text="비밀번호 확인" />
      </View>
      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <LongButton
          text="다음"
          onPress={() => navigation.navigate("RegiNmNic")}
        />
      </View>
    </LoginBackground>
  );
};

export default RegiPass;
