import React, { useEffect, useState } from "react";
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { FreeData } from "../../Utils/_private/ApiData/FreeData";
import { QuestData } from "../../Utils/_private/ApiData/QuestData";
import { QuesBubListSvc } from "../../Utils/_private/ApiData/QuestPostData";
import { FlatList, View } from "react-native";
import { FreeBubListCall } from "../../Services/_private/FreeApi";
import { ListCategorieCompo } from "../../Components/ListCompo/ListCommonCompo/ListCategorieCompo";
import { deviceHeight } from "../../Utils/DeviceUtils";
import { FreeListIclucontnButton } from "../../Components/ListCompo/FreCompo/FreButtonCompo";
import { ScreenProps } from "../../Navigations/StackNavigator";
import { MenuTopbarStyle } from "../../Components/AllCompo/TopbarCompo";
import NewBackgroundStyle from "../../Styles/NewBackgroundStyle";
import { Background } from "../../Components/AllCompo/Background";
import { SgsListContentButton } from "../../Components/ListCompo/SgsCompo/SgsButtonCompo";
import { QstListContentButton } from "../../Components/ListCompo/QstCompo/QstButtonCompo";

const ListPostPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData(); // 현재 사용자 데이터
  const [selectedCategory, setSelectedCategory] = useState("자유");
  const [freeData, setFreeData] = useState<FreeData | null>(null); // 자유게시판 데이터
  const [questData, setQuestData] = useState<QuestData | null>(null); // 질문게시판 데이터

  // 컴포넌트가 렌더링될 때 한 번만 실행되는 부분입니다.
  useEffect(() => {
    if (selectedCategory === "자유") {
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
    } else if (selectedCategory === "건의") {
      //건의 카테고리 데이터 가져와야함
    } else if (selectedCategory === "질문") {
      if (userData !== null) {
        QuesBubListSvc(
          userData.LOGIN_ID,
          userData.MEMB_SC_CD,
          userData.MEMB_DEP_CD,
          userData.TIT_CD
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
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 호출됩니다.
  return (
    <Background>
      {selectedCategory === "자유" && (
        <MenuTopbarStyle
          Title="자유게시판"
          MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
          MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
          onPress={() => navigation.goBack()}
          onPressRegi={() => navigation.navigate("FrePostRegiPage")}
        />
      )}
      {selectedCategory === "건의" && (
        <MenuTopbarStyle
          Title="건의게시판"
          MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
          MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
          onPress={() => navigation.goBack()}
          onPressRegi={() => navigation.navigate("SgsPostRegiPage")}
        />
      )}
      {selectedCategory === "질문" && (
        <MenuTopbarStyle
          Title="질문게시판"
          MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
          MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
          onPress={() => navigation.goBack()}
          onPressRegi={() => navigation.navigate("QstPostRegiPage")}
        />
      )}
      <View
        style={[
          NewBackgroundStyle.BottomTabBackgroundStyle,
          { alignItems: "center" },
        ]}
      >
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
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </View>
        {selectedCategory === "자유" && (
          <FlatList
            data={freeData?.FREE_BUB}
            keyExtractor={(item, index) => item.CRE_SEQ.toString() + index}
            renderItem={({ item }) => (
              <FreeListIclucontnButton
                nickname={item.NICK_NM}
                freposttime={item.CRE_DAT}
                fretit={item.TIT}
                frecont={item.CONT}
                grade="1학년"
                onPress={() => navigation.navigate("FrePostDetailPage")}
              />
            )}
          />
        )}
        {selectedCategory === "건의" && (
          <SgsListContentButton
            title="비공개 게시물입니다."
            poststatus="답변 대기중"
            anonynick="익명"
            sgsposttime="2021년2월2일"
            onPress={() => navigation.navigate("SgsPostDetailPage")}
          />
          /**
        <FlatList
          data={sgsData?.SUG_BUB}
          keyExtractor={(item, index) => item.CRE_SEQ.toString() + index}
          renderItem={({ item }) => (
            <View>
              <Text>{item.NICK_NM}</Text>
              <Text>{item.CONT}</Text>
            </View>
       
         */
        )}
        {selectedCategory === "질문" && (
          <QstListContentButton
            nickname="도원숙"
            postcontent="안녕하세요 교수님 화장실 가도 될까요?"
            grade="1학년"
            qstposttime="2022년1웕5일"
            onPress={() => navigation.navigate("SgsPostDetailPage")}
          />
          /**
        <FlatList
          data={questData?.QUES_BUB}
          keyExtractor={(item, index) => item.CRE_SEQ.toString() + index}
          renderItem={({ item }) => (
            <View>
              <Text>{item.NICK_NM}</Text>
              <Text>{item.CONT}</Text>
            </View>
       
         */
        )}
      </View>
    </Background>
  );
};

export default ListPostPage;
