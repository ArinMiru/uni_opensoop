import React, {useState} from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { MembIdFndSvc } from "../../../Services/_private/EndPointApiFuntion";

/**
 * 이메일로 아이디 찾기
 * 최서은 @holly1017 생성
 */

const IdFindEmail: React.FC<ScreenProps> = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState<string>(""); //문자열을 저장하는 변수 선언

  const emailCheck = async () => {
    const result = await MembIdFndSvc(userEmail); 
    navigation.navigate("IdFindOut")
    //emailCheckpoint 함수를 호출, userEmail을 전달하고 그 값을 result에 저장
  };

  return (
    <RegiCommonView
      IconPress={() => navigation.navigate("AccountLogin")}
      bigtext="이메일"
      smalltext="로 아이디 찾기"
      inputtext="이메일"
      buttontext="다음"
      value = {userEmail}
      onChangeText={(text) => setUserEmail(text)}
      onPress={emailCheck}
    />
  );
};

export default IdFindEmail;
