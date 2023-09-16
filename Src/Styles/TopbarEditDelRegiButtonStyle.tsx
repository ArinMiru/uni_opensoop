import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";
export default StyleSheet.create({
  /**
   * TopbarStyleEditDelRegiButtonStyle
   * 공지사항, 투표, 게시판, 일정에 해당하는 TopbarStyle에 있는 Edit, Delete, Register 버튼의 스타일이 존재하는 코드 입니다.
   * 이 코드는 공지사항, 투표, 게시판, 일정에만 존재하는 코드 입니다.
   */

  /*----------------TopbarStyleEditDelRegiButtonStyle------------------*/

  /**
   * TopbarStyleDelButtonStyle
   * TopbarStyle에 있는 Delete 아이콘
   * 공지사항, 투표, 게시판, 일정에 해당하는 TopbarStyle에만 존재하는 코드 입니다.
   */
  TopbarDelButtonStyle: {
    width: deviceWidth * 0.14,
    height: deviceHeight * 0.04,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },

  /*------------------------------------------------------------*/

  /**
   * TopbarStyleEditButtonStyle
   * TopbarStyle에 있는 Edit 아이콘
   * 공지사항, 투표, 게시판, 일정에 해당하는 TopbarStyle에만 존재하는 코드 입니다.
   */
  TopbarEditButtonStyle: {
    width: deviceWidth * 0.14,
    height: deviceHeight * 0.04,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },

  /*------------------------------------------------------------*/

  /**
   * TopbarStyleRegiButtonStyle
   * TopbarStyle에 있는 Register 아이콘
   * 공지사항, 투표, 게시판, 일정에 해당하는 TopbarStyle에만 존재하는 코드 입니다.
   */
  TopbarRegiButtonStyle: {
    width: deviceWidth * 0.14,
    height: deviceHeight * 0.04,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  /*------------------------------------------------------------*/
});
