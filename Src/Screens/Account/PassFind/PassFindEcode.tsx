import React,{ useState }  from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import PassFindData, { setUserDataAndNavigate } from "../../../Utils/_private/ApiData/PassFindData";
import { ecodeCheckpoint } from "../../../../Src/Services/_private/EndPointApiFuntion";


const PassFindEcode: React.FC<ScreenProps> = ({ navigation }) => {
  const [userEcode, setUserEcode] = useState<string>("");

  const passEcodeCheck = async () => {
    setUserDataAndNavigate("CERT_SEQ", userEcode, navigation, "PassFindNewPass");
    console.log(PassFindData.CERT_SEQ);
    const result = await ecodeCheckpoint(PassFindData.MEMB_ID, PassFindData.CERT_SEQ, PassFindData.INPUT_CD);
  }

  return (
    <RegiCommonView
      IconPress={() => navigation.navigate("PassFindForEmail")}
      bigtext="인증번호"
      smalltext="입력하기"
      inputtext="인증번호"
      buttontext="완료"
      value={userEcode}
      onChangeText={(text) => setUserEcode(text)}
      onPress={passEcodeCheck}
    />
  );
};

export default PassFindEcode;
