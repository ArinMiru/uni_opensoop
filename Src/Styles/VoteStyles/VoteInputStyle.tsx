import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../Utils/DeviceUtils";

export default StyleSheet.create({
  /*-------------------Vote Compo Input Style----------------------*/

  /**
   * /Components/VoteCompo/VoteTextInput
   * 투표 선택지 만드는 Input
   */
  voteInputStyle: {
    width: deviceWidth * 0.75,
    height: deviceHeight * 0.058,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderColor: "#56BB89",
    borderWidth: 1,
  },

  /*------------------------------------------------------------*/
});
