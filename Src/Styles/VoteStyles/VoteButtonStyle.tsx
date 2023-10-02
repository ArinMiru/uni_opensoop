import { StyleSheet, Platform } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /*-------------------Vote Compo Button Style----------------------*/

  /**
   * /Components/VoteCompo/VoteSlctButton
   * 투표 선택 후 상태 버튼
   */
  voteSlctStyle: {
    width: deviceWidth * 0.75,
    height: deviceHeight * 0.058,
    backgroundColor: "#E4F1E4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    elevation: Platform.OS === "android" ? 3 : 0, // Android에서 그림자 효과
    ...Platform.select({
      // iOS에서 그림자 효과
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },

  /**
   * /Components/VoteCompo/VoteUnSlctButton
   * 투표 선택 전 상태 버튼
   */
  voteUnSlctStyle: {
    width: deviceWidth * 0.75,
    height: deviceHeight * 0.058,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderColor: "#4BB781",
    borderWidth: 1,
    elevation: Platform.OS === "android" ? 3 : 0, // Android에서 그림자 효과
    ...Platform.select({
      // iOS에서 그림자 효과
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },

  /**
   * /Components/VoteCompo/VoteStatusPageButton
   * 투표 현황 페이지 버튼
   */
  voteStatusPageStyle: {
    width: deviceWidth * 0.75,
    height: deviceHeight * 0.058,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 30,
    borderColor: "#4BB781",
    borderWidth: 1,
  },

  /**
   * /Components/VoteCompo/VoteStatusButton
   * 투표 현황보기 버튼
   */
  voteStatusStyle: {
    width: deviceWidth * 0.75,
    height: deviceHeight * 0.058,
    backgroundColor: "#E3F9E3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
  },

  /**
   * /Components/VoteCompo/VoteRegiButton
   * 투표하기 버튼
   */
  voteRegiStyle: {
    width: deviceWidth * 0.75,
    height: deviceHeight * 0.058,
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
    width: deviceWidth * 0.75,
    height: deviceHeight * 0.058,
    backgroundColor: "#4BB781",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 30,
    borderColor: "#56BB89",
    borderWidth: 1,
  },

  /**
   * /Components/VoteCompo/VoteButton
   * 미투표 보기 버튼
   */
  viewUnvottedButtonStyle: {
    width: deviceWidth * 0.265,
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
    width: deviceWidth * 0.862,
    height: deviceHeight * 0.093,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 11,
    borderColor: "#F9AEC8",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    elevation: Platform.OS === "android" ? 3 : 0, // Android에서 그림자 효과
    ...Platform.select({
      // iOS에서 그림자 효과
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },

  /**
   * /Components/VoteCompo/VoteButton
   * 미투표 List 버튼 안에 미투표 상태 표시 (오른쪽 색상 박스)
   */
  VoteUnvotedColorBoxStyle: {
    width: deviceWidth * 0.035,
    height: deviceHeight * 0.092,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#D72966",
    borderTopColor: "#F9AEC8",
    borderEndColor: "#F9AEC8",
    borderLeftColor: "#F9AEC8",
    borderTopWidth: 0.5,
    borderEndWidth: 0.5,
    borderLeftWidth: 0.5,
  },

  /**
   * /Components/VoteCompo/UnVotedButton
   * 투표완료 List 버튼
   * (투표완료 상태)
   */
  VotedListButtonStyle: {
    width: deviceWidth * 0.862,
    height: deviceHeight * 0.093,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 11,
    backgroundColor: "#E4F1E4",
    elevation: Platform.OS === "android" ? 3 : 0, // Android에서 그림자 효과
    ...Platform.select({
      // iOS에서 그림자 효과
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },

  /**
   * /Components/VoteCompo/VoteButton
   * 투표완료 List 버튼 안에 투표완료 상태 표시 (오른쪽 색상 박스)
   */
  VotevotedColorBoxStyle: {
    width: deviceWidth * 0.035,
    height: deviceHeight * 0.092,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#4BB781",
    borderTopColor: "#4BB781",
    borderEndColor: "#4BB781",
    borderLeftColor: "#4BB781",
    borderTopWidth: 0.5,
    borderEndWidth: 0.5,
    borderLeftWidth: 0.5,
  },

  /*------------------------------------------------------------*/
});
