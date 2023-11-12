import React, { useState } from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { RegiCertEcodeProps } from "../../../Utils/NavigationProp/AccountScrProp";
import { Alert } from "react-native";

const UniCertiEcode: React.FC<RegiCertEcodeProps> = ({ navigation, route }) => {
  const [cert, setcert] = useState<string>("");
  const { CERT_SEQ } = route.params;
  console.log(CERT_SEQ);

  const ecodeVer = () => {
    if (cert === CERT_SEQ) {
      Alert.alert("성공", "인증번호가 일치 합니다", [
        {
          text: "확인",
          onPress: () => {
            navigation.navigate("UniCertiChk");
          },
        },
      ]);
    } else {
      Alert.alert("실패", "인증번호 불일치");
    }
  };
  return (
    <RegiCommonView
      value={cert}
      onChangeText={(text) => setcert(text)}
      IconPress={() => navigation.goBack()}
      bigtext="인증번호"
      smalltext="입력하기"
      inputtext="인증번호"
      buttontext="완료"
      onPress={() => ecodeVer()}
      navigation={navigation}
      keyboardType="numeric"
    />
  );
};

export default UniCertiEcode;
