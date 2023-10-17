import React, { useEffect, useState } from "react";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { FreeData } from "../../../Utils/_private/ApiData/FreeData";
import { FlatList, View } from "react-native";
import { FreeBubListCall } from "../../../Services/_private/FreeApi";
import { ListCategorieCompo } from "../../../Components/ListCompo/ListCommonCompo/ListCategorieCompo";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { FreeListIclucontnButton } from "../../../Components/ListCompo/FreCompo/FreButtonCompo";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { DrawerActions } from "@react-navigation/native"; // DrawerActions 추가'
import { MenuIconEditTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import FrePostRegiPage from "../Free/FrePostRegiPage";
import { ScrollView } from "react-native-gesture-handler";
/**
 * @Dowon(김도원 생성)
 * FrePostPage
 * 자유게시판 페이지
 * 게시판 카테고리 선택 후 게시글 목록을 보여주는 페이지
 * 또는 DrawerMenu에서도 넘어올 수 있음
 * 게시글 목록은 FlatList로 구현
 * 게시글 목록에서 게시글을 선택하면 게시글 상세 페이지로 이동
 * 게시글 상세 페이지에서는 게시글의 내용을 보여주고 댓글을 작성할 수 있음
 */

/**
 * 자유게시판 API 생성
 * @jeakyoung(안재경) API 생성 함
 */

// 사용자 데이터와 자유게시판 데이터 상태를 정의합니다.

interface ButtonProps {
  color: string;
  onPress: () => void;
}

const FrePostPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData(); // 현재 사용자 데이터
  const [freeData, setFreeData] = useState<FreeData | null>(null); // 자유게시판 데이터

  // 컴포넌트가 렌더링될 때 한 번만 실행되는 부분입니다.
  useEffect(() => {
    // 사용자 데이터가 존재하면 자유게시판 데이터를 가져옵니다.
    if (userData !== null) {
      FreeBubListCall(
        userData.LOGIN_ID,
        userData.MEMB_SC_CD,
        userData.MEMB_DEP_CD,
        userData.TIT_CD
      )
        .then((data) => {
          if (data !== null) {
            setFreeData(data); // 가져온 데이터를 상태에 저장합니다.
          }
        })
        .catch((error) => {
          console.error("데이터 가져오기 오류:", error);
        });
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 호출됩니다.
  return (
    <AccountBackground>
      <MenuIconEditTopbarStyle
        text="게시판"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        onPressEdit={() => navigation.navigate("FrePostRegiPage")}
      />
      <View
        style={{
          width: "100%",
          height: deviceHeight * 0.1,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <ListCategorieCompo
          firsttext="자유"
          secondtext="건의"
          thirdtext="질문"
          // 적절한 버튼 클릭 시 함수 생성하여 color props 사용하여 색깔 변경 및 페이지 이동 구현 예정
        />
      </View>
      <FlatList
        data={freeData?.FREE_BUB}
        keyExtractor={(item) => item.CRE_SEQ.toString()}
        renderItem={({ item }) => (
          <FreeListIclucontnButton
            nickname={item.NICK_NM}
            freposttime={item.CRE_DAT}
            fretit={item.TIT}
            frecont={item.CONT}
            onPress={() => navigation.navigate("FrePostDetailPage")}
          />
        )}
      />
    </AccountBackground>
  );
};

export default FrePostPage;
