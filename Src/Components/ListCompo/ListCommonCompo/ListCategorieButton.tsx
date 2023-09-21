import React from "react";
import { TouchableOpacity, Text } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import ListCategorieButtonStyle from "../../../Styles/ListStyles/ListCategorieButtonStyle";

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
 * 게시판에서 화면을 이동하는 버튼 입니다.
 * 위에서부터 자유, 건의, 질문 버튼입니다.
 * 그 중 클릭하기 전의 버튼입니다.
 */
export const FreBefoClikButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={ListCategorieButtonStyle.ListCategorieBefoButtonStyle}
      onPress={onPress}
    >
      <Text style={[textStyle.semibold08, { color: "#ffffff" }]}>{text} </Text>
      {children}
    </TouchableOpacity>
  );
};

export const SgsBefoClikButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={ListCategorieButtonStyle.ListCategorieBefoButtonStyle}
      onPress={onPress}
    >
      <Text style={[textStyle.semibold08, { color: "#ffffff" }]}>{text} </Text>
      {children}
    </TouchableOpacity>
  );
};

export const QstBefoClikButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={ListCategorieButtonStyle.ListCategorieBefoButtonStyle}
      onPress={onPress}
    >
      <Text style={[textStyle.semibold08, { color: "#ffffff" }]}>{text} </Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 게시판에서 화면을 이동하는 버튼 입니다.
 * 위에서부터 자유, 건의, 질문 버튼입니다.
 * 그 중 클릭한 후의 버튼입니다.
 */

export const FreButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={ListCategorieButtonStyle.ListCategorieButtonStyle}
      onPress={onPress}
    >
      <Text style={[textStyle.semibold08, { color: "#ffffff" }]}>{text} </Text>
      {children}
    </TouchableOpacity>
  );
};

export const SgsButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={ListCategorieButtonStyle.ListCategorieButtonStyle}
      onPress={onPress}
    >
      <Text style={[textStyle.semibold08, { color: "#ffffff" }]}>{text} </Text>
      {children}
    </TouchableOpacity>
  );
};

export const QstButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={ListCategorieButtonStyle.ListCategorieButtonStyle}
      onPress={onPress}
    >
      <Text style={[textStyle.semibold08, { color: "#ffffff" }]}>{text} </Text>
      {children}
    </TouchableOpacity>
  );
};
