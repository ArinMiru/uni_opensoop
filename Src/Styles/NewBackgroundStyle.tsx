import { StyleSheet, Platform } from "react-native";
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
    height: Platform.OS === "ios" ? "90.4%" : "91%", // 아이폰의 경우 91%, 안드로이드의 경우 89%로 설정
  },
});
