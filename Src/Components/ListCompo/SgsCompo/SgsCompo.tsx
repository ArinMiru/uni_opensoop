import React from "react";
import { TouchableOpacity, Text, View, Platform } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import OpenButtonStyle from "../../../Styles/ListStyles/OpenButtonStyle";
import { Entypo } from "@expo/vector-icons";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/*
 * 게시판의 메인화면의 게시글의 백그라운드 버튼화면입니다.
 **/
export const SgsListButton: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={SgsButtonStyles.SgsListButtonStyle}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

/*
 * 건의게시판의 메인화면의 게시글 아래 시간 표시 박스입니다.
 **/
export const SgsTimeBox: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <View style={SgsButtonStyles.SgsListButtonEndBoxStyle}>
      {children},
      <Text style={[textStyle.regular07, { color: "#424C43" }]}>1초전</Text>
    </View>
  );
};

/*
 * 건의게시판의 게시글 삭제 버튼임미다.
 **/
export const SgsDelButton: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={SgsButtonStyles.SgsDelButtonStyle}
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
