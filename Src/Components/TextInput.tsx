import Styles from "../Styles/TextInputStyle";
import React from "react";
import { TextInput } from "react-native";

interface inputProps {
  //속성 지정
  children?: React.ReactNode; //리액트로 타입 명시
  text: string; //문자열로 타입 명시
}

export const LongInput: React.FC<inputProps> = ({ children, text }) => {
  // 버튼 컴포넌트의 타입을 정확하게 명시
  return <TextInput style={Styles.longInput} placeholder={text}></TextInput>;
};
export const ShortInput: React.FC<inputProps> = ({ children, text }) => {
    // 버튼 컴포넌트의 타입을 정확하게 명시
    return <TextInput style={Styles.shortInput} placeholder={text}></TextInput>;
  };
