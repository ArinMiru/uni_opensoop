import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /**
   * DrawerScreen 에서 사용하는 클릭했을때 버튼이 노출되는 스타일입니다.
   */
  DrawerMenuButton: {
    width: deviceWidth * 0.543,
    height: deviceHeight * 0.0669,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },

  /**
   * DrawerScreen 에서 사용하는 구분선입니다.
   */

  DrawerMenuHorizonLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
    width: deviceWidth * 0.3098,
  },
});
