import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../Utils/DeviceUtils";

export default StyleSheet.create({
  longInput: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.062,
    backgroundColor: "#f7f8f9",
    borderRadius: 11,
    paddingLeft: 10,
    borderColor: "#e8ecf4",
    borderWidth: 1,
  },
  shortInput: {
    width: deviceWidth * 0.575,
    height: deviceHeight * 0.062,
    backgroundColor: "#f7f8f9",
    borderRadius: 11,
    paddingLeft: 10,
    borderColor: "#e8ecf4",
    borderWidth: 1,
  },
  commonInput: {
    marginLeft: deviceWidth * 0.1,
    marginTop: deviceHeight * 0.04,
    backgroundColor: "#f7f8f9",
    borderRadius: 11,
    paddingLeft: 10,
    borderColor: "#e8ecf4",
    borderWidth: 1,
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.06,
  },
});