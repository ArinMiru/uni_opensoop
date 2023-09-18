import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";

interface CheckProps {
  children?: React.ReactNode;
}

export const GreenCheckIcon: React.FC<CheckProps> = ({ children }) => {
  return (
    <Feather name="check" size={deviceWidth * 0.25} color="#4BB781"></Feather>
  );
};
