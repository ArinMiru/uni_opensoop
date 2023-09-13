import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import styles from "../../Styles/BackgroundStyle";
import { StyleSheet } from "react-native";

/* 삭제 예정 (@김도원)*/

interface BackgroundProps {
  children?: React.ReactNode;
}

/**
 * 로그인 회원가입 스크린 가장 기본 베이스 백그라운드
 * @param param0
 * @returns
 */
export const LoginBackground: React.FC<BackgroundProps> = ({ children }) => {
  return <SafeAreaView style={styles.loginBackground}>{children}</SafeAreaView>;
};
