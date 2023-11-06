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
 * X 표시가 되어있는 버튼 아이콘 입니다.
 */
export const OpenPhotoDelIcon: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
       marginLeft: deviceWidth * 0.155,
       borderRadius: 100,
       alignItems: "center",
       justifyContent: "center",
       position: "absolute",
      }}
      onPress={onPress}
    >
      <AntDesign
        name="closecircle"
        size={deviceWidth * 0.055}
        color="rgba(0, 0, 0, 0.3)"
      />
      {children}
    </TouchableOpacity>
  );
};
