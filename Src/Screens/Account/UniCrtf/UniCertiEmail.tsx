import React, { useState } from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import RegiUserData, {
  setUserDataAndNavigate,
} from "../../../Utils/_private/RegiData/RegiUserData";
import { MembCertUpd } from "../../../Services/_private/EndPointApiFuntion";

const UniCertiEmail: React.FC<ScreenProps> = ({ navigation }) => {
  const [UserDetail, sendUserDetail] = useState<string>("");

  const SrcMembUpd = async () => {
    const result = await MembCertUpd(UserDetail);
  };

  const UserDetailSave = () => {
    setUserDataAndNavigate("CERT_SEQ", UserDetail, navigation, "UniCertiEcode");
    console.log(RegiUserData.CERT_SEQ);
  };


  return (
    <RegiCommonView
      IconPress={() => navigation.navigate("UniCertiStudNum")}
      bigtext="이메일"
      smalltext="입력하기"
      inputtext="이메일"
      buttontext="인증번호 전송"
      onPress={SrcMembUpd}
      navigation={navigation}
    />
  );
};

export default UniCertiEmail;
