/**
 * AccountTextInput Components (Figma 참고)
 */
import Styles from "../../Styles/AccountStyles/AccountInputStyle";
import textStyle from "../../Styles/TextStyle";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
//프로퍼티 타입 정의
interface inputProps extends TextInputProps {
  children?: React.ReactNode;
  text?: React.ReactNode; // 타입을 React.ReactNode로 변경
}

/* 중복 확인 Input
 * Figma 참고
 */
export const SrchDupleInput: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  const placeholderText = typeof text === "string" ? text : undefined;
  return (
    <TextInput
      placeholderTextColor="#8391A1"
      style={[Styles.srchDupleInputStyle, textStyle.medium12]}
      placeholder={placeholderText}
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
  const placeholderText = typeof text === "string" ? text : undefined;

  return (
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[Styles.onlyAccountInputStyleMarginTop3, textStyle.medium12]}
      placeholder={placeholderText}
      {...props}
    />
  );
};
