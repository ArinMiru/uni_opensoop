import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";

export default StyleSheet.create({
  longButtonStyle: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.062,
    backgroundColor: "#4BB781",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  shortButtonStyle: {
    width: deviceWidth * 0.2,
    height: deviceHeight * 0.062,
    backgroundColor: "#4BB781",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  regiStyle : {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.062,
    backgroundColor: "#E4F1E4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    marginTop : 25
  }
});
