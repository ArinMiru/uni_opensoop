import { View } from "react-native";
import React, { useState } from "react";
import { LoginBackground } from "../../../Components/AllCompo/Background";
import { BlackBackIconButton } from "../../../Components/AllCompo/BackIconButton";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { OnlyAccountInputCompoMarginTop3 } from "../../../Components/AccountCompo/AccoutTextInput";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { RegiTextflex1 } from "../../../Components/AccountCompo/AccountText";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { Image } from "react-native";
import RegiUserData, {
  setUserDataAndNavigate,
} from "../../../Utils/_private/RegiData/RegiUserData";

const RegiPass: React.FC<ScreenProps> = ({ navigation }) => {
  const [pass, setPass] = useState<string>("");
  const regiPassData = () => {
    setUserDataAndNavigate("PASS", pass, navigation, "AccountLoginRegi");
  };

  return (
    <LoginBackground>
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
      <View style={{ flex: 3 }}>
        <OnlyAccountInputCompoMarginTop3 text="비밀번호" />
        <OnlyAccountInputCompoMarginTop3 text="비밀번호 확인" />
      </View>
      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <OnlyAccountButton text="다음" onPress={regiPassData} />
      </View>
    </LoginBackground>
  );
};

export default RegiPass;
