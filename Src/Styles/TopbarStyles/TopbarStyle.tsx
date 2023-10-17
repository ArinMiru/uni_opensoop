import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";
import Constants from "expo-constants";

export default StyleSheet.create({
  /**
   * -- TopbarStyle --
   * BackIconDelTopbarStyle, BackIconRegiTopbarStyle, BackIconEditTopbarStyle, BackIconTopbarStyle 스타일
   * justifyContent, alignItems 참고 -> * https://joylee-developer.tistory.com/147
   */
  TopbarStyle: {
    height: deviceHeight * 0.0797,
    flexDirection: "row",
    width: deviceWidth * 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  /*------------------------------------------------------------------*/
});
