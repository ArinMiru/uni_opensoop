import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { membUniCertUpd } from "../../../Services/_private/EndPointApiFuntion";
import { isEmailValid } from "../../../Utils/SingleUse/Email";
import { RegiCertEmailProps } from "../../../Utils/NavigationProp/AccountScrProp";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import Spinner from "react-native-loading-spinner-overlay/lib";

const UniCertiEmail: React.FC<RegiCertEmailProps> = ({ navigation, route }) => {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const { MEMB_DEP_CD, MEMB_ID, MEMB_NUM, MEMB_GRA } = route.params;
  const [loading, setLoading] = useState<boolean>(false);
  const MEMB_SC_CD = route.params.MEMB_SC_CD.toString();

  const validateEmail = (email: string) => {
    const isValid = isEmailValid(email);
    setIsValidEmail(isValid);
    return isValid;
  };
  const regiCertEmail = () => {
    setLoading(true);
    membUniCertUpd(MEMB_ID, MEMB_SC_CD, MEMB_DEP_CD, MEMB_NUM, email, MEMB_GRA)
      .then((result) => {
        if (result && result.CERT_SEQ && result.RSLT_CD === "00") {
          navigation.navigate("UniCertiEcode", {
            CERT_SEQ: result.CERT_SEQ,
            MEMB_ID: MEMB_ID,
          });
        } else {
          Alert.alert("실패", "다시 시도해 주세요");
        }
      })
      .catch((error) => {
        Alert.alert(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <View>
      <Spinner
        visible={loading} // 로딩 상태에 따라 로딩창을 표시하거나 숨깁니다.
        textContent={"처리 중"}
        textStyle={{ color: "#FFF" }}
      />
      <RegiCommonView
        IconPress={() => navigation.goBack()}
        bigtext="이메일"
        smalltext="입력하기"
        inputtext="이메일"
        buttontext="인증번호 전송"
        keyboardType="email-address"
        autoCapitalize="none"
        onPress={regiCertEmail}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          validateEmail(text); // 입력이 변경되면 이메일 유효성 검사 수행
        }}
        navigation={navigation}
        disable={!isValidEmail} // 버튼 활성화 상태를 역으로 지정
      >
        {!isValidEmail && (
          <View
            style={{
              position: "absolute",
              marginTop: deviceHeight * 0.33,
              paddingLeft: deviceWidth * 0.35,
            }}
          >
            <Text style={{ color: "red" }}>올바른 이메일 형식이 아닙니다.</Text>
          </View>
        )}
      </RegiCommonView>
    </View>
  );
};

export default UniCertiEmail;
