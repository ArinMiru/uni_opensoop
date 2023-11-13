import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
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
import ListInputBoxStyle from "../../../Styles/ListStyles/ListInputBoxStyle";
import { Alert } from "react-native";
import { SugBubListUp } from "../../../Services/_private/SugBubListApi";
import { CommonActions } from "@react-navigation/native";
import { sgsEditProps } from "../../../Utils/NavigationProp/NavigationEditScrProp";

const SgsEditPostPage: React.FC<sgsEditProps> = ({ navigation, route }) => {
  const { TIT, CONT, CRE_SEQ } = route.params;
  const [cont, setCont] = useState<string>(TIT);
  const [tit, setTit] = useState<string>(CONT);

  const userData = getUserData(); // 현재 사용자 데이터
  const handleRegiButtonPress = async () => {
    try {
      if (userData) {
        const result = await SugBubListUp(CRE_SEQ, tit, cont, "Y");
        if (result && result.RSLT_CD === "00") {
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
                        params: { selectedCategory: "건의" },
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
                        params: { selectedCategory: "건의" },
                      },
                    ],
                  },
                },
              ],
            })
          );
          Alert.alert("성공", "수정 성공");
        }
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
            width: deviceWidth * 1,
            height: "auto",
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
            width: deviceWidth * 0.82,
            justifyContent: "flex-start",
            alignItems: "center",
            flex: 3.5,
          }}
        >
          <Text
            style={[
              TextStyle.regular08,
              { color: "#909090" },
              { paddingTop: deviceWidth * 0.02 },
              { letterSpacing: -0.3 },
            ]}
          >
            학생회 임원들께 건의하는 게시판입니다. 학과 내 생활을 더욱 원활하게
            만드는 아이디어를 제안해주세요. 학생회 임원들을 비난하지 않도록 주의
            부탁드립니다. 익명으로 작성되며, 자유롭게 의견을 남겨주세요.
          </Text>
        </View>
      </View>
    </Background>
  );
};

export default SgsEditPostPage;
