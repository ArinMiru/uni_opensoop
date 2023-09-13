import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";

/* 삭제 예정(@김도원) */

export default StyleSheet.create({
  /**
   * Components/Reusable/Button
   * LongButton 스타일
   */
  longButtonStyle: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.062,
    backgroundColor: "#4BB781",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  /**
   * Components/Reusable/Button
   * ShortButton 스틸
   */
  shortButtonStyle: {
    width: deviceWidth * 0.2,
    height: deviceHeight * 0.062,
    marginLeft: deviceWidth * 0.02,
    backgroundColor: "#4BB781",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  /**
   * Components/Reusable/Button
   * RegiButton 스타일
   */
  regiStyle: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.062,
    backgroundColor: "#E4F1E4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    marginTop: 25,
  },
  /**
   * Components/Reusable/Button
   * LoginButton 스타일
   */
  loginStyle: {
    width: deviceWidth * 0.25,
    height: deviceHeight * 0.042,
    backgroundColor: "#E4F1E4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 120,
    borderColor: "#E2E2E2",
    borderWidth: 1,
    marginRight: deviceWidth * 0.01,
    marginLeft: deviceWidth * 0.01,
    marginTop: deviceHeight * 0.05,
  },
  /**
   * Components/RegiCommon/
   * 회원가입 스크린 버튼 스타일
   */
  commonButtonStyle: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.06,
    marginLeft: deviceWidth * 0.1,
    backgroundColor: "#4bb781",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
});
