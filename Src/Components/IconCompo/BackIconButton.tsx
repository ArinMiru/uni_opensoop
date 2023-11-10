import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";

/* 2023.09.14 생성 (@김도원) */

//  프로퍼티 타입 정의
interface ButtonProps {
  children?: React.ReactNode;
  text?: String;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * chevron-back 아이콘에 해당하는 버튼 영역
 * Black Back Button
 */
export const BlackBackIconButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ width: deviceWidth * 0.2, height: deviceHeight * 0.05 }}
      onPress={onPress}
    >
      <Ionicons
        style={{
          marginLeft: deviceWidth * 0.06,
          marginTop: deviceHeight * 0.0099,
        }}
        name="chevron-back"
        size={deviceWidth * 0.06}
        color="black"
      />
      {children}
    </TouchableOpacity>
  );
};

/**
 * chevron-back 아이콘에 해당하는 버튼 영역
 * Green Back button
 */
export const GreenBackIconButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ width: deviceWidth * 0.2, height: deviceHeight * 0.05 }}
      onPress={onPress}
    >
      <Ionicons
        style={{
          marginLeft: deviceWidth * 0.06,
          marginTop: deviceHeight * 0.0099,
        }}
        name="chevron-back"
        size={deviceWidth * 0.06}
        color="#4BB781"
      />
      {children}
    </TouchableOpacity>
  );
};

/**
 * chevron-back 아이콘에 해당하는 버튼 영역
 * White Back button
 */
export const WhiteBackIconButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ width: deviceWidth * 0.2, height: deviceHeight * 0.05 }}
      onPress={onPress}
    >
      <Ionicons
        style={{
          marginLeft: deviceWidth * 0.06,
          marginTop: deviceHeight * 0.0099,
        }}
        name="chevron-back"
        size={deviceWidth * 0.06}
        color="#FFFFFF"
      />
      {children}
    </TouchableOpacity>
  );
};

/**
 * chevron-back 아이콘에 해당하는 버튼 영역
 * White Back button
 */
export const GrayBackIconButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginLeft: deviceWidth * 0.06,
        marginTop: deviceHeight * 0.002,
        width: deviceWidth * 0.075,
        height: deviceWidth * 0.075,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons
        name="chevron-back"
        size={deviceWidth * 0.055}
        color="#37424D"
      />
      {children}
    </TouchableOpacity>
  );
};
