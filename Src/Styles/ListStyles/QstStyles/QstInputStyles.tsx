import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import Constants from "expo-constants";

export default StyleSheet.create({
  /**
   * 질문게시판에서 사용하는 답변 인풋 스타일
   */
  AnswerInputBoxStyle: {
    width: deviceWidth * 0.72,
    height: deviceHeight * 0.028,
    backgroundColor: "#FFFFFF",
    borderRadius: 11,
    borderColor: "#8D9490",
    borderWidth: 1,
    paddingLeft: 10,
  },

  /**
   * 공지사항과 자유 게시판, 건의 게시판에 내용을 입력하는 인풋입니다.
   */
  QstContInputBoxStyle: {
    width: deviceWidth * 0.84,
    height: deviceHeight * 0.2,
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
