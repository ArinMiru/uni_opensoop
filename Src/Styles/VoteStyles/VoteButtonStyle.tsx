import { StyleSheet, Platform } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /*-------------------Vote Compo Button Style----------------------*/

  /**
   * /Components/VoteCompo/VoteSlctButton
   * 투표 선택 후 상태 버튼
   */
  voteSlctStyle: {
    width: deviceWidth * 0.775,
    height: deviceHeight * 0.061,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#EBEBEB",
    borderRadius: 5,
  },

  /**
   * /Components/VoteCompo/VoteUnSlctButton
   * 투표 선택 전 상태 버튼
   */
  voteUnSlctStyle: {
    width: deviceWidth * 0.775,
    height: deviceHeight * 0.061,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#EBEBEB",
    borderWidth: 1,
    elevation: Platform.OS === "android" ? 3 : 0, // Android에서 그림자 효과
    ...Platform.select({
      // iOS에서 그림자 효과
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
    }),
  },

  /**
   * /Components/VoteCompo/VoteStatusPageButton
   * 투표 현황 페이지 버튼
   */
  voteStatusPageStyle: {
    width: deviceWidth * 0.775,
    height: deviceHeight * 0.061,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    borderColor: "#EBEBEB",
    borderWidth: 1,
    flexDirection: "row",
    elevation: Platform.OS === "android" ? 3 : 0, // Android에서 그림자 효과
    ...Platform.select({
      // iOS에서 그림자 효과
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
    }),
  },

  /**
   * /Components/VoteCompo/VoteStatusButton
   * 투표 현황보기 버튼
   */
  voteStatusStyle: {
    width: deviceWidth * 0.775,
    height: deviceHeight * 0.061,
    backgroundColor: "#EBEBEB",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
  },

  /**
   * /Components/VoteCompo/VoteRegiButton
   * 투표하기 버튼
   */
  voteRegiStyle: {
    width: deviceWidth * 0.775,
    height: deviceHeight * 0.061,
    backgroundColor: "#4BB781",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
  },

  /**
   * /Components/VoteCompo/AddVoteOptionButton
   * 투표 선택지 늘리는 버튼
   */
  addVoteOptionStyle: {
    width: deviceWidth * 0.775,
    height: deviceHeight * 0.061,
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  /**
   * /Components/VoteCompo/VoteButton
   * 미투표 보기 버튼
   */
  viewUnvottedButtonStyle: {
    width: deviceWidth * 0.4,
    height: deviceHeight * 0.042,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  /**
   * /Components/VoteCompo/UnVotedButton
   * 미투표 List 버튼
   * (미투표 상태)
   */
  UnVotedListButtonStyle: {
    width: deviceWidth * 0.881,
    height: deviceHeight * 0.077,
    marginTop: deviceHeight * 0.03,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderColor: "#CDCDCD",
    backgroundColor: "#FFFFFF",
    borderWidth: 0.5,
    borderRadius: 5,
  },

  /**
   * /Components/VoteCompo/UnVotedButton
   * 투표완료 List 버튼
   * (투표완료 상태)
   */
  VotedListButtonStyle: {
    width: deviceWidth * 0.881,
    height: deviceHeight * 0.077,
    marginTop: deviceHeight * 0.03,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#ECECEC",
    borderRadius: 5,
  },

  DateSltButtonStyle: {
    backgroundColor: "#F7F7F7",
    width: deviceWidth * 0.775,
    height: deviceHeight * 0.061,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  /*------------------------------------------------------------*/
});
