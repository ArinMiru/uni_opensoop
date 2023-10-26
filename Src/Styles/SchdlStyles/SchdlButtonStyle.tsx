import { StyleSheet, Platform } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /**
   * 일정 페이지에서 시간을 선택하는 버튼의 스타일 입니다..
   */
  SchdlTimeButtonStyle: {
    width: deviceWidth * 0.3,
    height: deviceHeight * 0.058,
    backgroundColor: "#F7F8F9",
    borderRadius: 8,
    borderColor: "#E8ECF4",
    borderWidth: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },

  /*
   * 일정 페이지에서 날짜를 선택하는 버튼 상자 디자인 입니다.
   **/
  SchdlRegiDateButtonStyle: {
    width: deviceWidth * 0.76,
    height: deviceHeight * 0.058,
    backgroundColor: "#F7F8F9",
    borderRadius: 8,
    borderColor: "#E8ECF4",
    borderWidth: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },

  /*
   * 일정페이지에서 달력에 들어가는 일정 있는 날과 오늘을 표현하는
  동그라미 버튼임미다.
   **/
  SchdlDayButtonStyle: {
    width: deviceWidth * 0.075,
    height: deviceWidth * 0.075,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  /*
   * 일정페이지에서 수정, 삭제 버튼 스타일입니다.
   **/
  SchdlClikButtonStyle: {
    width: deviceWidth * 0.09,
    height: deviceHeight * 0.02,
    borderRadius: 11,
    borderWidth: 1.2,
    alignItems: "center",
    justifyContent: "center",
  },

  /*
   * 일정페이지 시간 정하는 버튼의 중간에 있는 막대기 입니다.
   **/
  TimeLineStyle: {
    flex: 0.5, // 선이 컨테이너 내에서 고르게 분배되도록 flex 속성을 사용합니다.
    height: 2, // 선의 높이 (두께)
    backgroundColor: "#BDBDBD",
    borderRadius: 1,
  },

  /*
   * 일정페이지에서 수정, 삭제 버튼 스타일입니다.
   **/
  SchdlDetailBoxStyle: {
    width: deviceWidth * 1,
    minHeight: deviceHeight * 0.29,
  },
});
