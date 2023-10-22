import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { FreeData } from "../../Utils/_private/ApiData/FreeData";
import { QuesBubListSvc } from "../../Services/_private/QusetPostData";
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
import { SugBubListData } from "../../Utils/_private/ApiData/SugBubListData";
import { SugBubListSvc } from "../../Services/_private/SugBubListApi";
import { QuestData } from "../../Utils/_private/ApiData/QuestData";
import Spinner from "react-native-loading-spinner-overlay";

const ListPostPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData();
  const [selectedCategory, setSelectedCategory] = useState("자유");
  const [freeData, setFreeData] = useState<FreeData | null>(null);
  const [questData, setQuestData] = useState<QuestData | null>(null);
  const [sugsData, setSugsData] = useState<SugBubListData | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (userData !== null && isFocused) {
      setLoading(true);
      // 화면 포커스일 때만 실행
      // 자유게시판 데이터 가져오기
      FreeBubListCall(
        userData.LOGIN_ID,
        userData.MEMB_SC_CD,
        userData.MEMB_DEP_CD,
        userData.TIT_CD
      )
        .then((data) => {
          if (data !== null) {
            const sorted = { ...data };
            if (sorted.FREE_BUB) {
              sorted.FREE_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
            }
            setFreeData(sorted);
            console.log("실행");
          }
        })
        .catch((error) => {
          console.error("자유게시판 데이터 가져오기 오류:", error);
        });

      // 건의게시판 데이터 가져오기
      SugBubListSvc(
        userData.LOGIN_ID,
        userData.MEMB_SC_CD,
        userData.MEMB_DEP_CD,
        userData.TIT_CD
      )
        .then((data) => {
          if (data != null) {
            const sorted = { ...data };
            if (sorted.SUG_BUB) {
              sorted.SUG_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
            }
            setSugsData(sorted);
          }
        })
        .catch((error) => {
          console.error("건의게시판 데이터 가져오기 오류", error);
        });

      // 질문게시판 데이터 가져오기
      QuesBubListSvc(
        userData.LOGIN_ID,
        userData.MEMB_SC_CD,
        userData.MEMB_DEP_CD,
        userData.TIT_CD
      )
        .then((data) => {
          if (data !== null) {
            const sorted = { ...data };
            if (sorted.QUES_BUB) {
              sorted.QUES_BUB.sort((a, b) => b.CRE_SEQ - a.CRE_SEQ);
            }
            setQuestData(sorted);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("질문게시판 데이터 가져오기 오류:", error);
        });
    }
  }, [userData, isFocused]);

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
        <Spinner
          // 로딩 상태에 따라 Spinner를 화면에 표시
          visible={loading}
          textContent={"로딩 중..."}
          textStyle={{ color: "#FFF" }}
        />
        {selectedCategory === "자유" && freeData && (
          <FlatList
            data={freeData.FREE_BUB}
            keyExtractor={(item) => item.CRE_SEQ.toString()}
            renderItem={({ item }) => (
              <FreeListIclucontnButton
                nickname={item.NICK_NM}
                freposttime={item.CRE_DAT}
                fretit={item.TIT}
                frecont={item.CONT}
                onPress={() => {
                  navigation.navigate("FrePostDetailPage", {
                    CRE_SEQ: item.CRE_SEQ,
                    NICK_NM: item.NICK_NM,
                    LIKE_CNT: item.LIKE_CNT,
                    CRE_DAT: item.CRE_DAT,
                    CONT: item.CONT,
                    TIT: item.TIT,
                    AnsFree: item.ANS_FREE,
                  });
                }}
              />
            )}
          />
        )}
        {selectedCategory === "건의" && sugsData && (
          <FlatList
            data={sugsData.SUG_BUB}
            keyExtractor={(item) => item.CRE_SEQ.toString()}
            renderItem={({ item }) => (
              <SgsListContentButton
                title={item.TIT}
                poststatus={item.SEC_YN}
                anonynick="익명"
                sgsposttime={item.CRE_DAT}
                onPress={() =>
                  navigation.navigate("SgsPostDetailPage", {
                    CRE_SEQ: item.CRE_SEQ,
                    CONT: item.CONT,
                    TIT: item.TIT,
                    CRE_DAT: item.CRE_DAT,
                    NICK_NM: item.NICK_NM,
                    AnsFree: item.ANS_FREE,
                  })
                }
              />
            )}
          />
        )}
        {selectedCategory === "질문" && questData && (
          <FlatList
            data={questData.QUES_BUB}
            keyExtractor={(item) => item.CRE_SEQ.toString()}
            renderItem={({ item }) => (
              <QstListContentButton
                nickname={item.NICK_NM}
                postcontent={item.CONT}
                grade="1학년"
                qstposttime={item.CRE_DAT}
                onPress={() => navigation.navigate("SgsPostDetailPage")}
              />
            )}
          />
        )}
      </View>
    </Background>
  );
};

export default ListPostPage;
