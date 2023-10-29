import textStyle from "../../Styles/TextStyle";
import React, { useState } from "react";
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
  const [inputValue, setInputValue] = useState<string>(""); // 사용자 입력값을 관리하는 상태

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
      maxLength={maxLength}
      value={inputValue}
      onChangeText={setInputValue}
      {...props}
    />
  );
};
