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
    flex: 1,
    flexDirection: "row",
    width: deviceWidth * 1,
    backgroundColor: "#4bb781" /*시그니처 Color*/,
    justifyContent: "center",
  },
});
