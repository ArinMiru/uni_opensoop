import { View, Text } from "react-native";
import React, { useState } from "react";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { BlackBackIconButton } from "../../../Components/IconCompo/BackIconButton";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { OnlyAccountInputCompoMarginTop3 } from "../../../Components/AccountCompo/AccoutTextInput";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { RegiTextflex1 } from "../../../Components/AccountCompo/AccountText";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { setUserDataAndNavigate } from "../../../Utils/_private/RegiData/RegiUserData";
import AccountInputStyle from "../../../Styles/AccountStyles/AccountInputStyle";
import TextStyle from "../../../Styles/TextStyle";
import { Image } from "react-native";
import { RegiPassProps } from "../../../Utils/NavigationProp/AccountScrProp";
import { registerUser } from "../../../Services/_private/EndPointApiFuntion";

interface ServerResponse {
  RSLT_CD: string;
  // 다른 필요한 속성도 추가
}

const RegiPass: React.FC<RegiPassProps> = ({ navigation, route }) => {
  const [pass, setPass] = useState<string>("");
  const [configPass, setConfigPass] = useState<string>("");
  const [data, setData] = useState<ServerResponse | null>(null);

  const { MEMB_ID, MEMB_NM } = route.params;
  console.log(MEMB_ID, MEMB_NM);

  const removeExceptChars = (text: string) => {
    // @, $, !, %, *, ?, &, #, 영어 알파벳, 숫자 외의 문자들을 제거
    return text.replace(/[^@$!%*?&#a-zA-Z0-9]/g, "");
  };

  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const checkPasswordStrength = (password: string) => {
    let strength = 0;

    // 비밀번호 길이 확인
    if (password.length >= 8) strength++;

    // 대문자 포함 확인
    if (/[A-Z]/.test(password)) strength++;

    // 소문자 포함 확인
    if (/[a-z]/.test(password)) strength++;

    // 숫자 포함 확인
    if (/[0-9]/.test(password)) strength++;

    // 특수문자 포함 확인 (인젝션 공격에 취약한 문자 제외)
    if (/[@$!%*?&#]/.test(password)) strength++;

    // 빈칸 포함 여부 확인
    if (/\s/.test(password)) {
      strength = 0; // 비밀번호에 빈칸이 포함되면 강도를 0으로 설정
    }

    setPasswordStrength(strength);
  };

  const passwordBorderColor = () => {
    if (pass === configPass) {
      return "#4BB781";
    }
    return "#F05151";
  };

  const isButtonEnabled =
    pass.length >= 8 && configPass.length >= 8 && pass === configPass;

  const regiPassData = () => {
    registerUser(MEMB_ID, MEMB_NM, pass)
      .then((isSuccess) => {
        if (isSuccess) {
          navigation.navigate("RegiChk", {MEMB_ID: MEMB_ID});
        } else {
          console.log("실패");
        }
      })
      .catch((error) => {
        // 오류 처리
        console.error("Error:", error);
      });
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
      <View style={{ flex: 1.1 }}>
        <OnlyAccountInputCompoMarginTop3
          text="비밀번호"
          value={pass}
          onChangeText={(text) => {
            const filteredText = removeExceptChars(text);
            setPass(filteredText);
            checkPasswordStrength(filteredText);
          }}
        />
        <View
          style={{
            flexDirection: "row",
            height: 12,
          }}
        >
          {[1, 2, 3, 4, 5].map((_, index) => (
            <View
              key={index}
              style={{
                borderRadius: 10,
                flex: 1,
                backgroundColor:
                  index < passwordStrength ? "#4BB781" : "lightgray",
                margin: 2,
              }}
            />
          ))}
        </View>
      </View>
      <View style={{ flex: 2, marginTop: deviceHeight * 0.01 }}>
        <OnlyAccountInputCompoMarginTop3
          text="비밀번호 확인"
          value={configPass}
          onChangeText={(text) => {
            const filteredText = removeExceptChars(text);
            setConfigPass(filteredText);
          }}
          style={[
            AccountInputStyle.onlyAccountInputStyleMarginTop3,
            { borderColor: passwordBorderColor(), borderWidth: 1 },
          ]}
        />
        <View
          style={{
            flex: 0.5,
            alignItems: "flex-end",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={[
              TextStyle.semibold11,
              { color: "#F05151" },
              { paddingRight: deviceWidth * 0.02 },
            ]}
          >
            {"비밀번호 8글자 이상 (빈칸 X)"}
          </Text>
        </View>
      </View>
      <View style={{ flex: 6, justifyContent: "flex-start" }}>
        <OnlyAccountButton
          text="다음"
          onPress={regiPassData}
          disable={!isButtonEnabled}
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

export default RegiPass;
