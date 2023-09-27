import { StyleSheet, Platform } from "react-native";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /*-------------------제목 등록 인풋----------------------*/

  /**
   * 게시판 전반으로 들어가는 글 제목 등록하는 인풋 스타일
   */
  OpenFreSgsTitInputBoxStyle: {
    width: deviceWidth * 0.84,
    height: deviceHeight * 0.065,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    borderRadius: 8,
    borderColor: "#8D9490",
    borderWidth: 1,
  },

  /**
   * 공지사항과 자유 게시판, 건의 게시판에 내용을 입력하는 인풋입니다.
   */

  OpenFreSgsContInputBoxStyle: {
    width: deviceWidth * 0.84,
    height: deviceHeight * 0.3,
    backgroundColor: "#FFFFFF",
    paddingTop: 10,
    paddingEnd: 10,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 8,
    borderColor: "#8D9490",
    borderWidth: 1,
  },
});
