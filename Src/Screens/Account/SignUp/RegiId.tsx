import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { BlackBackIconButton } from "../../../Components/IconCompo/BackIconButton";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { RegiTextflex1 } from "../../../Components/AccountCompo/AccountText";
import { RegiDupleFlex2 } from "../../../Components/AccountCompo/AccountCustomCompo";
import RegiUserData, {
  setUserDataAndNavigate,
} from "../../../Utils/_private/RegiData/RegiUserData";
import { idCheckpoint } from "../../../Services/_private/EndPointApiFuntion";

const RegiId: React.FC<ScreenProps> = ({ navigation }) => {
  const [userRegiId, setUserRegiId] = useState<string>("");
  const [idValidationMessage, setIdValidationMessage] = useState<string>("");
  const [idValidationColor, setIdValidationColor] = useState<string>("");
  const [isIdChecked, setIsIdChecked] = useState<boolean>(false); // 아이디 중복확인이 완료되었는지 확인하는 상태

  const idCheck = async () => {
    const isAvailable = await idCheckpoint(userRegiId);
    if (isAvailable) {
      setIdValidationMessage("사용할 수 있는 아이디 입니다.");
      setIdValidationColor("#4BB781");
      setIsIdChecked(true); // 중복확인 완료
    } else {
      setIdValidationMessage("중복된 아이디 입니다.");
      setIdValidationColor("#F66565");
      setIsIdChecked(false); // 중복된 아이디로 중복확인 실패
    }
  };

  const isFormComplete = () => {
    return userRegiId !== "" && isIdChecked;
  };

  const RegiUserDataSave = () => {
    setUserDataAndNavigate("MEMB_ID", userRegiId, navigation, "RegiNmNic");
    console.log(RegiUserData.MEMB_ID);
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
          onPress={() => navigation.navigate("AccountLoginRegi")}
          navigation={navigation}
        ></BlackBackIconButton>
      </View>
      <RegiTextflex1 text="회원가입" />
      <RegiDupleFlex2
        inputText="아이디"
        text="중복 확인"
        value={userRegiId}
        onChangeText={(text) => setUserRegiId(text)}
        onPress={idCheck}
        validationMessage={idValidationMessage}
        validationColor={idValidationColor}
      />
      <View style={{ flex: 6, justifyContent: "flex-start" }}>
        <OnlyAccountButton
          text="다음"
          onPress={RegiUserDataSave}
          disable={!isFormComplete()}
        />
      </View>
    </AccountBackground>
  );
};

export default RegiId;
