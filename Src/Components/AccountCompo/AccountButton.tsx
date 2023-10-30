/**
 * AccountButton Components (Figma 참고)
 */
import React from "react";
import AccountButtonStyle from "../../Styles/AccountStyles/AccountButtonStyle";
import { TouchableOpacity, Text } from "react-native";
import textStyle from "../../Styles/TextStyle";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
  disable?: boolean;
}
/**
 * @param param0
 * @returns
 */
/**
 * 중복 확인 버튼
 */
export const SrchDupleButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={AccountButtonStyle.srchDupleButtonStyle}
      onPress={onPress}
    >
      <Text style={[textStyle.semibold13, { color: "#ffffff" }]}>{text} </Text>
      {children}
    </TouchableOpacity>
  );
};
/**
 * Account에서 쓰이는 버튼(로그인, 다음, 완료, 로그인하러가기 등..)
 */
export const OnlyAccountButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
  disable,
}) => {
  const buttonStyle = disable ? { opacity: 0.5 } : {};
  return (
    <TouchableOpacity
      style={[AccountButtonStyle.onlyAccountStyle, buttonStyle]}
      onPress={onPress}
      disabled={disable}
    >
      <Text style={[textStyle.semibold13, { color: "#ffffff" }]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 회원가입 버튼
 */
export const OnlyAccountRegiButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={AccountButtonStyle.onlyAccountRegiStyle}
      onPress={onPress}
    >
      <Text style={[textStyle.semibold13, { color: "#4BB781" }]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 아이디, 비밀번호 찾기 버튼
 */
export const IdPassFindButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={AccountButtonStyle.idPassFindStyle}
      onPress={onPress}
    >
      <Text style={[textStyle.bold10, { color: "#4BB781" }]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};
