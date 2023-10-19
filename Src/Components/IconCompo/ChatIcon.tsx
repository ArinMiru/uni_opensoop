import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";

interface CheckProps {
  children?: React.ReactNode;
}

export const ChatIcon: React.FC<CheckProps> = ({ children }) => {
  return (
    <Ionicons
      name="chatbox-ellipses-outline"
      size={deviceWidth * 0.037}
      color="#4BB781"
      style={{ transform: [{ scaleX: -1 }] }} // 좌우로 반전시키기
    />
  );
};
