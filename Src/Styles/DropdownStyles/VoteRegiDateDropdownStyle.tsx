import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export const VoteRegiDateDropdownStyle = StyleSheet.create({
  container: {
    width: deviceWidth * 0.8,
  },
  button: {
    backgroundColor: "#f7f8f9",
    padding: 15,
    width: deviceWidth * 0.8,
    height: "100%",
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

export default VoteRegiDateDropdownStyle;
