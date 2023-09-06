import Styles from "../Styles/TextInputStyle";
import React from "react";
import { TextInput } from "react-native";

//프로퍼티 타입 정의
interface inputProps {
  children?: React.ReactNode; //리액트로 타입 명시
  text: string; //문자열로 타입 명시
}

export const LongInput: React.FC<inputProps> = ({ children, text }) => {                 // 버튼 컴포넌트의 타입을 정확하게 명시
  return <TextInput placeholderTextColor="#8391A1" style={[Styles.longInput, {marginBottom:25}]} placeholder={text}/>;
};

export const ShortInput: React.FC<inputProps> = ({ children, text }) => {                // 버튼 컴포넌트의 타입을 정확하게 명시
    return <TextInput style={Styles.shortInput} placeholder={text}/>;
  };
