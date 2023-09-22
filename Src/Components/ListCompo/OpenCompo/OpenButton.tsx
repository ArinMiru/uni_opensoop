import React from "react";
import { TouchableOpacity, Text, View, LogBox } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import OpenButtonStyle from "../../../Styles/ListStyles/OpenButtonStyle";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { OpenPhotoDelIcon } from "../../IconCompo/OpenPhotoIcon";
import { SafeAreaView } from "react-native-safe-area-context";
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
      <Text style={[textStyle.semibold08, { color: "#ffffff" }]}>
        사진 불러오기
      </Text>
      <Entypo
        style={{ marginLeft: deviceWidth * 0.04 }}
        name="chevron-right"
        size={12}
        color="#fff"
      />
      {children}
    </TouchableOpacity>
  );
};

/**
 * 공지사항에서 사용하는 좋아요 버튼 컴포넌트입니다.
 * <Text> 태그 안에 들어가는 숫자는 추후에 서버에서 받아와야 합니다.
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
      <AntDesign name="heart" size={deviceWidth * 0.041} color="#fff" />
      <Text
        style={[
          textStyle.semibold12,
          { color: "#ffffff" },
          { marginLeft: deviceWidth * 0.009 },
          { lineHeight: deviceHeight * 0.022 },
        ]}
      >
        150
      </Text>
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
      <AntDesign name="plus" size={deviceWidth * 0.09} color="#4BB781" />
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
    <View style={[OpenButtonStyle.OpenPhotoBoxStyle]}>
      <OpenPhotoDelIcon></OpenPhotoDelIcon>
    </View>
  );
};
