import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";

interface CheckProps {
  children?: React.ReactNode;
}

export const Qicon: React.FC<CheckProps> = ({ children }) => {
  return (
    <FontAwesome5 name="quora" size={deviceWidth * 0.043} color="#4BB781" />
  );
};
