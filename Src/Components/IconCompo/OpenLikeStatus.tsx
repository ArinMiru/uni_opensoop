import React from "react";
import { AntDesign } from "@expo/vector-icons";
import textStyle from "../../Styles/TextStyle";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";
import { Text } from "react-native";
import { View } from "react-native";

interface LikeProps {
  children?: React.ReactNode;
  postLike?: number;
  onPress?: () => void;
}

export const MainOpenLikeStatus: React.FC<LikeProps> = ({
  children,
  postLike,
  onPress,
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <AntDesign name="heart" size={deviceWidth * 0.041} color="#919191" />
      <Text style={[textStyle.semibold12, { color: "#919191" }]}>{"150"}</Text>
    </View>
  );
};
