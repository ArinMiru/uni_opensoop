import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /*-------------------Vote Compo Input Style----------------------*/

  /**
   * /Components/VoteCompo/VoteTextInput
   * 투표 선택지 만드는 Input
   */
  VoteInputStyle: {
    width: deviceWidth * 0.775,
    height: deviceHeight * 0.061,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    paddingLeft: "5%",
    paddingRight: "5%",
  },

  VoteTitInputBoxStyle: {
    width: deviceWidth * 0.775,
    height: deviceHeight * 0.065,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderColor: "#BDBDBD",
  },

  VoteTitInputAreaStyle: {
    width: deviceWidth * 0.775,
    height: deviceHeight * 0.091,
    alignItems: "center",
    justifyContent: "center",
  },
  /*------------------------------------------------------------*/
});
