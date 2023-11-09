import React, { useState } from "react";
import { View, Text } from "react-native";
import { BackIconRegiTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import TextStyle from "../../../Styles/TextStyle";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { KeyboardAvoidingView } from "react-native";
import ListInputBoxStyle from "../../../Styles/ListStyles/ListInputBoxStyle";
import { OpenFreSgsTitInputBox } from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import { Alert } from "react-native";
import { quesBubSvcUp } from "../../../Services/_private/QusetApi";

const userData = getUserData(); // 현재 사용자 데이터

const QstEditPostPage: React.FC<ScreenProps> = ({ navigation }) => {
  const [quesTit, setQuesTit] = useState<string>("");
  const [quesCont, setQuesCont] = useState<string>("");

  const quesEdit = async () => {
    try {
      const userData = getUserData();
      if (userData != null) {
        const result = await quesBubSvcUp(quesTit, quesCont);
        if (result && result.RSLT_CD === "00") {
          navigation.goBack();
          Alert.alert("성공", "수정 성공");
        } else {
          navigation.goBack();
          Alert.alert("실패", "수정 실패");
        }
      } else {
        console.error("userData가 null입니다.");
      }
    } catch (error) {
      console.error("등록 오류", error);
    }
  };

  return (
    <Background>
      <BackIconRegiTopbarStyle
        Title="질문게시판 수정"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPress={() => navigation.goBack()}
        onPressRegi={quesEdit}
      />
      <View
        style={[
          NewBackgroundStyle.OnlyTopRadiusBackgroundStyle,
          { alignItems: "center" },
        ]}
      >
        <KeyboardAvoidingView
          style={{
            flex: 1.5,
            width: deviceWidth * 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={ListInputBoxStyle.FreQstOpenTitInputBoxStyle}>
            <OpenFreSgsTitInputBox
              text="질문을 입력하세요"
              value={quesTit}
              onChangeText={(text) => setQuesTit(text)}
            ></OpenFreSgsTitInputBox>
            <Text
              style={[
                TextStyle.semibold08,
                { color: "#919191", alignSelf: "flex-end", paddingTop: "2%" },
              ]}
            >
              최소 5자 / 최대 30자
            </Text>
          </View>
        </KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            width: deviceWidth * 0.82,
            flex: 5.2,
          }}
        >
          <Text
            style={[
              TextStyle.regular08,
              { color: "#909090" },
              { textAlign: "left" },
            ]}
          >
            지식을 함께 나누며 해결해 나가는 즐거움을 느껴보세요. 이곳은
            궁금증을 해결하기 위한 질문 게시판입니다. 다른 학생들에게 도움이
            되는 질문들을 함께 공유해주시면 정말 감사하겠습니다.
          </Text>
        </View>
      </View>
    </Background>
  );
};

export default QstEditPostPage;
