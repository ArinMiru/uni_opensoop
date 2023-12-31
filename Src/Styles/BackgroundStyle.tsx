import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";
import Constants from "expo-constants";

export default StyleSheet.create({
  /**
   *
   *
   * /Compnents/Backgroud.tsx 파일 AccountBackground 배경 스타
   */
  AccountBackground: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: deviceWidth * 1,
    height: deviceHeight * 1,
    alignItems: "center",
    paddingTop: Constants.statusBarHeight, // 안드로이드의 경우 SafeAreaView 가 적용되지 않아 별도의 값을 구하여 상태 표시줄을 보존 하여야 함
  },
  /**
   * Components/RegiCommon/
   * 회원가입 스크린 상단 텍스트 영역 스타일
   */
  backIconFlex: {
    flex: 1,
    justifyContent: "flex-start",
    width: deviceWidth * 1,
  },
  /**
   * Components/RegiCommon/
   * 회원가입 스크린 중간 텍스트 인풋 영역 스타일
   */
  titleTextFlex: {
    flex: 1,
    width: deviceWidth * 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  /**
   * Components/RegiCommon/
   * 회원가입 스크린 하단 버튼 영역 스타일
   */
  accountInputFlex: {
    flex: 3,
    width: deviceWidth * 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  accountButtonFlex: {
    flex: 6,
    width: deviceWidth * 1,
    alignItems: "center",
  },
});
