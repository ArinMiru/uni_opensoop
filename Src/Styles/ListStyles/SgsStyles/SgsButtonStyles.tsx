import { StyleSheet, Platform } from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import { JumpingTransition } from "react-native-reanimated";

export default StyleSheet.create({
  /**
   * 건의게시판 메인화면의 게시글 상자의 스타일입니다.
   */
  SgsListButtonStyle: {
    alignItems: "center",
    width: deviceWidth * 0.943,
    height: deviceHeight * 0.09,
    marginBottom: "5%",
    backgroundColor: "#F8F8F8",
    borderRadius: 5,
  },

  /**
   * 건의게시판 게시글 몇 초전 텍스트 표시 박스입니다.
   * border를 사용하지 않았습니다.
   */
  SgsListButtonEndBoxStyle: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: deviceWidth * 0.85,
    height: deviceWidth * 0.028,
    backgroundColor: "#ffffff",
  },

  /*
   * 건의게시판의 게시글을 삭제하는 버튼의 스타일 입니다.
   **/
  SgsDelButtonStyle: {
    width: deviceWidth * 0.09,
    height: deviceHeight * 0.02,
    backgroundColor: "#F66565",
    borderRadius: 11,
    borderColor: "#F66565",
    borderWidth: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },
  horizontalLine: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#8B8B8B",
    width: "100%",
  },

  divideContentsLine: {
    borderBottomWidth: 4,
    opacity: 0.8,
    borderBottomColor: "#E8E8E8",
    width: "100%",
  },

  divideSchdlContentsLine: {
    borderBottomWidth: 4,
    opacity: 0.8,
    borderBottomColor: "#E8E8E8",
    width: "100%",
  },
});
