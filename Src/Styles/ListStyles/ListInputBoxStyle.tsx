import { StyleSheet, Platform } from "react-native";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  FreQstOpenTitInputBoxStyle: {
    width: deviceWidth * 0.843,
    height: deviceHeight * 0.091,
    alignItems: "center",
    justifyContent: "center",
  },

  FreQstOpenContInputBoxStyle: {
    width: deviceWidth * 0.843,
    minHeight: deviceHeight * 0.176,
    alignItems: "center",
    justifyContent: "center",
  },
});
