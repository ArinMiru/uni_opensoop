import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";

export default StyleSheet.create({
  /*------------------------------------------------------------------------*/

  /**
   * 모든 페이지 - 상단 라운드 박스 스타일
   */
  OnlyTopRadiusBackgroundStyle: {
    backgroundColor: "#FFFFFF",
    width: deviceWidth * 1,
    height: deviceHeight * 0.921,
  },

  /**
   * 모든 페이지 - 상단 라운드 박스 스타일
   */
  BottomTabBackgroundStyle: {
    backgroundColor: "#FFFFFF",
    width: deviceWidth * 1,
    height: deviceHeight * 0.79,
  },
});
