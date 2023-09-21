import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /*-------------------Vote Compo Button Style----------------------*/

  /**
   * 게시판에 공통으로 들어가 있는 등록 버튼입니다.(긴버튼)
   */
  RegiButtonStyle: {
    width: deviceWidth * 0.837,
    height: deviceHeight * 0.065,
    backgroundColor: "#4BB781",
    alignItems: "center",
    justifyContent: "center",
  },
});
