import React from "react";
import { AntDesign } from "@expo/vector-icons";
import textStyle from "../../Styles/TextStyle";
import { deviceWidth } from "../../Utils/DeviceUtils";
import { View, Text } from "react-native";

interface LikeProps {
  children?: React.ReactNode;
  openpostLike?: number;
  onPress?: () => void;
}

export const MainOpenLikeStatus: React.FC<LikeProps> = ({
  openpostLike,
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <AntDesign name="heart" size={deviceWidth * 0.041} color="#919191" />
      <Text
        style={[
          textStyle.semibold12,
          { color: "#919191" },
          { lineHeight: deviceWidth * 0.05 },
          { textAlign: "center" },
          { marginLeft: deviceWidth * 0.01 },
        ]}
      >
        {"LIKE_CNT"}
        {openpostLike}
      </Text>
    </View>
  );
};
