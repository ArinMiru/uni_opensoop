import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /**
   * DrawerScreen 에서 사용하는 클릭했을때 버튼이 노출되는 스타일입니다.
   */
  DrawerMenuButton: {
    width: deviceWidth * 0.543,
    height: deviceHeight * 0.0669,
    backgroundColor: "#4BB781",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    flexDirection: "row",
  },

  DrawerMenuclkButton: {
    width: deviceWidth * 0.543,
    height: deviceHeight * 0.0669,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    flexDirection: "row",
  },

  /**
   * DrawerScreen 에서 사용하는 구분선입니다.
   */

  DrawerMenuHorizonLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
    width: deviceWidth * 0.55,
    alignSelf: "center",
  },
});
