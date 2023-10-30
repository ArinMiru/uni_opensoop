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
      <AntDesign name="heart" size={deviceWidth * 0.035} color="#919191" />
      <Text
        style={[
          textStyle.semibold10,
          { color: "#919191" },
          { marginLeft: deviceWidth * 0.01 },
        ]}
      >
        {openpostLike}
      </Text>
    </View>
  );
};
