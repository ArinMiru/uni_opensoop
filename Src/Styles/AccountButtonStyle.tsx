import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";

export default StyleSheet.create({
  /*-------------------Account Compo Button Style----------------------*/

  /**
   * /Components/AccountCompo/AccountButton
   * 중복 확인 버튼
   */
  srchDupleButtonStyle: {
    width: deviceWidth * 0.2,
    height: deviceHeight * 0.062,
    backgroundColor: "#4BB781",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },

  /**
   * /Components/AccountCompo/AccountButton
   * Account에서만 쓰이는 버튼(다음, 완료, 로그인하러가기 등..)
   */
  onlyAccountStyle: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.062,
    backgroundColor: "#4BB781",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },

  /**
   * /Components/AccountCompo/AccountButton
   * 회원가입 버튼
   */
  onlyAccountRegiStyle: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.062,
    backgroundColor: "#E4F1E4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    marginTop: 25,
  },

  /**
   * /Components/AccountCompo/AccountButton
   * 아이디, 비밀번호 찾기 버튼
   */
  idPassFindStyle: {
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

  /*------------------------------------------------------------*/
});
