/**
 * AccountButton Components (Figma 참고)
 */

import { Children } from "react";
import AccountButtonStyle from "../../Styles/AccountButtonStyle";
import { TouchableOpacity, Text } from "react-native";
import textStyle from "../../Styles/TextStyle";
import { deviceHeight } from "../../Utils/DeviceUtils";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
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
 * Account에서 쓰이는 버튼(다음, 완료, 로그인하러가기 등..)
 */
export const OnlyAccountButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={AccountButtonStyle.onlyAccountStyle}
      onPress={onPress}
    >
      <Text style={textStyle.semibold13}>{text}</Text>
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
      <Text style={textStyle.bold08}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};
