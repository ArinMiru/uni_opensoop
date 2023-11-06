/**
 * VoteTextInput Components (Figma 참고)
 */

import Styles from "../../Styles/VoteStyles/VoteInputStyle";
import textStyle from "../../Styles/TextStyle";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
import VoteInputStyle from "../../Styles/VoteStyles/VoteInputStyle";

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
  return (
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[Styles.VoteInputStyle, textStyle.medium13]}
      placeholder={text}
      {...props}
    />
  );
};

export const VoteTitInput: React.FC<inputProps> = ({ text, ...props }) => {
  // text 속성을 이용하여 최대 길이를 계산
  const maxLength = text ? text.length : 0;

  return (
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[VoteInputStyle.VoteTitInputBoxStyle, textStyle.medium10]}
      placeholder={text}
      maxLength={10} // 최대 길이 설정
      {...props}
    />
  );
};
