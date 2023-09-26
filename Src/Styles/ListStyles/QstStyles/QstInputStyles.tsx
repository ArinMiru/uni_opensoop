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
});
