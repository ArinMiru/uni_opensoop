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

/**
 * 공지사항에서 사용하는 커뮤니티 이용수칙 버튼 컴포넌트입니다.
 */
export const FreeLawButton: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={OpenButtonStyle.PhotoLawStyle} onPress={onPress}>
      <Text style={[textStyle.semibold08, { color: "#ffffff" }]}>
        커뮤니티 이용규칙 보기
      </Text>
      <Entypo
        style={{
          marginLeft: deviceWidth * 0.02,
          marginRight: deviceWidth * 0.02,
        }}
        name="chevron-right"
        size={deviceWidth * 0.03}
        color="#fff"
      />
      {children}
    </TouchableOpacity>
  );
};

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
            lineHeight: Platform.OS === "android" ? deviceHeight * 0.017 : 0,
            ...Platform.select({
              ios: {
                lineHeight: deviceHeight * 0.018,
              },
            }),
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
            lineHeight: Platform.OS === "android" ? deviceHeight * 0.017 : 0,
            ...Platform.select({
              ios: {
                lineHeight: deviceHeight * 0.018,
              },
            }),
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
