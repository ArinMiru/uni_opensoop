import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { noticeCall } from "../../../Services/_private/EndPointApiFuntion";
import { NoticeData } from "../../../Utils/_private/ApiData/NoticeData";
import { MenuTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { DrawerActions } from "@react-navigation/native"; // DrawerActions 추가
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native"; // React Navigation v6의 경우
import Constants from "expo-constants";

const NoTicePage = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<ParamListBase>;
}) => {
  // 사용자 데이터와 공지사항 데이터 상태를 정의합니다.
  const userData = getUserData(); // 현재 사용자 데이터
  const [noticeData, setNoticeData] = useState<NoticeData | null>(null); // 공지사항 데이터

  // 컴포넌트가 렌더링될 때 한 번만 실행되는 부분입니다.
  useEffect(() => {
    // 사용자 데이터가 존재하면 공지사항 데이터를 가져옵니다.
    if (userData !== null) {
      noticeCall(
        userData.LOGIN_ID,
        userData.MEMB_SC_CD,
        userData.MEMB_DEP_CD,
        userData.TIT_CD
      )
        .then((data) => {
          if (data !== null) {
            setNoticeData(data); // 가져온 데이터를 상태에 저장합니다.
          }
        })
        .catch((error) => {
          console.error("데이터 가져오기 오류:", error);
        });
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 호출됩니다.

  // FlatList 항목들 사이에 구분선을 그리기 위한 함수
  const renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: "#ddd", marginVertical: 8 }} />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
      }}
    >
      {/* 사용자 이름 출력 */}
      <MenuTopbarStyle
        text="공지사항"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())} // 드로어 열기
      />
      <Text>{userData?.MEMB_NM}</Text>

      {/* 사용자가 학회장인 경우 "학회장" 출력 */}
      {userData?.TIT_CD === "02" && <Text> 학회장 </Text>}

      {/* FlatList를 사용하여 공지사항 데이터 출력 */}
      <FlatList
        data={noticeData?.OPEN_BUB}
        keyExtractor={(item) => item.CRE_SEQ.toString()} // "CRE_SEQ"를 문자열로 사용하여 고유 키로 지정
        renderItem={({ item }) => (
          <View>
            {/* 공지사항 제목 출력 */}
            <Text>제목 : {item.TIT}</Text>

            {/* 공지사항 내용 출력 */}
            <Text>본문 : {item.CONT}</Text>

            {/* 공지사항 작성 일자 출력 */}
            <Text>작성 일자 : {item.CRE_DAT}</Text>
          </View>
        )}
        ItemSeparatorComponent={renderSeparator} // 항목 사이에 구분선 삽입
      />
    </SafeAreaView>
  );
};

export default NoTicePage;
