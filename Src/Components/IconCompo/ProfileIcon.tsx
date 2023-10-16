import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";
import { TouchableOpacity } from "react-native";

interface ProfileProps {
  onPress?: () => void;
}

export const OpenProfileIcon: React.FC<ProfileProps> = ({}) => {
  return (
    <Ionicons
      name="person-circle-outline"
      size={deviceWidth * 0.056}
      color="#424C43"
    ></Ionicons>
  );
};

export const PostProfileIcon: React.FC<ProfileProps> = ({}) => {
  return (
    <Ionicons
      name="person-circle-outline"
      size={deviceWidth * 0.075}
      color="#424C43"
    ></Ionicons>
  );
};

export const ProfileIcon: React.FC<ProfileProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name="ios-person-circle"
        size={deviceWidth * 0.0468}
        color="#28303F"
      ></Ionicons>
    </TouchableOpacity>
  );
};
