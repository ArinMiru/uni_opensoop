import Styles from "../Styles/TopbarStyle";
import React from "react";
import { View, Text } from "react-native";
import textSyle from "../Styles/TextStyle";

//프로퍼티 타입 정의
interface inputProps {
  children?: React.ReactNode; //리액트로 타입 명시
  text: string; //문자열로 타입 명시
}

/**
 * 기본적인 상단 바 사용법은 BasicTopbar text = "문자열" 
 */
export const BasicTopbar: React.FC<inputProps> = ({ children, text }) => {              // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.basicTopbar}>
      <Text style={textSyle.textbase}>{text}</Text>
      {children}
    </View>
  );
};
