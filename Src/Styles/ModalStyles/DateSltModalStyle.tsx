import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  dateArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    width: deviceWidth * 0.887,
    height: deviceHeight * 0.059,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
  },
});
