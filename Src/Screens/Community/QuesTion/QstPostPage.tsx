import React, { useEffect, useState } from "react";
import { FlatList, View,Text } from "react-native";
import { ListCategorieCompo } from "../../../Components/ListCompo/ListCommonCompo/ListCategorieCompo";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { QstListButton } from "../../../Components/ListCompo/QstCompo/QstButtonCompo";
import { DrawerActions } from "@react-navigation/native"; // DrawerActions 추가
import { MenuIconEditTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { QuestData } from "../../../Utils/_private/ApiData/QuestData"
import { QuesBubListSvc } from "../../../Utils/_private/ApiData/QuestPostData";


/**
 * @Dowon(김도원 생성)
 * QstPostPage
 * 질문게시판 페이지
 * 게시판 카테고리 선택 후 게시글 목록을 보여주는 페이지
 * 또는 DrawerMenu에서도 넘어올 수 있음
 * 게시글 목록은 FlatList로 구현
 * 게시글 목록에서 게시글을 선택하면 게시글 상세 페이지로 이동
 * 게시글 상세 페이지에서는 게시글의 내용을 보여주고 댓글을 작성할 수 있음
 */

/**
 * 질문게시판 
 * 조회 컴포넌트 연결
 * 23/10/9 17:15 최서은 @holly1017 생성
 */
interface ButtonProps {
  color: string;
  onPress: () => void;
}

const QstPostPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData();
  const [questData, setQuestData] = useState<QuestData| null>(null);

  useEffect(() => {
    if (userData !== null) {
      QuesBubListSvc(
        userData.LOGIN_ID,
        userData.MEMB_SC_CD,
        userData.MEMB_DEP_CD,
        userData.TIT_CD,
      )
      .then((data) => {
        if (data !== null) {
          setQuestData(data);
        }
      })
      .catch((error) => {
        console.log("데이터 오류", error);
      });
    }
  }, []);

  return (
    <AccountBackground>
      <MenuIconEditTopbarStyle
        text="게시판"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        onPressRegi={() => navigation.navigate("QstPostRegi")}
      />
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
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
      <View>
       <FlatList
       data={questData?.QUES_BUB}
       keyExtractor={(item) => item.CRE_SEQ.toString()}
       renderItem={({item}) => (
        <View>
        <Text>{item.NICK_NM}</Text>
        <Text>{item.CONT}</Text>
        </View>
       )}
       />
       </View>
      
    </AccountBackground>
  );
};

export default QstPostPage;
