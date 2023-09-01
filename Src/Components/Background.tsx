import { SafeAreaView, Text } from "react-native";
import React from "react";
import styles from "../Styles/BackgroundStyle";

interface BackgroundProps {
  children?: React.ReactNode;
}

export const LoginBackground: React.FC<BackgroundProps> = ({ children }) => {
  return <SafeAreaView style={styles.loginBackground}>{children}</SafeAreaView>;
};
