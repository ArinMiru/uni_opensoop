import { View } from "react-native";
import React from "react";
import { LoginBackground } from "../../../Components/AllCompo/Background";
import { IconButton } from "../../../Components/Reusable/Button";
import { LongButton } from "../../../Components/Reusable/Button";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { Image } from "react-native";
import { RegiTextflex1 } from "../../../Components/AccountCompo/AccountText";
import { RegiDupleFlex2 } from "../../../Components/AccountCompo/AccountCustomCompo";
import RegiUserData from "../../../Utils/_private/RegiData/RegiUserData";
import { OnlyAccountInputMarginTop3 } from "../../../Components/AccountCompo/AccoutTextInput";

const RegiNmNic: React.FC<ScreenProps> = ({ navigation }) => {
  // 타입을 명시적으로 설정
  console.log(RegiUserData.MEMB_ID);

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
          onPress={() => navigation.navigate("RegiId")}
          navigation={navigation}
        ></IconButton>
      </View>
      <RegiTextflex1 text="회원가입" />
      <View style={{ flex: 1 }}>
        <OnlyAccountInputMarginTop3 text="이름을 입력해주세요." />
      </View>
      <RegiDupleFlex2 inputText="닉네임" text="중복 확인" />
      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <LongButton
          text="다음"
          onPress={() => navigation.navigate("RegiPass")}
        />
      </View>
    </LoginBackground>
  );
};

export default RegiNmNic;
