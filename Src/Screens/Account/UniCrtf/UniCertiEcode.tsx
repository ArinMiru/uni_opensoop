import React, { useState, useEffect } from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { RegiCertEcodeProps } from "../../../Utils/NavigationProp/AccountScrProp";
import { Alert, Text } from "react-native";
import { chkAndCertSvc } from "../../../Services/_private/EndPointApiFuntion";

const UniCertiEcode: React.FC<RegiCertEcodeProps> = ({ navigation, route }) => {
  const [cert, setCert] = useState<string>("");
  const { CERT_SEQ, MEMB_ID } = route.params;
  const [countdown, setCountdown] = useState<number>(300);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const ecodeVer = async () => {
    const result = await chkAndCertSvc(MEMB_ID, CERT_SEQ, cert);
    if (result && result.RSLT_CD === "00") {
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

  const formatCountdown = (seconds: number) => {
    if (seconds === 0) {
      return "시간 만료";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <RegiCommonView
      value={cert}
      onChangeText={(text) => setCert(text)}
      IconPress={() => navigation.goBack()}
      bigtext="인증번호"
      smalltext="입력하기"
      inputtext="인증번호"
      buttontext="완료"
      count={formatCountdown(countdown)}
      onPress={() => ecodeVer()}
      navigation={navigation}
      keyboardType="numeric"
    />
  );
};

export default UniCertiEcode;
