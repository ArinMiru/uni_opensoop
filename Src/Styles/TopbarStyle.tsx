import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";

export default StyleSheet.create({
  basicTopbar: {
    width: deviceWidth * 1,
    height: deviceHeight * 0.08,
    backgroundColor: "#4bb781",
    alignItems: "center",
    justifyContent: "center",
  },
});