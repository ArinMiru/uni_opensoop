import { StyleSheet, Platform } from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";

export default StyleSheet.create({
  /**
   * 공지사항 게시물 박스입니다.
   */
  NoticePostBoxStyle: {
    width: deviceWidth * 1,
    height: deviceHeight * 0.558,
  },

  /**
   * 공지사항 게시물의 이미지 박스입니다.
   */
  NoticePostImageBoxStyle: {
    height: deviceHeight * 0.571,
    width: deviceWidth * 1,
  },
});
