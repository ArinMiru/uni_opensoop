import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

interface DrawerIconProps {
  children?: React.ReactNode;
}

export const FreeIcon: React.FC<DrawerIconProps> = ({ children }) => {
  return (
    <Ionicons
      name="chatbubbles-outline"
      size={deviceWidth * 0.065}
      color="#ffffff"
      style={{ marginRight: "5%" }}
    >
      {children}
    </Ionicons>
  );
};

export const SqsIcon: React.FC<DrawerIconProps> = ({ children }) => {
  return (
    <Feather
      name="inbox"
      size={deviceWidth * 0.065}
      color="#ffffff"
      style={{ marginRight: "5%" }}
    >
      {children}
    </Feather>
  );
};

export const QstIcon: React.FC<DrawerIconProps> = ({ children }) => {
  return (
    <Feather
      name="search"
      size={deviceWidth * 0.065}
      color="#ffffff"
      style={{ marginRight: "5%" }}
    >
      {children}
    </Feather>
  );
};

export const VoteIcon: React.FC<DrawerIconProps> = ({ children }) => {
  return (
    <MaterialCommunityIcons
      name="vote"
      size={deviceWidth * 0.065}
      color="#ffffff"
      style={{ marginRight: "5%" }}
    >
      {children}
    </MaterialCommunityIcons>
  );
};

export const SchdlIcon: React.FC<DrawerIconProps> = ({ children }) => {
  return (
    <Ionicons
      name="calendar"
      size={deviceWidth * 0.065}
      color="#ffffff"
      style={{ marginRight: "5%" }}
    >
      {children}
    </Ionicons>
  );
};

export const NoticeIcon: React.FC<DrawerIconProps> = ({ children }) => {
  return (
    <AntDesign
      name="notification"
      size={deviceWidth * 0.065}
      color="#4BB781"
      style={{ marginRight: "5%" }}
    >
      {children}
    </AntDesign>
  );
};
