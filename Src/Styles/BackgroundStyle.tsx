import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";

export default StyleSheet.create({
  loginBackground: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: deviceWidth * 1,
    height: deviceHeight * 1,
    alignItems: "center",
  },
});
