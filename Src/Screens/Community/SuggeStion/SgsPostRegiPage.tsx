import React, { useState } from "react";
import { View, Text } from "react-native";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { BackIconRegiTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import {
  OpenFreSgsTitInputBox,
  OpenFreSgsContInputBox,
} from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import TextStyle from "../../../Styles/TextStyle";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { SugBubListNew } from "../../../Services/_private/SugBubListApi";

const SgsPostRegiPage: React.FC<ScreenProps> = ({ navigation }) => {
  const [cont, setCont] = useState<string>("");
  const [tit, setTit] = useState<string>("");

  const userData = getUserData(); // 현재 사용자 데이터

  const handleRegiButtonPress = async () => {
    try {
      // 필요한 데이터 가져오기

      if (userData) {
        await SugBubListNew(tit, cont, "Y");

        // 등록 후 필요한 네비게이션 이동 등의 작업 수행
        // navigation.navigate("다음 화면");
      } else {
        console.error("userData가 null입니다.");
      }
    } catch (error) {
      console.error("등록 오류:", error);
    }
    navigation.goBack();
  };

  return (
    <Background>
      <BackIconRegiTopbarStyle
        Title="건의게시판 등록"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPress={() => navigation.goBack()}
        onPressRegi={handleRegiButtonPress}
      />
      <View
        style={[
          NewBackgroundStyle.OnlyTopRadiusBackgroundStyle,
          { alignItems: "center" },
        ]}
      >
        <View
          style={{
            flex: 1,
            width: deviceWidth * 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <OpenFreSgsTitInputBox
            text="제목을 입력하세요"
            value={tit}
            onChangeText={(text) => setTit(text)}
          ></OpenFreSgsTitInputBox>
        </View>

        <View
          style={{
            width: deviceWidth * 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <OpenFreSgsContInputBox
            text="텍스트를 입력해주세요."
            value={cont}
            onChangeText={(text) => setCont(text)}
          ></OpenFreSgsContInputBox>
          <View
            style={{
              width: deviceWidth * 0.82,
              justifyContent: "center",
            }}
          >
            <Text
              style={[
                TextStyle.medium09,
                { color: "#939393" },
                { paddingTop: deviceWidth * 0.02 },
                { letterSpacing: -0.3 },
              ]}
            >
              학생회 임원들께 건의하는 게시판입니다. 학과 내 생활을 더욱
              원활하게 만드는 아이디어를 제안해주세요. 학생회 임원들을 비난하지
              않도록 주의 부탁드립니다. 익명으로 작성되며, 자유롭게 의견을
              남겨주세요.
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
      </View>
    </Background>
  );
};

export default SgsPostRegiPage;