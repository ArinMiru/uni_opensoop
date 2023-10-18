import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
}

/**
 * 공지사항 이미지 하단 부 이미지 위치 알려주는 점
 * 해당 공지사항 이미지 갯수에 따라서 점의 갯수가 달라집니다.
 * 해당 이미지에 있을 경우 색이 #333333으로 변하고 아닐 경우 #C5C5C5로 변합니다.
 * @param children
 */
export const OpenImageDotChk: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Entypo
        name="dot-single"
        size={deviceWidth * 0.05}
        color="#333333"
        style={{ marginRight: -deviceWidth * 0.025 }}
      />
      <Entypo
        name="dot-single"
        size={deviceWidth * 0.05}
        color="#C5C5C5"
        style={{ marginRight: -deviceWidth * 0.025 }}
      />
      <Entypo
        name="dot-single"
        size={deviceWidth * 0.05}
        color="#C5C5C5"
        style={{ marginRight: -deviceWidth * 0.025 }}
      />
      <Entypo name="dot-single" size={deviceWidth * 0.05} color="#C5C5C5" />
      {children}
    </View>
  );
};
