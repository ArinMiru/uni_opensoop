import ListCommonInputStyle from "./ListCommonInputStyle";
import textStyle from "../../Styles/TextStyle";
import React from "react";
import { TextInput, TextInputProps } from "react-native";

//프로퍼티 타입 정의
interface inputProps extends TextInputProps {
  text: string; //문자열로 타입 명시
}

/**
 * 전반적인 게시글 제목을 입력하는 인풋입니다.
 */
export const OpenFreSgsTitInputBox: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  return (
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[
        ListCommonInputStyle.OpenFreSgsTitInputBoxStyle,
        textStyle.medium14,
      ]}
      placeholder={text}
      {...props}
    />
  );
};

export const OpenFreSgsContInputBox: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  return (
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[
        ListCommonInputStyle.OpenFreSgsContInputBoxStyle,
        textStyle.medium12,
      ]}
      placeholder={text}
      {...props}
    />
  );
};
