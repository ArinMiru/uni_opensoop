/**
 * AccountTextInput Components (Figma 참고)
 */

import Styles from "../../Styles/AccountInputStyle";
import textStyle from "../../Styles/TextStyle";
import React from "react";
import { TextInput, TextInputProps } from "react-native";

//프로퍼티 타입 정의
interface inputProps extends TextInputProps {
  text: string; //문자열로 타입 명시
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
      style={[Styles.srchDupleInputStyle, textStyle.medium14]}
      placeholder={text}
      {...props}
    />
  );
};

/* Account에서만 쓰이는 Input
 * Figma 필수 참고
 */
export const OnlyAccountInput: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  return (
    <TextInput
      placeholderTextColor="#8391A1"
      style={[Styles.onlyAccountInputStyle, textStyle.medium14]}
      placeholder={text}
      {...props}
    />
  );
};
