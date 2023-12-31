import React from "react";
import { TouchableOpacity, Text, View, Platform } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import OpenButtonStyle from "../../../Styles/ListStyles/OpenButtonStyle";
import { Entypo } from "@expo/vector-icons";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import FreButtonStyles from "../../../Styles/ListStyles/FreStyles/FreButtonStyles";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/*
 * 게시판의 메인화면의 게시글의 백그라운드 버튼화면입니다.
 **/
export const FreeListButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={FreButtonStyles.FreeListButtonStyle}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

/*
 * 게시판의 게시글 수정 버튼임미다.
 **/
export const FreEditButton: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={FreButtonStyles.FreEditButtonStyle}
      onPress={onPress}
    >
      <Text
        style={[
          textStyle.medium09,
          {
            lineHeight: deviceHeight * 0.018,
            color: "#4BB781",
          },
        ]}
      >
        수정
      </Text>
      {children}
    </TouchableOpacity>
  );
};

/*
 * 게시판의 게시글 삭제 버튼임미다.
 **/
export const FreDelButton: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={FreButtonStyles.FreDelButtonStyle}
      onPress={onPress}
    >
      <Text
        style={[
          textStyle.medium09,
          {
            lineHeight: deviceHeight * 0.017,
            color: "#ffffff",
          },
        ]}
      >
        삭제
      </Text>
      {children}
    </TouchableOpacity>
  );
};

export const FreeListLawButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity style={OpenButtonStyle.LawStyle} onPress={onPress}>
      <View>
        <Text
          style={[
            textStyle.semibold08,
            { color: "#ffffff" },
            { marginLeft: deviceWidth * 0.073 },
          ]}
        >
          커뮤니티 이용규칙
        </Text>
      </View>
      <View style={{ marginRight: deviceWidth * 0.03 }}>
        <Entypo name="chevron-right" size={deviceWidth * 0.03} color="#fff" />
        {children}
      </View>
    </TouchableOpacity>
  );
};
