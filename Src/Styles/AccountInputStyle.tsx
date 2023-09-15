import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../Utils/DeviceUtils";
export default StyleSheet.create({
  /*-------------------Account Compo Input Style----------------------*/
  /**
   * /Components/AccountCompo/AccountTextInput
   * 중복 확인 Input
   */
  srchDupleInputStyle: {
    width: deviceWidth * 0.5625,
    height: deviceHeight * 0.07,
    borderRadius: 11,
    paddingLeft: 10,
    borderColor: "#e8ecf4",
    backgroundColor: "#f7f8f9",
    borderWidth: 1,
  },

  /**
   * /Components/AccountCompo/AccountTextInput
   * Account에서만 쓰이는 마진 탑이 0.03 들어간 Input
   */
  onlyAccountInputStyleMarginTop3: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.07,
    marginTop: deviceHeight * 0.03,
    backgroundColor: "#f7f8f9",
    borderRadius: 11,
    paddingLeft: 10,
    borderColor: "#e8ecf4",
    borderWidth: 1,
  },

  /**
   * /Components/AccountCompo/AccountTextInput
   * Account에서만 쓰이는 마진 탑이 0.02 들어간 Input
   */
  onlyAccountInputStyleMarginTop2: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.07,
    marginTop: deviceHeight * 0.02,
    backgroundColor: "#f7f8f9",
    borderRadius: 11,
    paddingLeft: 10,
    borderColor: "#e8ecf4",
    borderWidth: 1,
  },
  /*------------------------------------------------------------*/
});
