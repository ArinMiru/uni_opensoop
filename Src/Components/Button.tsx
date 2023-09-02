import { TouchableOpacity, Text } from "react-native";
import Styles from "../Styles/ButtonStyle";
import textSyle from "../Styles/TextStyle"
import React from "react";

interface buttonProps {                                                         //버튼 속성 지정
  children?: React.ReactNode;                                                   //리액트로 타입 명시
  text: string;                                                                 //문자열로 타입 명시
}

export const BaseButton: React.FC<buttonProps> = ({ children, text }) => {      // 버튼 컴포넌트의 타입을 정확하게 명시
  return (
    <TouchableOpacity style={Styles.baseButton}>
      <Text style={textSyle.textbase}>{text}</Text>                                                       
      {children}
    </TouchableOpacity>
  );
};