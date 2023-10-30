import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import OpenButtonStyle from "../../../Styles/ListStyles/OpenButtonStyle";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { OpenPhotoDelIcon } from "../../IconCompo/OpenPhotoIcon";
import { MaterialIcons } from "@expo/vector-icons";
interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  postLike?: number;
  onPress?: () => void;
  onPressDelPhoto?: () => void;
  onPressAddPhoto?: () => void;
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
        style={{
          marginLeft: deviceWidth * 0.04,
          marginRight: deviceWidth * 0.06,
        }}
        name="chevron-right"
        size={deviceWidth * 0.03}
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
  postLike,
  onPress,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(postLike || 0);

  const handlePress = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
    if (onPress) onPress();
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <FontAwesome
          name={isLiked ? "heart" : "heart-o"}
          size={deviceWidth * 0.057}
          color="#4BB781"
        />
      </TouchableOpacity>
      <Text
        style={[
          textStyle.bold10,
          { color: "#222222" },
          { marginLeft: deviceWidth * 0.001 },
          { marginTop: deviceHeight * 0.007 },
          { lineHeight: deviceHeight * 0.022 },
        ]}
      >
        {"좋아요"} {likeCount} {"개"}
      </Text>
    </View>
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
      style={[OpenButtonStyle.OpenPhotoBoxStyle]}
      onPress={onPress}
    >
      <MaterialIcons
        name="add-photo-alternate"
        size={deviceWidth * 0.085}
        color="rgba(75, 183, 129, 0.5)"
      />
    </TouchableOpacity>
  );
};

/**
 * 공지사항에서 사용하는 사진 삭제 컴포넌트입니다.
 * @ts7752 요청 사항 수정 완료 => 수행 @ArinMiru / 2023-10-24 02:12
 * @ts7752 확인 부탁드립니다.
 */
export const OpenPhotoDelBox: React.FC<ButtonProps> = ({
  onPressDelPhoto,
  onPressAddPhoto,
}) => {
  return (
    <TouchableOpacity onPress={onPressAddPhoto}>
      <View
        style={[
          OpenButtonStyle.OpenPhotoBoxStyle,
          { marginRight: deviceWidth * 0.02 },
        ]}
      >
        <OpenPhotoDelIcon onPress={onPressDelPhoto}></OpenPhotoDelIcon>
      </View>
    </TouchableOpacity>
  );
};

/**
 *
 */
export const OpenPhotoComboBox: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  const [photoList, setPhotoList] = React.useState([0]);

  const addPhotoBox = () => {
    if (photoList.length < 4) setPhotoList([...photoList, photoList.length]);
  };

  const removePhotoBox = (index?: any) => {
    setPhotoList(photoList.filter((_, i) => i !== index));
  };
  return (
    <View
      style={{
        flex: 2,
        width: deviceWidth * 0.84,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {photoList.map((_, index) => (
        <OpenPhotoDelBox
          key={index}
          onPressAddPhoto={onPress}
          onPressDelPhoto={() => removePhotoBox(index)}
        />
      ))}
      {photoList.length < 4 && <OpenPhotoPlusBox onPress={addPhotoBox} />}
    </View>
  );
};
