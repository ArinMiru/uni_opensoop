/**
 * VoteTextInput Components (Figma 참고)
 */

import Styles from "../../Styles/VoteStyles/VoteInputStyle";
import textStyle from "../../Styles/TextStyle";
import React from "react";
import { TextInput, TextInputProps } from "react-native";

//프로퍼티 타입 정의
interface inputProps extends TextInputProps {
  text: string; //문자열로 타입 명시
}

/**
 * 투표 선택지 만드는 Input
 */
export const VoteInput: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  // text 속성을 이용하여 최대 길이를 계산
  const maxLength = text ? text.length : 0;
  return (
    <TextInput
      placeholderTextColor="#8391A1"
      style={[Styles.VoteInputStyle, textStyle.medium13]}
      placeholder={text}
      {...props}
    />
  );
};
