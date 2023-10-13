import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export const GradeDropdownStyle = StyleSheet.create({
  container: {
    width: deviceWidth * 0.8,
  },
  button: {
    marginTop: deviceHeight * 0.02,
    backgroundColor: "#f7f8f9",
    padding: 15,
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.07,
    borderRadius: 11,
    justifyContent: "center",
  },
  buttonText: {
    color: "#333333",
  },
  dropdown: {
    position: "absolute",
    borderRadius: 11,
    top: deviceHeight * 0.09,
    width: deviceWidth * 0.8,
    backgroundColor: "#f7f8f9",
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f7f8f9",
  },
  itemText: {
    color: "#333333",
  },
});

export default GradeDropdownStyle;
