import { StyleSheet, Platform } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /** Toast Message 박스 스타일 */

  ToastMessageBoxStyle: {
    width: deviceWidth * 0.28,
    height: deviceHeight * 0.043,
    backgroundColor: "#A1A1A1",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
  },
});
