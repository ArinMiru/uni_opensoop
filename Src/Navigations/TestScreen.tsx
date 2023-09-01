import { Text } from "react-native";
import React from "react";
import { LoginBackground } from "../Components/Background";
import { BaseButton } from "../Components/Button";

const TestScreen = () => {
  return (
    <LoginBackground>
      <BaseButton text="다음"></BaseButton>
    </LoginBackground>
  );
};

export default TestScreen;
