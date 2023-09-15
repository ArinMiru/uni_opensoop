import { SafeAreaView, Text } from "react-native";
import React, { useEffect } from "react"; // useEffect 추가
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { noticeCall } from "../../../Services/_private/EndPointApiFuntion";
import { NoticeData } from "../../../Utils/_private/ApiData/.NoticeData";

const NoTicePage = () => {
  const userData = getUserData();
  

  // noticeCall 함수를 컴포넌트가 렌더링될 때 한 번 호출하려면 useEffect를 사용합니다.
  useEffect(() => {
    if (userData !== null) {
      noticeCall(
        userData.LOGIN_ID,
        userData.MEMB_SC_CD,
        userData.MEMB_DEP_CD,
        userData.TIT_CD,
      ); // 이미 내부에서 userData를 참조하고 있으므로 별도의 인수 전달이 필요 없습니다.
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 호출됩니다.

  return (
    <SafeAreaView style={{ flex: 2 }}>
      <Text>{userData?.MEMB_NM}</Text>
      {userData?.TIT_CD === "02" && <Text> 학회장 </Text>}
    </SafeAreaView>
  );
};

export default NoTicePage;
