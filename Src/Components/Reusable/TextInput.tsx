import Styles from "../../Styles/TextInputStyle";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";

//프로퍼티 타입 정의
interface inputProps extends TextInputProps {
  text: string; //문자열로 타입 명시
}

/**
 * 피그마 기준 가장 기본 긴 인풋
 * @param LongInput
 * @returns 
 */
export const LongInput: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {

  return (
    <TextInput
      placeholderTextColor="#8391A1"
      style={Styles.longInput}
      placeholder={text}
      {...props}
    />
  );
};

/**
 * 로그인 스크린 상단 아이디 입력 텍스트인풋 
 * @param LoginInputMargin
 * @returns 
 */
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

/**
 * 피그마 기준 가로 길이 짧은 인풋
 * @param ShortInput
 * @returns 
 */
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
