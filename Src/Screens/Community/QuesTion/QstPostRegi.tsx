import React from "react";
import { View, Text } from "react-native";
import { BackIconRegiTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { QstContInputBox } from "../../../Components/ListCompo/QstCompo/QstInputCompo";
import TextStyle from "../../../Styles/TextStyle";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";

const userData = getUserData(); // 현재 사용자 데이터

const QstPostRegiPage: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <Background>
      <BackIconRegiTopbarStyle
        Title="질문게시판 등록"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPress={() => navigation.goBack()}
        onPressRegi={() => navigation.goBack()}
      />
      <View
        style={[
          NewBackgroundStyle.OnlyTopRadiusBackgroundStyle,
          { alignItems: "center" },
        ]}
      >
        <SafeAreaView>
          <KeyboardAvoidingView
            style={{
              justifyContent: "center",
            }}
          >
            <QstContInputBox text="텍스트를 입력해주세요"></QstContInputBox>
          </KeyboardAvoidingView>
        </SafeAreaView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: deviceWidth * 0.82,
          }}
        >
          <Text
            style={[
              TextStyle.medium09,
              { color: "#828282" },
              { textAlign: "left" },
            ]}
          >
            지식을 함께 나누며 해결해 나가는 즐거움을 느껴보세요. 이곳은
            궁금증을 해결하기 위한 질문 게시판입니다. 다른 학생들에게 도움이
            되는 질문들을 함께 공유해주시면 정말 감사하겠습니다.
          </Text>
        </View>
        <View style={{ flex: 3.5 }}></View>
      </View>
    </Background>
  );
};

export default QstPostRegiPage;
