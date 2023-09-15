import { Text } from "react-native";
import React from "react";
import { LoginBackground } from "../Components/AllCompo/Background";
import { LongButton, ShortButton } from "../Components/Reusable/Button";
import { LongInput, ShortInput } from "../Components/Reusable/TextInput";
import { BasicTopbar } from "../Components/Reusable/Topbar";
import { ScreenProps } from "./StackNavigator";
import { TouchableOpacity } from "react-native-gesture-handler";
import Styles from "../Styles/ButtonStyle";

const TestScreen: React.FC<ScreenProps> = ({ navigation }) => {
  // 타입을 명시적으로 설정
  const openModal = () => {
    navigation.navigate("ModalScreen");
  };
  return (
    <LoginBackground>
      <BasicTopbar text="기본 상단 UI" />
      <LongButton text="기본 긴 버튼" />
      <ShortButton text="짧은 버튼" />
      <LongInput text="기본 긴 인풋" />
      <ShortInput text="짧은 인풋" />
      <TouchableOpacity style={Styles.longButtonStyle} onPress={openModal}>
        <Text>Bottom Modal Test</Text>
      </TouchableOpacity>
    </LoginBackground>
  );
};

export default TestScreen;
