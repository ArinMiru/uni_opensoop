import { Feather } from "@expo/vector-icons";
import React from "react";
import { deviceWidth } from "../../Utils/DeviceUtils";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface ProfileProps {
  children?: React.ReactNode;
  onPress?: () => void;
}

/**
 * 일정을 !수정! 하는 아이콘 버튼
 */
export const ScdlEditIcon: React.FC<ProfileProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Feather name="edit" size={deviceWidth * 0.04} color="#4BB781" />
    </TouchableOpacity>
  );
};

/**
 * 일정을 !삭제! 하는 아이콘 버튼
 */
export const SchldDelButton: React.FC<ProfileProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="closecircle" size={deviceWidth * 0.04} color="#F66565" />
      {children}
    </TouchableOpacity>
  );
};
