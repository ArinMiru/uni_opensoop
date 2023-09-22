import React from "react";
import { TouchableOpacity, Text, View, LogBox } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import OpenButtonStyle from "../../../Styles/ListStyles/OpenButtonStyle";
import { Entypo } from "@expo/vector-icons";
import { deviceWidth } from "../../../Utils/DeviceUtils";
interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * 공지사항에서 사용하는 사진 불러오기 버튼 컴포넌트입니다.
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
