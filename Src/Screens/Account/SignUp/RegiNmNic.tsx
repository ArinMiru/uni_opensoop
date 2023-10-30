import React, { useState } from "react";
import { View, Text } from "react-native";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { BlackBackIconButton } from "../../../Components/IconCompo/BackIconButton";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { RegiTextflex1 } from "../../../Components/AccountCompo/AccountText";
import { RegiDupleFlex2 } from "../../../Components/AccountCompo/AccountCustomCompo";
import RegiUserData, {
  setUserDataAndNavigate,
} from "../../../Utils/_private/RegiData/RegiUserData";
import { OnlyAccountInputCompoMarginTop3 } from "../../../Components/AccountCompo/AccoutTextInput";
import { nickCheckpoint } from "../../../Services/_private/EndPointApiFuntion";
import { Image } from "react-native";
import { RegiRegiNmNicProps } from "../../../Utils/NavigationProp/AccountScrProp";

const RegiNmNic: React.FC<RegiRegiNmNicProps> = ({ navigation, route }) => {
  const [userRegiNick, setUserRegNick] = useState<string>("");
  const [nickValidationMessage, setNickValidationMessage] =
    useState<string>("");
  const [nickValidationColor, setNickValidationColor] = useState<string>("");
  const [isNickChecked, setIsNickChecked] = useState<boolean>(false); // 닉네임 중복확인이 완료되었는지 확인하는 상태

  const { MEMB_ID } = route.params;
  console.log(MEMB_ID);

  const NickCheck = async () => {
    const isAvailable = await nickCheckpoint(userRegiNick);
    if (isAvailable) {
      setNickValidationMessage("사용할 수 있는 닉네임 입니다.");
      setNickValidationColor("#4BB781");
      setIsNickChecked(true); // 중복확인 완료
    } else {
      setNickValidationMessage("중복된 닉네임 입니다.");
      setNickValidationColor("#F66565");
      setIsNickChecked(false); // 중복된 닉네임으로 중복확인 실패
    }
  };

  const isFormComplete = () => {
    return userRegiNick !== "" && isNickChecked;
  };

  const filterInput = (text: string) => {
    return text.replace(/[^$!%*?a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]/g, "");
  };

  const RegiUserDataSave = () => {
    setUserDataAndNavigate("NICK_NM", userRegiNick, navigation, "RegiPass");
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
      <View style={{ flex: 1 }}>
        <OnlyAccountInputCompoMarginTop3 text="이름을 입력해주세요." />
      </View>
      <RegiDupleFlex2
        inputText="닉네임"
        text="중복 확인"
        value={userRegiNick}
        onChangeText={(text) => setUserRegNick(filterInput(text))}
        onPress={NickCheck}
        validationMessage={nickValidationMessage}
        validationColor={nickValidationColor}
      />
      <View
        style={{
          flex: 6,
          justifyContent: "flex-start",
        }}
      >
        <OnlyAccountButton
          text="다음"
          onPress={() =>
            navigation.navigate("RegiPass", {
              MEMB_ID: MEMB_ID,
              MEMB_NM: userRegiNick,
            })
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

export default RegiNmNic;
