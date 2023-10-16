import { View, Text } from "react-native";
import React, { useState } from "react";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { BlackBackIconButton } from "../../../Components/IconCompo/BackIconButton";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { OnlyAccountInputCompoMarginTop3 } from "../../../Components/AccountCompo/AccoutTextInput";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { RegiTextflex1 } from "../../../Components/AccountCompo/AccountText";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { setUserDataAndNavigate } from "../../../Utils/_private/RegiData/RegiUserData";

const RegiPass: React.FC<ScreenProps> = ({ navigation }) => {
  const [pass, setPass] = useState<string>("");
  const [configPass, setConfigPass] = useState<string>("");

  const isButtonEnabled =
    pass.length >= 8 && configPass.length >= 8 && pass === configPass;

  const regiPassData = () => {
    setUserDataAndNavigate("PASS", pass, navigation, "RegiChk");
  };

  return (
    <AccountBackground>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          width: deviceWidth * 1,
        }}
      >
        <BlackBackIconButton
          text=""
          onPress={() => navigation.navigate("RegiNmNic")}
          navigation={navigation}
        ></BlackBackIconButton>
      </View>
      <RegiTextflex1 text="회원가입" />
      <View style={{ flex: 1 }}>
        <OnlyAccountInputCompoMarginTop3
          text="비밀번호"
          onChangeText={(text) => setPass(text)}
        />
      </View>
      <View style={{ flex: 2 }}>
        <OnlyAccountInputCompoMarginTop3
          text="비밀번호 확인"
          onChangeText={(text) => setConfigPass(text)}
        />
      </View>
      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <OnlyAccountButton
          text="다음"
          onPress={regiPassData}
          disable={!isButtonEnabled}
        />
      </View>
      {!isButtonEnabled && (
        <Text style={{ color: "red" }}>
          비밀번호가 8글자 이상이어야 하며 일치해야 합니다.
        </Text>
      )}
    </AccountBackground>
  );
};

export default RegiPass;
