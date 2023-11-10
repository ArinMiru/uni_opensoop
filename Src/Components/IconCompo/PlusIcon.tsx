import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";

/**
 * 공지사항, 투표 -> TopbarStyle 에 해당하는 Plus아이콘 & 공지사항 이미지 업로드에 해당하는 Plus 아이콘
 * 이 존재하는 코드 임미다.
 */

interface ButtonProps {
  children?: React.ReactNode;
  text?: String;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * TopbarStylePlusIcon
 * Top에 있는 글을 업로드하는 Plus아이콘 입니다. (공지사항, 투표에 해당)
 */
export const TopbarStylePlusIcon: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        marginRight: deviceWidth * 0.05,
        marginTop: deviceWidth * 0.01,
        width: deviceWidth * 0.078,
        height: deviceWidth * 0.078,
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <Feather name="plus-circle" size={deviceWidth * 0.058} color="#424C43" />
    </TouchableOpacity>
  );
};
