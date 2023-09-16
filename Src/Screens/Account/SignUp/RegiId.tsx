import { View } from "react-native";
import React, { useState } from "react";
import { LoginBackground } from "../../../Components/AllCompo/Background";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { BlackBackIconButton } from "../../../Components/AllCompo/BackIconButton";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { RegiTextflex1 } from "../../../Components/AccountCompo/AccountText";
import { RegiDupleFlex3 } from "../../../Components/AccountCompo/AccountCustomCompo";
import { setUserDataAndNavigate } from "../../../Utils/_private/RegiData/RegiUserData";
import { RegiUserData } from "../../../Utils/_private/RegiData/RegiUserData";
import { idCheckpoint } from "../../../Services/_private/EndPointApiFuntion";

const RegiId: React.FC<ScreenProps> = ({ navigation }) => {
  const [userRegiId, setUserRegiId] = useState<string>("");

  const idCheck = async () => {
    const result = await idCheckpoint(userRegiId);
  };

  const RegiUserDataSave = () => {
    setUserDataAndNavigate("MEMB_ID", userRegiId, navigation, "RegiNmNic"); // 회원가입 사용자 데이터 저장 함수 사용 예시
    console.log(RegiUserData.MEMB_ID);
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
          onPress={() => navigation.navigate("AccountLoginRegi")}
          navigation={navigation}
        ></BlackBackIconButton>
      </View>
      <RegiTextflex1 text="회원가입" />
      <RegiDupleFlex3
        inputText="아이디"
        text="중복 확인"
        value={userRegiId}
        onChangeText={(text) => setUserRegiId(text)}
        onPress={idCheck}
      />
      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <OnlyAccountButton text="다음" onPress={RegiUserDataSave} />
      </View>
    </LoginBackground>
  );
};
export default RegiId;
