import React, { useState } from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { chkAndCertSvc } from "../../../../Src/Services/_private/EndPointApiFuntion";
import { PassEcodeProps } from "../../../Utils/NavigationProp/AccountScrProp";

/**
 * 비밀번호 찾기(인증번호 입력 창)
 * 최서은 @holly1017 생성
 */

const PassFindEcode: React.FC<PassEcodeProps> = ({ navigation, route }) => {
  const [userEcode, setUserEcode] = useState<string>("");
  const { MEMB_ID, CERT_SEQ } = route.params || {};

  const passEcodeCheck = async () => {
    const result = await chkAndCertSvc(MEMB_ID, CERT_SEQ, userEcode);
  };

  return (
    <RegiCommonView
      IconPress={() => navigation.goBack()}
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
