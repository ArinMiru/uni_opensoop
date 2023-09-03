import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "../Styles/ButtonStyle";
import textStyle from "../Styles/TextStyle";
import { useNavigation } from "@react-navigation/native";

/**
 * 버튼 컴포넌트 속성 정의
 */
interface ButtonProps {
  children?: React.ReactNode;
  text: string;
}

export const LongButton: React.FC<ButtonProps> = ({ children, text }) => {
  return (
    <TouchableOpacity style={Styles.longButton}>
      <Text style={textStyle.textbase}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

export const ShortButton: React.FC<ButtonProps> = ({ children, text }) => {
  return (
    <TouchableOpacity style={Styles.shortButton}>
      <Text style={textStyle.textbase}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};
