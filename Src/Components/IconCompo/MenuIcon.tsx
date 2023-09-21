import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";

//프로퍼티 타입 정의
interface inputProps {
  children?: React.ReactNode; //리액트로 타입 명시
  onPress?: () => void;
}

/**
 * MenuIcon
 * MenuIcon 컴포넌트는 메뉴 아이콘을 렌더링하는 컴포넌트입니다.
 */

export const MenuIcon: React.FC<inputProps> = ({ children, onPress }) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: deviceWidth * 0.1,
        marginLeft: deviceWidth * 0.06,
      }}
      onPress={onPress}
    >
      <Feather name="menu" size={deviceWidth * 0.08} color="#ffffff" />
      {children}
    </TouchableOpacity>
  );
};
