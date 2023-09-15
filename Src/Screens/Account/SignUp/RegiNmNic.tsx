import { View } from "react-native";
import React, { useState } from "react";
import { LoginBackground } from "../../../Components/AllCompo/Background";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { BlackBackIconButton } from "../../../Components/AllCompo/BackIconButton";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { Image } from "react-native";
import { RegiTextflex1 } from "../../../Components/AccountCompo/AccountText";
import { RegiDupleFlex2 } from "../../../Components/AccountCompo/AccountCustomCompo";
import RegiUserData, {
  setUserDataAndNavigate,
} from "../../../Utils/_private/RegiData/RegiUserData";
import { OnlyAccountInputMarginTop3 } from "../../../Components/AccountCompo/AccoutTextInput";
import { nickCheckpoint } from "../../../Services/_private/EndPointApiFuntion";

const RegiNmNic: React.FC<ScreenProps> = ({ navigation }) => {
  const [userRegiNick, setUserRegNick] = useState<string>("");

  const NickCHeck = async () => {
    const result = await nickCheckpoint(userRegiNick);
  };

  const RegiUserDataSave = () => {
    setUserDataAndNavigate("NICK_NM", userRegiNick, navigation, "RegiPass");
    console.log(RegiUserData.NICK_NM);
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
          onPress={() => navigation.navigate("RegiId")}
          navigation={navigation}
        ></BlackBackIconButton>
      </View>
      <RegiTextflex1 text="회원가입" />
      <View style={{ flex: 1 }}>
        <OnlyAccountInputMarginTop3 text="이름을 입력해주세요." />
      </View>
      <RegiDupleFlex2
        inputText="닉네임"
        text="중복 확인"
        value={userRegiNick}
        onChangeText={(text) => setUserRegNick(text)}
        onPress={NickCHeck}
      />
      <View
        style={{
          flex: 4,
          justifyContent: "flex-start",
        }}
      >
        <OnlyAccountButton text="다음" onPress={RegiUserDataSave} />
      </View>
    </LoginBackground>
  );
};

export default RegiNmNic;
