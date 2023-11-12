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
import { Alert } from "react-native";
import { FreeBubEd } from "../../../Services/_private/FreeApi";
import { FreEditProps } from "../../../Utils/NavigationProp/NavigationEditScrProp";
import { CommonActions } from "@react-navigation/native";
//@jeakyoung 생성 게시글 등록 API

const FreEditPostPage: React.FC<FreEditProps> = ({ navigation, route }) => {
  const userData = getUserData(); // 현재 사용자 데이터
  const [cont, setCont] = useState<string>("");
  const [tit, setTit] = useState<string>("");
  const { CONT, TIT, CRE_SEQ } = route.params;
  // 등록 버튼
  const handleRegiButtonPress = async () => {
    try {
      const userData = getUserData();
      if (userData) {
        const result = await FreeBubEd(CRE_SEQ,tit, cont);
        if (result && result.data.RSLT_CD === "00") {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: "BottomTabNavigations",
                  state: {
                    routes: [
                      {
                        name: "ListPostPage",
                        params: { selectedCategory: "자유" },
                      },
                    ],
                  },
                },
              ],
            })
          );
          Alert.alert("성공", "수정 성공");
        } else {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: "BottomTabNavigations",
                  state: {
                    routes: [
                      {
                        name: "ListPostPage",
                        params: { selectedCategory: "자유" },
                      },
                    ],
                  },
                },
              ],
            })
          );
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
        Title="자유게시판 등록"
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

export default FreEditPostPage;
