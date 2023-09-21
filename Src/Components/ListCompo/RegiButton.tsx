import React from "react";
import { TouchableOpacity, Text } from "react-native";
import textStyle from "../../Styles/TextStyle";
import ListCommonButtonStyle from "../../Styles/ListStyles/ListCommonButtonStyle";

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
export const RegiButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={ListCommonButtonStyle.RegiButtonStyle}
      onPress={onPress}
    >
      <Text style={[textStyle.semibold13, { color: "#ffffff" }]}>{text} </Text>
      {children}
    </TouchableOpacity>
  );
};
