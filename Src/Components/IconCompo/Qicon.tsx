import React from "react";
import { deviceWidth } from "../../Utils/DeviceUtils";
import { Image } from "react-native";

interface CheckProps {
  children?: React.ReactNode;
}

export const Qicon: React.FC<CheckProps> = ({ children }) => {
  return (
    //    <FontAwesome5 name="quora" size={deviceWidth * 0.043} color="#4BB781" />
    <Image
      style={{ resizeMode: "contain", width: deviceWidth * 0.043 }}
      source={require("../../Assets/Images/Qicon.png")}
    ></Image>
  );
};
