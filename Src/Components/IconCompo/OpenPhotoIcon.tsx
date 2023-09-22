import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";

interface ButtonProps {
  children?: React.ReactNode;
  text?: String;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * 공지사항에서 사용되는 사진 삭제 버튼 아이콘 입니다.
 */
export const OpenPhotoDelIcon: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        marginBottom: deviceHeight * 0.09,
        marginLeft: deviceWidth * 0.17,
        width: deviceWidth * 0.08,
        height: deviceHeight * 0.04,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <AntDesign name="closecircle" size={deviceWidth * 0.06} color="#4BB781" />
      {children}
    </TouchableOpacity>
  );
};
