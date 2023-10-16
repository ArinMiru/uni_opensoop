import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "../../Styles/BackgroundStyle";
import MainPageStyles from "../../Styles/MainPageStyles/MainPageStyles";

interface BackgroundProps {
  children?: React.ReactNode;
}

/**
 * 로그인 회원가입 스크린 가장 기본 베이스 백그라운드
 * @param param0
 * @returns
 */
export const AccountBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.AccountBackground}>{children}</SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

/**
 * 새로운 기본 베이스 백그라운드
 * @param param0
 * @returns
 */
export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={MainPageStyles.Background}>{children}</SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
