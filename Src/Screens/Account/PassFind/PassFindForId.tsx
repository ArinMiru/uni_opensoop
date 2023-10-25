import React, { useState } from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import PassFindData, {
  setUserDataAndNavigate,
} from "../../../Utils/_private/ApiData/PassFindData";

/**
 * 비밀번호 찾기(아이디 입력 창)
 * 최서은 @holly1017 생성
 */

const PassFindForId: React.FC<ScreenProps> = ({ navigation }) => {
  const [userId, setUserId] = useState<string>("");

  const passFindUserDataSave = () => {
    setUserDataAndNavigate("MEMB_ID", userId, navigation, "PassFindForEmail"); //같은 역할을 하는 함수를 만들 예정
    console.log(PassFindData.MEMB_ID);
  };

  return (
    <RegiCommonView
      IconPress={() => navigation.navigate("AccountLogin")}
      bigtext="아이디"
      smalltext="로 비밀번호 찾기"
      inputtext="아이디"
      buttontext="다음"
      value={userId}
      onChangeText={(text) => setUserId(text)}
      onPress={passFindUserDataSave}
      keyboardType="default"
      autoCapitalize="none"
    />
  );
};

export default PassFindForId;
