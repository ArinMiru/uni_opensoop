import { SafeAreaView } from "react-native";
import React from "react";
import styles from "../../Styles/BackgroundStyle";

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
    <SafeAreaView style={styles.AccountBackground}>{children}</SafeAreaView>
  );
};
