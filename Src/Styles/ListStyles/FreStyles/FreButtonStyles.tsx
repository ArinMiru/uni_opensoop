import { StyleSheet, Platform } from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";

export default StyleSheet.create({
  /**
   * 자유 게시판 메인화면의 게시글 상자의 스타일입니다.
   */
  FreeListButtonStyle: {
    alignItems: "center",
    width: deviceWidth * 0.943,
    height: deviceHeight * 0.12,
    marginBottom: "5%",
    backgroundColor: "#F8F8F8",
    borderRadius: 5,
  },

  /*
   * 자유게시판의 게시글을 수정하는 버튼의 스타일 입니다.
   **/
  FreEditButtonStyle: {
    width: deviceWidth * 0.09,
    height: deviceHeight * 0.02,
    backgroundColor: "#ffffff",
    borderRadius: 11,
    borderColor: "#4BB781",
    borderWidth: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },

  /*
   * 자유게시판의 게시글을 삭제하는 버튼의 스타일 입니다.
   **/
  FreDelButtonStyle: {
    width: deviceWidth * 0.09,
    height: deviceHeight * 0.02,
    backgroundColor: "#F66565",
    borderRadius: 11,
    borderColor: "#F66565",
    borderWidth: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },

  /*
   * 자유게시판의 좋아요 버튼 스타일임미다.
   **/
  FreLikeButtonStyle: {
    width: deviceWidth * 0.096,
    height: deviceHeight * 0.028,
    backgroundColor: "#EAEEF1",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 30,
  },
});
