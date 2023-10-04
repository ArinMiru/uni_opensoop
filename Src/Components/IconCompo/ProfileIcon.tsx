import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";

interface ProfileProps {
  children?: React.ReactNode;
}

export const OpenProfileIcon: React.FC<ProfileProps> = ({ children }) => {
  return (
    <Ionicons
      name="person-circle-outline"
      size={deviceWidth * 0.056}
      color="#424C43"
    ></Ionicons>
  );
};

export const PostProfileIcon: React.FC<ProfileProps> = ({ children }) => {
  return (
    <Ionicons
      name="person-circle-outline"
      size={deviceWidth * 0.075}
      color="#424C43"
    ></Ionicons>
  );
};
