import React from "react";
import { View, KeyboardAvoidingView, Text } from "react-native";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { BackIocnTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import {
  OpenFreSgsTitInputBox,
  OpenFreSgsContInputBox,
} from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import { RegiButton } from "../../../Components/ListCompo/RegiButton";
import { ListCategorieCompo } from "../../../Components/ListCompo/ListCommonCompo/ListCategorieCompo";
import TextStyle from "../../../Styles/TextStyle";

const SgsPostRegiPage: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <AccountBackground>
      <BackIocnTopbarStyle text="게시판" onPress={() => navigation.goBack()} />
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

      <View
        style={{
          width: deviceWidth * 1,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OpenFreSgsTitInputBox text="제목을 입력하세요"></OpenFreSgsTitInputBox>
      </View>

      <KeyboardAvoidingView
        style={{
          flex: 3,
          width: deviceWidth * 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        behavior="padding"
        enabled
      >
        <OpenFreSgsContInputBox text="텍스트를 입력해주세요."></OpenFreSgsContInputBox>
      </KeyboardAvoidingView>
      <View
        style={{
          flex: 1,
          width: deviceWidth * 0.84,
          justifyContent: "center",
        }}
      >
        <Text
          style={[TextStyle.medium09, { color: "#939393", paddingTop: "1.5%" }]}
        >
          {"  "}학생회 임원들께 건의하는 게시판입니다. 학과 내 생활을 더욱
          원활하게 만드는 아이디어를 제안해주세요. 학생회 임원들을 비난하지
          않도록 주의 부탁드립니다. 익명으로 작성되며, 자유롭게 의견을
          남겨주세요.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RegiButton text="등록하기"></RegiButton>
      </View>
      <View style={{ flex: 1, backgroundColor: "black" }}></View>
    </AccountBackground>
  );
};

export default SgsPostRegiPage;
