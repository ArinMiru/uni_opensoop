import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import styles from "../../Styles/BackgroundStyle";
import { StyleSheet } from "react-native";

interface BackgroundProps {
  children?: React.ReactNode;
}

export const LoginBackground: React.FC<BackgroundProps> = ({ children }) => {
  return <SafeAreaView style={styles.loginBackground}>{children}</SafeAreaView>;
};
