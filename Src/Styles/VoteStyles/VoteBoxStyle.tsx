import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /*-------------------Vote Box Style----------------------*/

  /**
   * 투표 등록 페이지 마감기한 설정 박스
   */
  voteExprBox: {
    width: deviceWidth * 0.25,
    height: deviceHeight * 0.026,
    backgroundColor: "#E3F9E3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
});
