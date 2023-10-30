import React, { useState } from "react";
import { Text } from "react-native";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { membUniCertUpd } from "../../../Services/_private/EndPointApiFuntion";
import { isEmailValid } from "../../../Utils/SingleUse/Email";
import { RegiCertEmailProps } from "../../../Utils/NavigationProp/AccountScrProp";

const UniCertiEmail: React.FC<RegiCertEmailProps> = ({ navigation, route }) => {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const { MEMB_DEP_CD, MEMB_ID, MEMB_NUM } = route.params;
  const MEMB_SC_CD = route.params.MEMB_SC_CD.toString();

  const validateEmail = (email: string) => {
    const isValid = isEmailValid(email);
    setIsValidEmail(isValid);
    return isValid;
  };
  const regiCertEmail = () => {
    membUniCertUpd(MEMB_ID, MEMB_SC_CD, MEMB_DEP_CD, MEMB_NUM, email);
  };
  return (
    <RegiCommonView
      IconPress={() => navigation.goBack()}
      bigtext="이메일"
      smalltext="입력하기"
      inputtext="이메일"
      buttontext="인증번호 전송"
      keyboardType="email-address"
      autoCapitalize="none"
      onPress={() => navigation.navigate("UniCertiEcode")}
      value={email}
      onChangeText={(text) => {
        setEmail(text);
        validateEmail(text); // 입력이 변경되면 이메일 유효성 검사 수행
      }}
      navigation={navigation}
      disable={!isValidEmail} // 버튼 활성화 상태를 역으로 지정
    >
      {!isValidEmail && (
        <Text style={{ color: "red" }}>올바른 이메일 형식이 아닙니다.</Text>
      )}
    </RegiCommonView>
  );
};

export default UniCertiEmail;
