import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { BackIocnTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
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

const MNoticePostRegi: React.FC<ScreenProps> = ({ navigation }) => {
  /**
   * MNoticePostRegiPage 컴포넌트에서 사용되는 상태 변수 중 하나인 photoButtonClicked의 값을 변경하는 함수입니다.
   */
  const [photoButtonClicked, setphotoButtonClicked] = React.useState(false);
  return (
    <AccountBackground>
      <BackIocnTopbarStyle text="공지사항" />
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
          flex: 2,
          width: deviceWidth * 0.84,
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RegiButton text="등록하기"></RegiButton>
      </View>
    </AccountBackground>
  );
};

export default MNoticePostRegi;
