import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /**
   * 게시판에서 화면을 이동하는 상단 버튼 입니다.
   * 위에서부터 순서대로 자유, 건의, 질문 버튼입니다.
   * 버튼을 클릭하기 전의 스타일입니다..
   */

  ListCategorieBefoButtonStyle: {
    width: deviceWidth * 0.296,
    height: deviceHeight * 0.052,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  /**
   * 게시판에서 화면을 이동하는 상단 버튼 입니다.
   * 위에서부터 순서대로 자유, 건의, 질문 버튼입니다.
   * 버튼을 클릭한 후의 스타일입니다.
   */

  ListCategorieButtonStyle: {
    width: deviceWidth * 0.205,
    height: deviceHeight * 0.045,
    backgroundColor: "#ECECEC",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
