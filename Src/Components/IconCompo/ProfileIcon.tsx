import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";
import { TouchableOpacity, View } from "react-native";

interface ProfileProps {
  onPress?: () => void;
}

export const OpenProfileIcon: React.FC<ProfileProps> = ({}) => {
  return (
    <Ionicons
      name="person-circle-outline"
      size={deviceWidth * 0.062}
      color="#424C43"
    ></Ionicons>
  );
};

export const PostProfileIcon: React.FC<ProfileProps> = ({}) => {
  return (
    <Ionicons
      name="person-circle-outline"
      size={deviceWidth * 0.08}
      color="#424C43"
    ></Ionicons>
  );
};

export const ProfileIcon: React.FC<ProfileProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        marginRight: deviceWidth * 0.05,
        width: deviceWidth * 0.082,
        height: deviceWidth * 0.082,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Ionicons
        name="ios-person-circle"
        size={deviceWidth * 0.072}
        color="#666970"
      ></Ionicons>
    </TouchableOpacity>
  );
};

export const FreSgsProfileIcon: React.FC<ProfileProps> = ({ onPress }) => {
  return (
    <View style={{ marginRight: deviceWidth * 0.009 }}>
      <Ionicons
        name="ios-person-circle"
        size={deviceWidth * 0.08}
        color="#666970"
      ></Ionicons>
    </View>
  );
};

export const FreSgsAnsProfileIcon: React.FC<ProfileProps> = ({ onPress }) => {
  return (
    <View>
      <Ionicons
        name="ios-person-circle"
        size={deviceWidth * 0.078}
        color="#666970"
      ></Ionicons>
    </View>
  );
};
