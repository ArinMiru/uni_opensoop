import React, { useState } from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import PassFindData, {
  setUserDataAndNavigate,
} from "../../../Utils/_private/ApiData/PassFindData";
import { MembPassFndSvc } from "../../../../Src/Services/_private/EndPointApiFuntion";

/**
 * 비밀번호 찾기(이메일 입력 창)
 * 최서은 @holly1017 생성
 */

const PassFindForEmail: React.FC<ScreenProps> = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState<string>("");

  const isEmailValid = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9-]+\.)+(ac\.kr)$/;
    return emailPattern.test(email);
  };

  const passEmailCheck = async () => {
    setUserDataAndNavigate("MEMB_EM", userEmail, navigation, "PassFindEcode");
    console.log(PassFindData.MEMB_EM);
    const result = await MembPassFndSvc(
      PassFindData.MEMB_ID,
      PassFindData.MEMB_EM
    );
    if (result && result.RSLT_CD === "00" && result.CERT_SEQ) {
      navigation.navigate("PassFindEcode", {
        MEMB_ID: PassFindData.MEMB_ID,
        CERT_SEQ: result.CERT_SEQ,
      });
    }
  };

  return (
    <RegiCommonView
      IconPress={() => navigation.navigate("PassFindForId")}
      bigtext="이메일"
      smalltext="로 비밀번호 찾기"
      inputtext="이메일"
      buttontext="인증번호 전송"
      value={userEmail}
      onChangeText={(text) => {
        if (isEmailValid(text) || text === "") {
          setUserEmail(text);
        }
      }}
      onPress={passEmailCheck}
      keyboardType="email-address"
      autoCapitalize="none"
    />
  );
};

export default PassFindForEmail;
