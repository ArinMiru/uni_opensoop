import React, { useState } from "react";
import { Alert } from "react-native";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import PassFindData, {
  setUserDataAndNavigate,
} from "../../../Utils/_private/ApiData/PassFindData";
import { MembPassFndSvc } from "../../../../Src/Services/_private/EndPointApiFuntion";

const PassFindForEmail: React.FC<ScreenProps> = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState<string>("");

  const isEmailValid = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9-]+\.)+(ac\.kr)$/;
    return emailPattern.test(email);
  };

  const passEmailCheck = async () => {
    if (!isEmailValid(userEmail)) {
      Alert.alert(
        "오류",
        "유효한 이메일 주소를 입력해주세요.\nex) ooo@ooo.ac.kr"
      );
      return;
    }

    setUserDataAndNavigate("MEMB_EM", userEmail, navigation, "PassFindEcode");
    const result = await MembPassFndSvc(
      PassFindData.MEMB_ID,
      PassFindData.MEMB_EM
    );

    if (result && result.RSLT_CD === "00" && result.CERT_SEQ) {
      navigation.navigate("PassFindEcode", {
        MEMB_ID: PassFindData.MEMB_ID,
        CERT_SEQ: result.CERT_SEQ,
      });
    } else {
      Alert.alert("실패", "인증번호 발송에 실패했습니다.");
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
      onChangeText={(text) => setUserEmail(text)}
      onPress={passEmailCheck}
      keyboardType="email-address"
      autoCapitalize="none"
    />
  );
};

export default PassFindForEmail;
