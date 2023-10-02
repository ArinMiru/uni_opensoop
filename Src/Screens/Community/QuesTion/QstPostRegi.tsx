import React, { useEffect, useState } from "react";
import { Platform, View, Text } from "react-native";
import { ListCategorieCompo } from "../../../Components/ListCompo/ListCommonCompo/ListCategorieCompo";
import { BackIocnTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { FreeListIclucontnButton } from "../../../Components/ListCompo/FreCompo/FreButtonCompo";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { QstContInputBox } from "../../../Components/ListCompo/QstCompo/QstInputCompo";
import TextStyle from "../../../Styles/TextStyle";
import { RegiButton } from "../../../Components/ListCompo/RegiButton";

interface ButtonProps {
  color: string;
  onPress: () => void;
}

const QstPostRegi: React.FC<ScreenProps> = ({ navigation }) => {
  const fontSize = Platform.OS === "ios" ? 9.5 : 9.5;
  return (
    <AccountBackground>
      <BackIocnTopbarStyle text="게시판" />
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
        />
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <QstContInputBox></QstContInputBox>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: deviceWidth * 0.85,
        }}
      >
        <Text style={[TextStyle.medium09, { fontSize, color: "#828282" }]}>
          지식을 함께 나누며 해결해 나가는 즐거움을 느껴보세요. 이곳은 궁금증을
          해결하{"\n"}기 위한 질문 게시판입니다. 다른 학생들에게 도움이 되는
          질문들을 함께 공유해주{"\n"}시면 정말 감사하겠습니다.
        </Text>
      </View>
      <View style={{ flex: 4 }}>
        <RegiButton text="등록하기"></RegiButton>
      </View>
    </AccountBackground>
  );
};

export default QstPostRegi;
