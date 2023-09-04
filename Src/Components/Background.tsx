import { SafeAreaView } from "react-native";
import React from "react";
import styles from "../Styles/BackgroundStyle";

//프로퍼티 타입 정의
interface BackgroundProps {
  children?: React.ReactNode;
}
/**
 * 가장 기본 백그라운드 배경
 */
export const LoginBackground: React.FC<BackgroundProps> = ({ children }) => {
  return <SafeAreaView style={styles.loginBackground}>{children}</SafeAreaView>;
};
