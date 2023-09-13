import Styles from "../../Styles/TopbarStyle";
import React from "react";
import { View, Text } from "react-native";
import textSyle from "../../Styles/TextStyle";

//프로퍼티 타입 정의
interface inputProps {
  children?: React.ReactNode; //리액트로 타입 명시
  text: string; //문자열로 타입 명시
}

/**
 * App 화면 상단 초록색 상단 바(공지사항, 게시판, 투표, 캘린더))
 * (2023.09.14 김도원 생성)
 */
export const Topbar: React.FC<inputProps> = ({ children, text }) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.Topbar}>
      <Text style={textSyle.semibold19}>{text}</Text>
      {children}
    </View>
  );
};
