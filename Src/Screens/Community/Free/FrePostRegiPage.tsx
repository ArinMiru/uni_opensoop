import React from "react";
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

const FrePostRegiPage: React.FC<ScreenProps> = ({ navigation }) => {
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
        <OpenFreSgsTitInputBox text="제목을 입력하세요"></OpenFreSgsTitInputBox>
      </View>

      <View
        style={{
          width: deviceWidth * 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OpenFreSgsContInputBox text="텍스트를 입력해주세요."></OpenFreSgsContInputBox>
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
        <RegiButton text="등록하기"></RegiButton>
      </View>
    </AccountBackground>
  );
};

export default FrePostRegiPage;
