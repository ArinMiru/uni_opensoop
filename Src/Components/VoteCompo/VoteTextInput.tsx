/**
 * VoteTextInput Components (Figma 참고)
 */

import Styles from "../../Styles/VoteInputStyle";
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
export const SrchDupleInput: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  return (
    <TextInput
      placeholderTextColor="#8391A1"
      style={[Styles.voteInputStyle, textStyle.medium13]}
      placeholder={text}
      {...props}
    />
  );
};
