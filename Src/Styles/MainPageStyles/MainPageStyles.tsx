import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";
import Constants from "expo-constants";

export default StyleSheet.create({
  /**
   * 모든 페이지의 배경 스타일
   */
  Background: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    width: deviceWidth * 1,
    height: deviceHeight * 1,
    paddingTop: Constants.statusBarHeight, // 안드로이드의 경우 SafeAreaView 가 적용되지 않아 별도의 값을 구하여 상태 표시줄을 보존 하여야 함
  },

  /*------------------------------------------------------------------------*/

  /**
   * 메인 페이지 - 공지사항 박스 스타일
   */
  MainOpenContentsBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    width: deviceWidth * 0.94375,
    height: deviceHeight * 0.3714,
  },

  /**
   * 메인 페이지 - 공지사항 포토 박스 스타일
   */
  MainOpenPhotoBox: {
    backgroundColor: "#BDBDBD",
    borderRadius: 20,
    width: deviceWidth * 0.28,
    height: deviceHeight * 0.1073,
  },

  /**
   * 메인 페이지 - 공지사항 게시물 단위 박스 스타일
   */
  MainOpenBox: {
    width: deviceWidth * 0.8156,
    height: deviceHeight * 0.1109,
  },

  /*------------------------------------------------------------------------*/

  /**
   * 메인 페이지 - 투표 박스 스타일
   */
  MainVotContentsBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    width: deviceWidth * 0.94375,
    height: deviceHeight * 0.1707,
  },

  /**
   * 메인 페이지 - 일정 박스 스타일
   */
  MainSchdlContentBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    width: deviceWidth * 0.94375,
    height: deviceHeight * 0.1707,
  },

  /*------------------------------------------------------------------------*/
});
