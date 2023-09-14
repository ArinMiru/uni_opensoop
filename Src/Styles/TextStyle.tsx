import { StyleSheet } from "react-native";
import {
  deviceHeight,
  deviceWidth,
  currentPlatform,
} from "../Utils/DeviceUtils";

/* App에서 사용하는 모든 TextStyle File  */

export default StyleSheet.create({
  /**
   * 모든 컴포넌트 가장 기본 텍스트 스타일
   */
  textbase: {
    fontFamily: "Bold",
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 15,
  },
  /**
   * /Components/Reusable/Button
   * Regibutton 텍스트 스타일
   */
  regibuttontext: {
    fontFamily: "Bold",
    fontWeight: "bold",
    color: "#4BB781",
    fontSize: 15,
  },
  /**
   * /Components/Reusable/Button
   * LoginButton 텍스트 스타일
   */
  loginbuttontext: {
    fontFamily: "Bold",
    fontWeight: "bold",
    color: "#4BB781",
    fontSize: 11,
  },
  /**
   * /Components/CommonSrc/RegiCommon
   * 회원가입 공통 스크린 상단 초록색 큰 텍스트 스타일
   */
  commonScreenbigText: {
    fontFamily: "Bold",
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
    fontFamily: "Bold",
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
    fontFamily: "Bold",
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 18,
  },

  // 위에 있는 모든 TextStyle 삭제 예정(@김도원)*/

  /*-------------------------------------------*/

  /*
    Text Font 모양 
    { fontWeight: '100' }, // Thin
    { fontWeight: '200' }, // Ultra Light
    { fontWeight: '300' }, // Light
    { fontWeight: '400' }, // Regular
    { fontWeight: '500' }, // Medium
    { fontWeight: '600' }, // Semibold
    { fontWeight: '700' }, // Bold
    { fontWeight: '800' }, // Heavy
    { fontWeight: '900' }, // Black
  */

  /*----------------medium---------------------*/
  medium09: {
    fontFamily: "Medium",
    fontWeight: "500" /*medium*/,
    fontSize: 9,
  },

  medium12: {
    fontFamily: "Medium",
    fontWeight: "500" /*medium*/,
    fontSize: 12,
  },

  medium13: {
    fontFamily: "Medium",
    fontWeight: "500" /*medium*/,
    fontSize: 13,
  },

  medium14: {
    fontFamily: "Medium",
    fontWeight: "500" /*medium*/,
    fontSize: 14,
  },

  /*----------------semibold-------------------*/

  semibold07: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: 7,
  },

  semibold08: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: 8,
  },

  semibold10: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: 10,
  },

  semibold12: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: 12,
  },

  semibold13: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: 13,
  },

  semibold14: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: 14,
  },

  semibold19: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: 19,
  },

  /*-----------------bold---------------------*/

  bold08: {
    fontFamily: "Bold",
    fontWeight: "700" /*bold*/,
    fontSize: 8,
  },

  bold11: {
    fontFamily: "Bold",
    fontWeight: "700" /*bold*/,
    fontSize: 11,
  },

  bold12: {
    fontFamily: "Bold",
    fontWeight: "700" /*bold*/,
    fontSize: 12,
  },

  bold25: {
    fontFamily: "Bold",
    fontWeight: "700" /*bold*/,
    fontSize: 25,
  },

  /*----------------regular-------------------*/

  regular07: {
    fontFamily: "Regular",
    fontWeight: "400" /*regular*/,
    fontSize: 7,
  },

  regular08: {
    fontFamily: "Regular",
    fontWeight: "400" /*regular*/,
    fontSize: 8,
  },

  regular10: {
    fontFamily: "Regular",
    fontWeight: "400" /*regular*/,
    fontSize: 10,
  },

  regular13: {
    fontFamily: "Regular",
    fontWeight: "400" /*regular*/,
    fontSize: 13,
  },

  /*------------------------------------------*/
});
