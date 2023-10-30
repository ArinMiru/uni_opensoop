import React, { useState } from "react";
import { View, Text } from "react-native";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { OnlyAccountInputCompoMarginTop3 } from "../../../Components/AccountCompo/AccoutTextInput";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import BackgroundStyle from "../../../Styles/BackgroundStyle";
import AccountInputStyle from "../../../Styles/AccountStyles/AccountInputStyle";
import textStyle from "../../../Styles/TextStyle";
import { Image } from "react-native";

const PassFindNewPass: React.FC<ScreenProps> = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const removeExceptChars = (text: string) => {
    return text.replace(/[^@$!%*?&#a-zA-Z0-9]/g, "");
  };

  const checkPasswordStrength = (password: string) => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&#]/.test(password)) strength++;
    if (/\s/.test(password)) strength = 0;

    setPasswordStrength(strength);
  };

  const passwordBorderColor = () => {
    return newPassword === confirmPassword ? "#4BB781" : "#F05151";
  };

  const isButtonEnabled =
    newPassword.length >= 8 &&
    confirmPassword.length >= 8 &&
    newPassword === confirmPassword &&
    passwordStrength >= 4;

  return (
    <AccountBackground>
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
        }}
      ></View>
      <View style={BackgroundStyle.titleTextFlex}>
        <Text
          style={[
            textStyle.bold25,
            {
              color: "#4BB781",
              marginLeft: deviceWidth * 0.1,
              lineHeight: deviceWidth * 0.09,
            },
          ]}
        >
          새로운 비밀번호
        </Text>
        <Text
          style={[
            textStyle.medium20,
            {
              color: "#424C43",
              marginLeft: deviceWidth * 0.01,
              lineHeight: deviceHeight * 0.0459,
            },
          ]}
        >
          입력하기
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <OnlyAccountInputCompoMarginTop3
          text="새로운 비밀번호"
          value={newPassword}
          secureTextEntry={true}
          onChangeText={(text) => {
            const filteredText = removeExceptChars(text);
            setNewPassword(filteredText);
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
        <OnlyAccountInputCompoMarginTop3
          text="새로운 비밀번호 확인"
          keyboardType="default"
          autoCapitalize="none"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => {
            const filteredText = removeExceptChars(text);
            setConfirmPassword(filteredText);
          }}
          style={[
            AccountInputStyle.onlyAccountInputStyleMarginTop3,
            { borderColor: passwordBorderColor(), borderWidth: 1 },
          ]}
        />
      </View>
      <View style={{ flex: 6, justifyContent: "flex-start" }}>
        <OnlyAccountButton
          text="다음"
          onPress={() => navigation.navigate("PassFindChk")}
          disable={!isButtonEnabled}
        />
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
      </View>
    </AccountBackground>
  );
};

export default PassFindNewPass;
