import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Alert } from "react-native";
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
import { useModal } from "../../../Screens/ModalContext";
import { CommonActions } from "@react-navigation/native";

//@jeakyoung 생성 게시글 등록 API

const FrePostRegiPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData(); // 현재 사용자 데이터
  const [cont, setCont] = useState<string>("");
  const [tit, setTit] = useState<string>("");

  const { setTabBarVisible } = useModal();

  // 등록 버튼을 누르면 호출되는 함수
  const handleRegiButtonPress = async () => {
    // 제목과 내용이 2글자 이상인지 검사합니다.
    if (tit.trim().length < 2) {
      Alert.alert("오류", "제목은 최소 2자 이상이어야 합니다.");
      return;
    }

    if (cont.trim().length < 2) {
      Alert.alert("오류", "내용은 최소 2자 이상이어야 합니다.");
      return;
    }

    try {
      const result = await FreeBubRegi(tit, cont);
      if (result && result.data.RSLT_CD === "00") {
        setTit("");
        setCont("");
        Alert.alert("성공", "게시물 등록 성공", [
          {
            text: "확인",
            onPress: () => {
             
              setTabBarVisible(true);
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
                            params: {
                              selectedCategory: "자유",
                              newPageload: true,
                            },
                          },
                        ],
                      },
                    },
                  ],
                })
              );
            },
          },
        ]);
      } else {
      
        setTabBarVisible(true);
        navigation.goBack();
        Alert.alert("실패", "게시물 등록 실패");
      }
    } catch (error) {
     
    
      setTabBarVisible(true);
    }
  };
  return (
    <Background>
      <BackIconRegiTopbarStyle
        Title="자유게시판 등록"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPress={() => {
          setTabBarVisible(true);
          navigation.goBack();
        }}
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
              최소 2글자
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
              최소 2글자
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
