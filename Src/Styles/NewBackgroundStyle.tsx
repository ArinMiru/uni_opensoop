import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";

export default StyleSheet.create({
  /*------------------------------------------------------------------------*/

  /**
   * 모든 페이지 - 상단 라운드 박스 스타일
   */
  OnlyTopRadiusBackgroundStyle: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: deviceWidth * 1,
    height: deviceHeight * 0.8926,
  },
});
