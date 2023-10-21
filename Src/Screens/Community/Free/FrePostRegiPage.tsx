import React, { useState } from "react";
import { View } from "react-native";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import {
  OpenFreSgsTitInputBox,
  OpenFreSgsContInputBox,
} from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import { FreeListLawButton } from "../../../Components/ListCompo/FreCompo/FreButton";
import { BackIconRegiTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import {
  FreeBubRegi,
  FreeBubDel,
  FreeBubEd,
} from "../../../Services/_private/FreeApi";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";

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
        await FreeBubRegi(tit, cont);
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
        <View
          style={{
            flex: 1.5,
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
            flex: 3.5,
            height: "auto",
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
        </View>
        <View
          style={{
            flex: 2,
            width: deviceWidth * 1,
            marginTop: deviceHeight * 0.02,
            justifyContent: "flex-start",
            alignItems: "flex-end",
          }}
        >
          <FreeListLawButton />
        </View>
        <View style={{ flex: 2 }}></View>
      </View>
    </Background>
  );
};

export default FrePostRegiPage;
