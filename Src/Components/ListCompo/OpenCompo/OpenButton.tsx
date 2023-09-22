import React from "react";
import { TouchableOpacity, Text, View, LogBox } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import OpenButtonStyle from "../../../Styles/ListStyles/OpenButtonStyle";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { OpenPhotoDelIcon } from "../../IconCompo/OpenPhotoIcon";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * 공지사항에서 사용하는 사진 불러오기 버튼 컴포넌트입니다.
 */
export const OpenPhotoButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity style={OpenButtonStyle.PhotoLawStyle} onPress={onPress}>
      <View style={{ flexDirection: "row", marginLeft: deviceWidth * 0.1 }}>
        <Text style={[textStyle.semibold08, { color: "#ffffff" }]}>
          사진 불러오기
        </Text>
        <Entypo
          style={{ marginLeft: deviceWidth * 0.07 }}
          name="chevron-right"
          size={12}
          color="#fff"
        />
      </View>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 공지사항에서 사용하는 좋아요 버튼 컴포넌트입니다.
 */
export const OpenLikeButtton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={OpenButtonStyle.OpenLikeButtonStyle}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <AntDesign
          style={{
            marginRight: deviceWidth * 0.01,
            marginTop: deviceHeight * 0.002,
          }}
          name="heart"
          size={15}
          color="#fff"
        />
        <Text style={[textStyle.semibold12, { color: "#ffffff" }]}>150</Text>
      </View>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 공지사항에서 사용하는 사진 추가 버튼 컴포넌트입니다.
 */
export const OpenPhotoPlusBox: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={OpenButtonStyle.OpenPhotoBoxStyle}
      onPress={onPress}
    >
      <AntDesign name="plus" size={35} color="#4BB781" />
    </TouchableOpacity>
  );
};

/**
 * 공지사항에서 사용하는 사진 삭제 컴포넌트입니다.
 */
export const OpenPhotoDelBox: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <View style={OpenButtonStyle.OpenPhotoBoxStyle}>
      <OpenPhotoDelIcon></OpenPhotoDelIcon>
    </View>
  );
};
