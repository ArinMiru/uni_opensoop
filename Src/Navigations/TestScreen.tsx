import { Text } from "react-native";
import React from "react";
import { LoginBackground } from "../Components/Background";
import { BaseButton, ShortButton } from "../Components/Button";
import { LongInput, ShortInput } from "../Components/TextInput";
import { BasicTopbar } from "../Components/Topbar";

const TestScreen = () => {
  return (
    <LoginBackground>
      <BasicTopbar text="기본 상단 UI" />
      <BaseButton text="기본 긴 버튼"></BaseButton>
      <ShortButton text="짧은 버튼"></ShortButton>
      <LongInput text="기본 긴 인풋"></LongInput>
      <ShortInput text="짧은 인풋"></ShortInput>
    </LoginBackground>
  );
};

export default TestScreen;
