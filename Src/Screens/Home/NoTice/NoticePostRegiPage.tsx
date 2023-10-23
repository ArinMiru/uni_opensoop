import React, { useState } from "react";
import { View, KeyboardAvoidingView, Text } from "react-native";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { BackIconRegiTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
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
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { openBubSvcNew } from "../../../Services/_private/NoticeApi";
import { Background } from "../../../Components/AllCompo/Background";
import ListInputBoxStyle from "../../../Styles/ListStyles/ListInputBoxStyle";
import TextStyle from "../../../Styles/TextStyle";
/** [02, 03, 05] TIT_CD에 해당하는 사용자만 접근 가능 페이지 */

const NoticePostRegi: React.FC<ScreenProps> = ({ navigation }) => {
  const [photoButtonClicked, setphotoButtonClicked] = React.useState(false);
  const userData = getUserData();
  const [cont, setCont] = useState<string>("");
  const [tit, setTit] = useState<string>("");
  /** NoticePostRegiPage 컴포넌트에서 사용되는 상태 변수 중 하나인 photoButtonClicked의 값을 변경하는 함수입니다. */

  const handleRegiButtonPress = async () => {
    try {
      // 필요한 데이터 가져오기

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
    <Background>
      <BackIconRegiTopbarStyle
        Title="공지사항 등록"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPress={() => navigation.goBack()}
        onPressRegi={handleRegiButtonPress}
      />
      <View style={[NewBackgroundStyle.OnlyTopRadiusBackgroundStyle]}>
        {/* 첫 번째 뷰 */}
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

        {/* 두 번째 뷰 */}
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

        {/* 세 번째 뷰 */}
        <View
          style={{
            flex: 1.5,
            width: deviceWidth * 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {photoButtonClicked ? (
            <OpenPhotoComboBox />
          ) : (
            <View
              style={{
                flex: 1.5,
                width: deviceWidth * 1,
                justifyContent: "flex-start",
                alignItems: "flex-end",
              }}
            >
              <OpenPhotoButton
                onPress={() => setphotoButtonClicked(!photoButtonClicked)}
              />
            </View>
          )}
        </View>

        {/* 네 번째 뷰 */}
        <View style={{ flex: 2 }}></View>
      </View>
    </Background>
  );
};

export default NoticePostRegi;
