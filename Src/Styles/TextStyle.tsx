import { StyleSheet } from "react-native";
import { deviceHeight,deviceWidth,currentPlatform } from "../Utils/DeviceUtils";

export default StyleSheet.create({
  textbase: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 15,
  },

  regibuttontext: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    color: "#4BB781",
    fontSize: 15,
  },

  loginbuttontext: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    color: "#4BB781",
    fontSize: 11,
  },
  commonScreenbigText: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    color: "#4bb781",
    fontSize: 35,
    marginLeft: deviceWidth * 0.1,
  },
  commonScreensmallText: {
    fontFamily: "NotoSans",
    color: "#424c43",
    fontSize: 30,
    marginLeft: deviceWidth * 0.01,
    marginTop: currentPlatform === "ios" ? 0 : deviceHeight * 0.165,
  },
  commonButtonText: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 18,
  },
});