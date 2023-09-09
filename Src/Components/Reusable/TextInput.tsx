import Styles from "../../Styles/TextInputStyle";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";

//프로퍼티 타입 정의
interface inputProps extends TextInputProps {
  text: string; //문자열로 타입 명시
}

export const LongInput: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  // 버튼 컴포넌트의 타입을 정확하게 명시

  return (
    <TextInput
      placeholderTextColor="#8391A1"
      style={Styles.longInput}
      placeholder={text}
      {...props}
    />
  );
};

export const LongInputMargin: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  return (
    <TextInput
      placeholderTextColor="#8391A1"
      style={[
        Styles.longInput,
        { marginBottom: deviceHeight * 0.035 },
        { marginTop: deviceHeight * 0.035 },
      ]}
      placeholder={text}
      {...props}
    />
  );
};

export const ShortInput: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  // 버튼 컴포넌트의 타입을 정확하게 명시
  return (
    <TextInput
      placeholderTextColor="#8391A1"
      style={[Styles.shortInput, { marginRight: deviceWidth * 0.02 }]}
      placeholder={text}
      {...props}
    />
  );
};
