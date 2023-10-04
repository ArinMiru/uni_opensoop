import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import {
  OpenFreSgsTitInputBox,
  OpenFreSgsContInputBox,
} from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import {
  OpenPhotoButton,
  OpenPhotoComboBox,
} from "../../../Components/ListCompo/OpenCompo/OpenButton";
import { RegiButton } from "../../../Components/ListCompo/RegiButton";

/** [02, 03, 05] TIT_CD에 해당하는 사용자만 접근 가능 페이지 */

const NoticePostRegi: React.FC<ScreenProps> = ({ navigation }) => {
  const [photoButtonClicked, setphotoButtonClicked] = React.useState(false);
  /** NoticePostRegiPage 컴포넌트에서 사용되는 상태 변수 중 하나인 photoButtonClicked의 값을 변경하는 함수입니다. */
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
        <OpenFreSgsTitInputBox text="제목을 입력하세요"></OpenFreSgsTitInputBox>
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
        <OpenFreSgsContInputBox text="텍스트를 입력해주세요."></OpenFreSgsContInputBox>
      </KeyboardAvoidingView>
      <View
        style={{
          flex: 1,
          width: deviceWidth * 0.84,
          justifyContent: "center",
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

export default NoticePostRegi;