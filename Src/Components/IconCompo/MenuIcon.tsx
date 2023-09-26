import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";
import { DrawerActions } from "@react-navigation/native"; // React Navigation v6의 경우

// 프로퍼티 타입 정의
interface MenuIconProps {
  onPress?: () => void;
}

/**
 * MenuIcon
 * MenuIcon 컴포넌트는 메뉴 아이콘을 렌더링하는 컴포넌트입니다.
 */
export const MenuIcon: React.FC<MenuIconProps> = ({ onPress }) => {
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
    </TouchableOpacity>
  );
};
