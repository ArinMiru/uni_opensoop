import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../Utils/DeviceUtils";

export default StyleSheet.create({
  /*-------------------Account Compo Input Style----------------------*/

  /**
   * /Components/AccountCompo/AccountTextInput
   * 중복 확인 Input
   */
  srchDupleInputStyle: {
    width: deviceWidth * 0.575,
    height: deviceHeight * 0.062,
    borderRadius: 11,
    paddingLeft: 10,
    borderColor: "#e8ecf4",
    borderWidth: 1,
  },

  /**
   * /Components/AccountCompo/AccountTextInput
   * Account에서만 쓰이는 Input
   */
  onlyAccountInputStyle: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.062,
    backgroundColor: "#f7f8f9",
    borderRadius: 11,
    paddingLeft: 10,
    borderColor: "#e8ecf4",
    borderWidth: 1,
  },

  /*------------------------------------------------------------*/
});
