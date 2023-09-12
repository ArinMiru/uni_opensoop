import { View } from "react-native";
import React, { useState } from "react";
import { LoginBackground } from "../../../Components/Reusable/Background";
import { IconButton } from "../../../Components/Reusable/Button";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import {
  RegiText1,
  RegiCommonButton3,
  RegiNextButton,
} from "../../../Components/CommonView/CommonCompo";
import { setUserDataAndNavigate } from "../../../Utils/RegiData/RegiUserData";

const RegiId: React.FC<ScreenProps> = ({ navigation }) => {
  const [userRegiId, setUserRegiId] = useState<string>("");

  const RegiUserDataSave = () => {
    setUserDataAndNavigate("MEMB_ID", userRegiId, navigation, "RegiNmNic");       // 회원가입 사용자 데이터 저장 함수 사용 예시
  };

  // 타입을 명시적으로 설정
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
          onPress={() => navigation.navigate("AccountLoginRegi")}
          navigation={navigation}
        ></IconButton>
      </View>
      <RegiText1 text="회원가입" />
      <RegiCommonButton3
        inputText="아이디"
        text="중복 확인"
        value={userRegiId}
        onChangeText={(text) => setUserRegiId(text)}
      />
      <RegiNextButton text="다음" onPress={RegiUserDataSave} />
    </LoginBackground>
  );
};

export default RegiId;
