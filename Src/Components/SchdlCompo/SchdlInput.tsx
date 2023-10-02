import textStyle from "../../Styles/TextStyle";
import React from "react";
import { TextInput, TextInputProps, Platform } from "react-native";
import SchdlInputStyle from "../../Styles/SchdlStyles/SchdlInputStyle";
import { deviceHeight } from "../../Utils/DeviceUtils";

interface inputProps extends TextInputProps {
  text: string; //문자열로 타입 명시
}

export const SchdlVoteRegiTitInput: React.FC<inputProps> = ({
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
        SchdlInputStyle.SchdlVoteRegiTilteInputStyle,
        textStyle.medium14,
        SchdlInputStyle.RegiTitleUderBarStyle,
        {
          lineHeight: Platform.OS === "android" ? deviceHeight * 0.1 : 0,
        },
      ]}
      placeholder={text}
      maxLength={10} // 최대 길이 설정
      {...props}
    />
  );
};
