import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Image, ViewStyle, View } from "react-native";

interface DrawerIconProps {
  children?: React.ReactNode;
  color?: string;
  style?: ViewStyle;
}

export const FreeIcon: React.FC<DrawerIconProps> = ({
  children,
  color,
  style,
}) => {
  return (
    <Ionicons
      name="chatbubbles-outline"
      size={deviceWidth * 0.065}
      color={color}
      style={style}
    >
      {children}
    </Ionicons>
  );
};

export const SqsIcon: React.FC<DrawerIconProps> = ({
  children,
  color,
  style,
}) => {
  return (
    <Feather
      name="inbox"
      size={deviceWidth * 0.065}
      color={color}
      style={style}
    >
      {children}
    </Feather>
  );
};

export const QstIcon: React.FC<DrawerIconProps> = ({ children, color }) => {
  return (
    <Feather name="search" size={deviceWidth * 0.065} color={color}>
      {children}
    </Feather>
  );
};

export const VoteIcon: React.FC<DrawerIconProps> = ({
  children,
  color,
  style,
}) => {
  return (
    <MaterialCommunityIcons
      name="vote"
      size={deviceWidth * 0.065}
      color={color}
      style={style}
    >
      {children}
    </MaterialCommunityIcons>
  );
};

export const SchdlIcon: React.FC<DrawerIconProps> = ({
  children,
  color,
  style,
}) => {
  return (
    <Ionicons
      name="calendar"
      size={deviceWidth * 0.065}
      color={color}
      style={style}
    >
      {children}
    </Ionicons>
  );
};

export const NoticeIcon: React.FC<DrawerIconProps> = ({
  children,
  color,
  style,
}) => {
  return (
    <AntDesign
      name="notification"
      size={deviceWidth * 0.065}
      color={color}
      style={style}
    >
      {children}
    </AntDesign>
  );
};

export const HomeIcon: React.FC<DrawerIconProps> = ({
  children,
  color,
  style,
}) => {
  return (
    <Feather name="home" size={deviceWidth * 0.065} color={color} style={style}>
      {children}
    </Feather>
  );
};

export const BottomTabLogo: React.FC<DrawerIconProps> = ({
  children,
  color,
}) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingTop: "15%",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          resizeMode: "contain",
          width: "60%",
          height: "60%",
        }}
        source={require("../../Assets/Images/BottomTabLogo.png")}
      ></Image>
    </View>
  );
};
