import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";

interface ProfileProps {
  children?: React.ReactNode;
}

export const SgsListLockIcon: React.FC<ProfileProps> = ({ children }) => {
  return (
    <Fontisto
      name="locked"
      size={deviceWidth * 0.031}
      color="#4BB781"
    ></Fontisto>
  );
};
