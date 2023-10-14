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
import { openBubSvcNew } from "../../../Services/_private/NoticeApi";

/** [02, 03, 05] TIT_CD에 해당하는 사용자만 접근 가능 페이지 */

const NoticePostRegi: React.FC<ScreenProps> = ({ navigation }) => {
  const [photoButtonClicked, setphotoButtonClicked] = React.useState(false);
  const [cont, setCont] = useState<string>("");
  const [tit, setTit] = useState<string>("");
  /** NoticePostRegiPage 컴포넌트에서 사용되는 상태 변수 중 하나인 photoButtonClicked의 값을 변경하는 함수입니다. */

  const handleRegiButtonPress = async () => {
    try {
      // 필요한 데이터 가져오기
      const userData = getUserData();

      if (userData) {
        const TIT = tit;
        const CONT = cont;

        // 사용자가 이미지를 업로드한 경우에만 이미지 정보를 구성
        let IMAGE_INFO = [];

        // 사용자가 이미지를 업로드한 경우

        IMAGE_INFO = [
          {
            FILE_BASE64: "1. FILE_BASE64 값",
            FILE_NM: "2. FILE_NM 값",
            IMG_SEQ: 1,
          },
          {
            FILE_BASE64: "3. FILE_BASE64 값",
            FILE_NM: "4. FILE_NM 값",
            IMG_SEQ: 2,
          },
        ];

        // 데이터 객체 구성
        const dataToSubmit = {
          LOGIN_ID: userData.LOGIN_ID,
          MEMB_DEP_CD: userData.MEMB_DEP_CD,
          MEMB_SC_CD: userData.MEMB_SC_CD,
          TIT_CD: userData.TIT_CD,
          TIT,
          CONT,
          IMAGE_INFO,
        };

        // openBubSvc 함수에 데이터 전달
        await openBubSvcNew(
          dataToSubmit.LOGIN_ID,
          dataToSubmit.MEMB_DEP_CD,
          dataToSubmit.MEMB_SC_CD,
          dataToSubmit.TIT_CD,
          dataToSubmit.TIT,
          dataToSubmit.CONT,
          dataToSubmit.IMAGE_INFO
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