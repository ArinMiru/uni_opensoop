import Styles from "../Styles/TextInputStyle";
import React from "react";
import { TextInput } from "react-native";
import { deviceHeight, deviceWidth } from "../Utils/DeviceUtils";

//프로퍼티 타입 정의
interface inputProps {
  children?: React.ReactNode; //리액트로 타입 명시
  text: string; //문자열로 타입 명시
}

export const LongInput: React.FC<inputProps> = ({ children, text }) => {                 // 버튼 컴포넌트의 타입을 정확하게 명시
  return <TextInput placeholderTextColor="#8391A1" style={Styles.longInput} placeholder={text}/>;
};

export const LongInputMargin: React.FC<inputProps> = ({ children, text }) => {
  return <TextInput placeholderTextColor="#8391A1" style={[Styles.longInput, {marginBottom:deviceHeight*0.035}, {marginTop:deviceHeight*0.035}]} placeholder={text}/>;
}

export const ShortInput: React.FC<inputProps> = ({ children, text }) => {                // 버튼 컴포넌트의 타입을 정확하게 명시
    return <TextInput placeholderTextColor="#8391A1" style={[Styles.shortInput, {marginRight:deviceWidth*0.02}]} placeholder={text}/>;
  };