import { StyleSheet } from "react-native";
import { deviceWidth } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /**
   * -- TopbarStyle --
   * BackIconDelTopbarStyle, BackIconRegiTopbarStyle, BackIconEditTopbarStyle, BackIconTopbarStyle 스타일
   * justifyContent, alignItems 참고 -> * https://joylee-developer.tistory.com/147
   */
  TopbarStyle: {
    flex: 1,
    flexDirection: "row",
    width: deviceWidth * 1,
    backgroundColor: "#4bb781" /*시그니처 Color*/,
    justifyContent: "space-between",
    alignItems: "center",
  },

  /*------------------------------------------------------------------*/
});
