import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { QuestData } from "../../../Utils/_private/ApiData/QuestData";
import { QuesBubListSvc } from "../../../Utils/_private/ApiData/QuestPostData";
import Spinner from "react-native-loading-spinner-overlay";

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
  const [questData, setQuestData] = useState<QuestData | null>(null);
  const [selectedCreSeq, setSelectedCreSeq] = useState<number>(0);

  useEffect(() => {
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
  }, []);

  return (
    <AccountBackground>
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      ></View>
      <View>
        <FlatList
          data={questData?.QUES_BUB}
          keyExtractor={(item) => item.CRE_SEQ.toString()}
          renderItem={({ item }) => (
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
