import React, { useState } from "react";
import { View } from "react-native";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { BlackBackIconButton } from "../../../Components/IconCompo/BackIconButton";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import { RegiTextflex1 } from "../../../Components/AccountCompo/AccountText";
import { RegiDupleFlex2 } from "../../../Components/AccountCompo/AccountCustomCompo";
import { idCheckpoint } from "../../../Services/_private/EndPointApiFuntion";
import { Image } from "react-native";

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

  const handleIdChange = (text: string) => {
    const filterRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣'";--@@@|%&+<>=]/g;
    const filteredText = text.replace(filterRegex, "");
    setUserRegiId(filteredText);
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
          onPress={() => navigation.goBack()}
          navigation={navigation}
        ></BlackBackIconButton>
      </View>
      <RegiTextflex1 text="회원가입" />
      <RegiDupleFlex2
        inputText="아이디"
        text="중복 확인"
        value={userRegiId}
        onChangeText={handleIdChange}
        onPress={idCheck}
        validationMessage={idValidationMessage}
        validationColor={idValidationColor}
      />
      <View style={{ flex: 6, justifyContent: "flex-start" }}>
        <OnlyAccountButton
          text="다음"
          onPress={() =>
            navigation.navigate("RegiNmNic", { MEMB_ID: userRegiId })
          }
          disable={!isFormComplete()}
        />
      </View>
      <Image
        source={require("../../../Assets/Images/LogoImage.png")}
        style={{
          position: "absolute",
          resizeMode: "contain",
          width: deviceWidth * 0.5,
          height: deviceHeight * 0.5,
          bottom: deviceHeight * -0.11,
          right: deviceWidth * -0.08,
        }}
      />
    </AccountBackground>
  );
};

export default RegiId;
