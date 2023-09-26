import { StyleSheet, Platform } from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";

export default StyleSheet.create({
  /**
   * 질문 게시판에서 답변하기 버튼이 존재하는 메인화면 스타일입니다.
   */
  QstListStyle: {
    alignItems: "center",
    width: deviceWidth * 0.85,
    height: deviceHeight * 0.11,
    backgroundColor: "#ffffff",
    borderRadius: 11,
    borderColor: "#4BB781",
    borderWidth: 1.2,
    elevation: Platform.OS === "android" ? 3 : 0, // Android에서 그림자 효과
    ...Platform.select({
      // iOS에서 그림자 효과
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },

  /*
   * 질문 게시판 리스트 화면 버튼에 들어가는 선 스타일입니다.
   **/
  horizontalLine: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#8B8B8B",
    width: "90%",
  },

  /*
   * 질문 게시판에서 답변을 등록하는 버튼의 스타일입니다.
   **/
  QstAnswerButtonStyle: {
    width: deviceWidth * 0.09,
    height: deviceHeight * 0.025,
    backgroundColor: "#4BB781",
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
});
