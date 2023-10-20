import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  MembInfoBoxStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: deviceWidth * 0.8375,
    height: deviceHeight * 0.4612,
  },

  OntherBoxStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: deviceWidth * 0.8375,
    height: deviceHeight * 0.183,
  },
});
