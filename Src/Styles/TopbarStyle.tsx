import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";
import Constants from "expo-constants";

export default StyleSheet.create({
  /**
   * /Components/AllCompo/TopbarCompo
   *  Account 화면 제외한 나머지 앱 화면 기준 상단 초록색 영역 스타일
   * (2023.09.14 김도원 생성)
   */
  Topbar: {
    width: deviceWidth * 1,
    height: deviceHeight * 0.08,
    backgroundColor: "#4bb781" /*시그니처 Color*/,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    // 안드로이드의 경우 SafeAreaView 가 적용되지 않아 별도의 값을 구하여 상태 표시줄을 보존 하여야 함
  },
});
