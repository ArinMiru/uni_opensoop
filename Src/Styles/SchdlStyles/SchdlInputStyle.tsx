import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /*-------------------제목 등록 인풋----------------------*/

  /**
   * 일정 게시판의 제목 인풋입니다.
   */
  SchdlVoteRegiTilteInputStyle: {
    width: deviceWidth * 0.77,
    height: deviceHeight * 0.05,
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
  },

  /*
   * 일정페이지에서 일정 등록시 제목을 입력하는 화면의 밑줄? 스타일 임니다.
   **/
  RegiTitleUderBarStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    width: deviceWidth * 0.77,
    borderRadius: 1,
  },
});
