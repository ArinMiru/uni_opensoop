import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../Utils/DeviceUtils";
export default StyleSheet.create({
  /*-------------------Account Compo Input Style----------------------*/
  /**
   * /Components/AccountCompo/AccountTextInput
   * 중복 확인 Input
   */
  srchDupleInputStyle: {
    width: deviceWidth * 0.5625,
    height: deviceHeight * 0.07,
    borderRadius: 11,
    paddingLeft: 10,
    borderColor: "#e8ecf4",
    backgroundColor: "#f7f8f9",
    borderWidth: 1,
  },

  /**
   * /Components/AccountCompo/AccountTextInput
   * Account에서만 쓰이는 마진 탑이 0.03 들어간 Input (SignUp폴더 안에 있는 파일의 (긴)인풋)
   * 정은유 작성
   *
   * Account에 모든 긴 인풋은 이걸 씀 -> 컴포넌트 파일 참고(OnlyAccountInputCompoMarginTop3) <- 돋보기에 검색
   * 김도원 작성
   *
   */
  onlyAccountInputStyleMarginTop3: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.07,
    marginTop: deviceHeight * 0.03,
    backgroundColor: "#f7f8f9",
    borderRadius: 11,
    paddingLeft: 10,
    borderColor: "#e8ecf4",
    borderWidth: 1,
  },
});
