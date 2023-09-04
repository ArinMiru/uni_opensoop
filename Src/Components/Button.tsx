import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "../Styles/ButtonStyle";
import textStyle from "../Styles/TextStyle";


//  프로퍼티 타입 정의 
interface ButtonProps {
  children?: React.ReactNode;
  text: string;
}

/**
 * 기본 긴 버튼
 * 사용법은 LongButton text="문자열"
 */

export const LongButton: React.FC<ButtonProps> = ({ children, text }) => {                // 파스칼 케이스 적용 
  return (
    <TouchableOpacity style={Styles.longButtonStyle}>
      <Text style={textStyle.textbase}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};
/**
 * 기본 짧은 버튼
 * 사용법은 ShortButton text = "문자열"
 */

export const ShortButton: React.FC<ButtonProps> = ({ children, text }) => {               // 파스칼 케이스 적용 
  return (
    <TouchableOpacity style={Styles.shortButtonStyle}>
      <Text style={textStyle.textbase}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

