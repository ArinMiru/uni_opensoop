import ListCommonInputStyle from "../../../Styles/ListStyles/ListCommonInputStyle";
import textStyle from "../../../Styles/TextStyle";
import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface inputProps extends TextInputProps {
  text: string; //문자열로 타입 명시
}

export const OpenFreSgsTitInputBox: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  // text 속성을 이용하여 최대 길이를 계산
  const maxLength = text ? text.length : 0;

  return (
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[
        ListCommonInputStyle.OpenFreSgsTitInputBoxStyle,
        textStyle.medium14,
      ]}
      placeholder={text}
      maxLength={10} // 최대 길이 설정
      {...props}
    />
  );
};

export const OpenFreSgsContInputBox: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  // text 속성을 이용하여 최대 길이를 계산

  return (
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[
        ListCommonInputStyle.OpenFreSgsContInputBoxStyle,
        textStyle.medium12,
      ]}
      textAlignVertical="top"
      multiline={true}
      placeholder={text}
      maxLength={250}
      maxFontSizeMultiplier={10} // 최대 길이 설정
      {...props}
    />
  );
};
