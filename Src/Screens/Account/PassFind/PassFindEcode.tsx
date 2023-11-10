import React, { useState } from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import PassFindData, {
  setUserDataAndNavigate,
} from "../../../Utils/_private/ApiData/PassFindData";
import { ChkAndCertSvc } from "../../../../Src/Services/_private/EndPointApiFuntion";

/**
 * 비밀번호 찾기(인증번호 입력 창)
 * 최서은 @holly1017 생성
 */

const PassFindEcode: React.FC<ScreenProps> = ({ navigation }) => {
  const [userEcode, setUserEcode] = useState<string>("");

  const passEcodeCheck = async () => {
    setUserDataAndNavigate(
      "CERT_SEQ",
      userEcode,
      navigation,
      "PassFindNewPass"
    );
    console.log(PassFindData.CERT_SEQ);
    const result = await ChkAndCertSvc(
      PassFindData.MEMB_ID,
      PassFindData.CERT_SEQ
    );
  };

  return (
    <RegiCommonView
      IconPress={() => navigation.navigate("PassFindForEmail")}
      bigtext="인증번호"
      smalltext="입력하기"
      inputtext="인증번호"
      buttontext="완료"
      value={userEcode}
      onChangeText={(text) => {
        const onlyNumbers = /^\d+$/;
        if (onlyNumbers.test(text) || text === "") {
          setUserEcode(text);
        }
      }}
      onPress={passEcodeCheck}
      keyboardType="numeric"
    />
  );
};

export default PassFindEcode;
