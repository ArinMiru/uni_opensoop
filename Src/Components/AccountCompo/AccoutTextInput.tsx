/**
 * AccountTextInput Components (Figma 참고)
 */
import Styles from "../../Styles/AccountStyles/AccountInputStyle";
import textStyle from "../../Styles/TextStyle";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
//프로퍼티 타입 정의
interface inputProps extends TextInputProps {
  inputtext?: string; //내용 작성 창에 들어가는 Text
  text?: string; //문자열로 타입 명시
}
/* 중복 확인 Input
 * Figma 참고
 */
export const SrchDupleInput: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  return (
    <TextInput
      placeholderTextColor="#8391A1"
      style={[Styles.srchDupleInputStyle, textStyle.medium12]}
      placeholder={text}
      {...props}
    />
  );
};

/*
 * Account 페이지 내의 모든 긴 인풋에 해당하는 컴포넌트(함수) -> Margin : 0.03
 *
 */
export const OnlyAccountInputCompoMarginTop3: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  return (
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[Styles.onlyAccountInputStyleMarginTop3, textStyle.medium12]}
      placeholder={text}
      {...props}
    />
  );
};
