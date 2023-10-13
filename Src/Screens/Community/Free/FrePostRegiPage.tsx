import React, {useState} from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import {
  OpenFreSgsTitInputBox,
  OpenFreSgsContInputBox,
} from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import { RegiButton } from "../../../Components/ListCompo/RegiButton";
import { ListCategorieCompo } from "../../../Components/ListCompo/ListCommonCompo/ListCategorieCompo";
import { FreeListLawButton } from "../../../Components/ListCompo/FreCompo/FreButton";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { ScrollView } from "react-native-gesture-handler";
import { 
  FreeBubRegi,
  FreeBubDel,
  FreeBubEd,
} from "../../../Services/_private/FreeApi";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";

//@jeakyoung 생성 게시글 등록 API

const FrePostRegiPage: React.FC<ScreenProps> = ({ navigation }) => {
  const [cont, setCont] = useState<string>("");
  const [tit, setTit] = useState<string>("");

// 등록 버튼
const handleRegiButtonPress = async () => {
  try {
    const userData = getUserData();
    if(userData) {

      const {LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD} = userData;

      await FreeBubRegi(
        LOGIN_ID,
        "01",
        MEMB_SC_CD,
        MEMB_DEP_CD,
        TIT_CD,
        tit,
        cont,
      );

    }else{
      console.error("userData가 null입니다.");
    }
  } catch (error){
    console.error("등록 오류", error);
  }
}

  return (
    <AccountBackground>
      <BackIconTopbarStyle text="게시판" onPress={() => navigation.goBack()} />
      <View
        style={{
          height: deviceWidth * 0.18,
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
          flex: 1,
          width: deviceWidth * 1,
          justifyContent: "flex-start",
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
      </View>
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <FreeListLawButton />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RegiButton 
        text="등록하기"
        onPress={handleRegiButtonPress}
        ></RegiButton>
      </View>
    </AccountBackground>
  );
};

export default FrePostRegiPage;
