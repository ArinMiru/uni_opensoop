import React, { useState } from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { MembIdFndSvc } from "../../../Services/_private/EndPointApiFuntion";
import { Image } from "react-native";

/**
 * 이메일로 아이디 찾기
 * 최서은 @holly1017 생성
 */

const IdFindEmail: React.FC<ScreenProps> = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState<string>("");

  const isValidEmail = (email: string) => {
    return email.includes("@") && email.endsWith(".ac.kr");
  };

  const emailCheck = async () => {
    if (!isValidEmail(userEmail)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    const fullEmail = `${userEmail}`;
    const responseData = await MembIdFndSvc(fullEmail);
    if (responseData) {
      navigation.navigate("IdFindOut", { memberId: responseData.MEMB_ID });
    } else {
      alert("등록되어 있지 않은 이메일입니다.");
    }
  };

  return (
    <RegiCommonView
      IconPress={() => navigation.navigate("AccountLogin")}
      bigtext="이메일"
      smalltext="로 아이디 찾기"
      inputtext="이메일"
      buttontext="다음"
      value={userEmail}
      onChangeText={(text) => setUserEmail(text)}
      onPress={emailCheck}
      autoCapitalize="none"
      keyboardType="email-address"
      placeholder="아이디@대학교.ac.kr"
    />
  );
};

export default IdFindEmail;
