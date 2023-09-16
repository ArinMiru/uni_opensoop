import React from "react";
import { TouchableOpacity, Text, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  deviceHeight,
  deviceWidth,
  currentPlatform,
} from "../../Utils/DeviceUtils";

/**
 * 공지사항, 투표 -> Topbar 에 해당하는 Plus아이콘 & 공지사항 이미지 업로드에 해당하는 Plus 아이콘
 * 이 존재하는 코드 임미다.
 */

interface ButtonProps {
  children?: React.ReactNode;
  text?: String;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * Top에 있는 글을 업로드하는 Plus아이콘 임미다. (공지사항, 투표에 해당)
 */
export const TopbarPlusIcon: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ width: deviceWidth * 0.2, height: deviceHeight * 0.05 }}
      onPress={onPress}
    >
      <Feather
        style={{
          marginLeft: deviceWidth * 0.06,
          marginTop: deviceHeight * 0.0099,
        }}
        name="plus-square"
        size={18}
        color="#ffffff"
      />
      {children}
    </TouchableOpacity>
  );
};
