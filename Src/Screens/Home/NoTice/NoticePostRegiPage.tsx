import React, { useState } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import {
  OpenFreSgsTitInputBox,
  OpenFreSgsContInputBox,
} from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import {
  OpenPhotoButton,
  OpenPhotoComboBox,
} from "../../../Components/ListCompo/OpenCompo/OpenButton";
import { RegiButton } from "../../../Components/ListCompo/RegiButton";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { openBubSvc } from "../../../Services/_private/NoticeApi";

/** [02, 03, 05] TIT_CD에 해당하는 사용자만 접근 가능 페이지 */

const NoticePostRegi: React.FC<ScreenProps> = ({ navigation }) => {
  const [photoButtonClicked, setphotoButtonClicked] = React.useState(false);
  const [cont, setCont] = useState<string>("");
  const [tit, setTit] = useState<string>("");
  /** NoticePostRegiPage 컴포넌트에서 사용되는 상태 변수 중 하나인 photoButtonClicked의 값을 변경하는 함수입니다. */

  const handleRegiButtonPress = async () => {
    try {
      const userData = getUserData();

      if (userData) {
        // userData에서 필요한 값을 추출
        const { LOGIN_ID, MEMB_DEP_CD, MEMB_SC_CD, TIT_CD } = userData;

        // 여기서 사용자가 입력한 값을 서버로 전송
        // 사용자 입력값과 userData를 사용하여 openBubSvc 호출
        await openBubSvc(
          LOGIN_ID,
          MEMB_DEP_CD,
          MEMB_SC_CD,
          TIT_CD,
          "01", // 아래에서 tit와 cont 값을 어떻게 설정하는지에 따라 변경할 수 있음
          tit, // 사용자가 입력한 값으로 설정
          cont // 사용자가 입력한 값으로 설정
        );

        // 등록 후 필요한 네비게이션 이동 등의 작업 수행
        // navigation.navigate("다음 화면");
      } else {
        console.error("userData가 null입니다.");
      }
    } catch (error) {
      console.error("등록 오류:", error);
    }
  };

  return (
    <AccountBackground>
      <BackIconTopbarStyle
        text="공지사항"
        onPress={() => navigation.goBack()}
      />
      <View
        style={{
          width: deviceWidth * 1,
          flex: 1,
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
        <OpenFreSgsContInputBox
          text="텍스트를 입력해주세요."
          value={cont}
          onChangeText={(text) => setCont(text)}
        ></OpenFreSgsContInputBox>
      </KeyboardAvoidingView>
      <View
        style={{
          flex: 2,
          width: deviceWidth * 1,
          marginTop: deviceHeight * 0.02,
          marginRight: deviceWidth * 0.16,
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}
      >
        {photoButtonClicked ? (
          <OpenPhotoComboBox />
        ) : (
          <OpenPhotoButton
            onPress={() => setphotoButtonClicked(!photoButtonClicked)}
          />
        )}
      </View>

      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
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

export default NoticePostRegi;
