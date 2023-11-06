import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import {
  OpenFreSgsTitInputBox,
  OpenFreSgsContInputBox,
} from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import { FreeListLawButton } from "../../../Components/ListCompo/FreCompo/FreButton";
import { BackIconRegiTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { FreeBubRegi } from "../../../Services/_private/FreeApi";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import ListInputBoxStyle from "../../../Styles/ListStyles/ListInputBoxStyle";
import TextStyle from "../../../Styles/TextStyle";

//@jeakyoung 생성 게시글 등록 API

const FrePostRegiPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData(); // 현재 사용자 데이터
  const [cont, setCont] = useState<string>("");
  const [tit, setTit] = useState<string>("");

  // 등록 버튼
  const handleRegiButtonPress = async () => {
    try {
      const userData = getUserData();
      if (userData) {
        const responseData = await FreeBubRegi(tit, cont);

        if (responseData) {
          navigation.navigate("ListPostPage");
          setCont("");  
          setTit("");
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
        Title="자유게시판 등록"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        //onPress={() => navigation.goBack()} 
        // 이전 게시물을 작성을 완료한 후, FrePostRegiPage에서 뒤로가기 시
        // 게시물 작성 기록이 사라짐
        onPress={() => navigation.navigate("ListPostPage")}
        onPressRegi={handleRegiButtonPress}
      />
      <View
        style={[
          NewBackgroundStyle.OnlyTopRadiusBackgroundStyle,
          { alignItems: "center" },
        ]}
      >
        {/* 첫번째 뷰 */}
        <View
          style={{
            flex: 1.5,
            width: deviceWidth * 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={ListInputBoxStyle.FreQstOpenTitInputBoxStyle}>
            <OpenFreSgsTitInputBox
              text="제목을 입력하세요"
              value={tit}
              onChangeText={(text) => setTit(text)}
              keyboardType="default"
              keyboardAppearance="default"
              autoCapitalize="none"
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
        </View>
        {/* 두번째 뷰 */}
        <KeyboardAvoidingView
          style={{
            flex: 1.7,
            height: "auto",
            width: deviceWidth * 1,
            alignItems: "center",
          }}
          behavior="padding"
          enabled
        >
          <View style={ListInputBoxStyle.FreQstOpenContInputBoxStyle}>
            <OpenFreSgsContInputBox
              text="텍스트를 입력해주세요."
              value={cont}
              onChangeText={(text) => setCont(text)}
              keyboardType="default"
              keyboardAppearance="default"
              autoCapitalize="none"
            ></OpenFreSgsContInputBox>
            <Text
              style={[
                TextStyle.semibold08,
                { color: "#919191", alignSelf: "flex-end", paddingTop: "2%" },
              ]}
            >
              최소 10자
            </Text>
          </View>
        </KeyboardAvoidingView>
        {/* 세번째 뷰 */}
        <View
          style={{
            flex: 1.5,
            width: deviceWidth * 1,
            justifyContent: "flex-start",
            alignItems: "flex-end",
          }}
        >
          <FreeListLawButton
            onPress={() => navigation.navigate("FrePostDetailLawPage")}
          />
        </View>
        {/* 네번째 뷰 */}
        <View style={{ flex: 2 }}></View>
      </View>
    </Background>
  );
};

export default FrePostRegiPage;
