import { StyleSheet } from "react-native";
import { deviceHeight,deviceWidth,currentPlatform } from "../Utils/DeviceUtils";

export default StyleSheet.create({
  /**
   * 모든 컴포넌트 가장 기본 텍스트 스타일
   */
  textbase: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 15,
  },
   /**
   * /Components/Reusable/Button
   * Regibutton 텍스트 스타일
   */
  regibuttontext: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    color: "#4BB781",
    fontSize: 15,
  },
  /**
   * /Components/Reusable/Button
   * LoginButton 텍스트 스타일
   */
  loginbuttontext: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    color: "#4BB781",
    fontSize: 11,
  },
  /**
   * /Components/CommonSrc/RegiCommon
   * 회원가입 공통 스크린 상단 초록색 큰 텍스트 스타일
   */
  commonScreenbigText: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    color: "#4bb781",
    fontSize: 35,
    marginLeft: deviceWidth * 0.1,
  },
  /**
   * /Components/CommonSrc/RegiCommon
   * 회원가입 공통 스크린 상단 조금 작은 텍스트 스타일
   */
  commonScreensmallText: {
    fontFamily: "NotoSans",
    color: "#424c43",
    fontSize: 30,
    marginLeft: deviceWidth * 0.01,
    marginTop: currentPlatform === "ios" ? 0 : deviceHeight * 0.165,
  },
  /**
   * /Components/CommonSrc/RegiCommon
   * 회원가입 공통 스크린 하단 버튼 텍스트 스타일
   */
  commonButtonText: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 18,
  },
});