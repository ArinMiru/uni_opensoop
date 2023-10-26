import React, { useState } from "react";
import { View, Text } from "react-native";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import RegiUserData, {
  setUserDataAndNavigate,
} from "../../../Utils/_private/RegiData/RegiUserData";
import { MembCertUpd } from "../../../Services/_private/EndPointApiFuntion";
import { isEmailValid } from "../../../Utils/SingleUse/Email";

const UniCertiEmail: React.FC<ScreenProps> = ({ navigation }) => {
  const [UserDetail, setUserDetail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const isValid = isEmailValid(email);
    setIsValidEmail(isValid);
    return isValid;
  };

  const UserDetailSave = () => {
    if (isValidEmail) {
      setUserDataAndNavigate(
        "CERT_SEQ",
        UserDetail,
        navigation,
        "UniCertiEcode"
      );
      MembCertUpd(UserDetail);
    }
  };

  return (
    <RegiCommonView
      IconPress={() => navigation.navigate("UniCertiStudNum")}
      bigtext="이메일"
      smalltext="입력하기"
      inputtext="이메일"
      buttontext="인증번호 전송"
      keyboardType="email-address"
      autoCapitalize="none"
      onPress={UserDetailSave}
      onChangeText={(text) => {
        setUserDetail(text);
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
