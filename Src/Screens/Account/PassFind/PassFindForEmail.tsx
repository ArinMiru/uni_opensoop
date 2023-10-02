import React,{ useState } from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import PassFindData, { setUserDataAndNavigate } from "../../../Utils/_private/ApiData/PassFindData";
import { passFindCheckpoint } from "../../../../Src/Services/_private/EndPointApiFuntion";


const PassFindForEmail: React.FC<ScreenProps> = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState<string>("");

  const passEmailCheck = async () => {
    setUserDataAndNavigate("MEMB_EM", userEmail, navigation, "PassFindEcode");
    console.log(PassFindData.MEMB_EM);
    const result = await passFindCheckpoint(PassFindData.MEMB_ID, PassFindData.MEMB_EM);
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
    />
  );
};

export default PassFindForEmail;