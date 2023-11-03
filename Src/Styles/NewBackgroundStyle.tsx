import { StyleSheet, Platform } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

const hightvalue =
  Platform.OS === "ios" && deviceHeight <= 667 ? "90.8%" : "91%";

const containerhightvalue =
  Platform.OS === "ios" && deviceHeight <= 667 ? "90.8%" : "91%";

const modalHeightValue =
  Platform.OS === "ios"
    ? deviceHeight <= 667
      ? deviceHeight * 0.86
      : deviceHeight <= 812
      ? deviceHeight * 0.84
      : deviceHeight <= 932
      ? deviceHeight * 0.84
      : deviceHeight <= 738
      ? deviceHeight * 0.9
      : deviceHeight * 1
    : deviceHeight * 1;

export default StyleSheet.create({
  /*------------------------------------------------------------------------*/

  /**
   * 모든 페이지 - 상단 라운드 박스 스타일
   */
  OnlyTopRadiusBackgroundStyle: {
    backgroundColor: "#FFFFFF",
    width: deviceWidth * 1,
    height: deviceHeight * 0.921,
  },

  ListDetailBackgroundStyle: {
    backgroundColor: "#FFFFFF",
    width: deviceWidth * 1,
    height: deviceHeight * 0.921,
  },

  /**
   * 모든 페이지 - 상단 라운드 박스 스타일
   */

  BottomTabBackgroundStyle: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: hightvalue, // 아이폰의 경우 91%, 안드로이드의 경우 89%로 설정
  },

  /**
   * 모든 페이지 - 상단 라운드 박스 스타일
   */
  ModalBackgroundStyle: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: Platform.OS === "ios" ? "90.4%" : "91%", // 아이폰의 경우 91%, 안드로이드의 경우 89%로 설정
  },

  /**----------------------------------------------------------------------------------------------------- */

  container: {
    flex: 1,
    height: deviceHeight * 1,
    width: deviceWidth * 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingTop:
      Platform.OS === "android" ? Constants.statusBarHeight : undefined,
  },
  modalView: {
    height: modalHeightValue,
    width: deviceWidth * 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },

  modalTopBar: {
    alignItems: "center",
    backgroundColor: "#fff", // 모달의 배경색
    paddingVertical: 16,
    marginBottom: -20,
    borderTopLeftRadius: 20, // 모달의 상단 좌우 모서리를 둥글게
    borderTopRightRadius: 20,
    shadowColor: "#000", // 그림자 색
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1, // 그림자 불투명도
    shadowRadius: 4,
    elevation: 5, // 안드로이드 전용 그림자 효과
  },
  draggableIndicator: {
    width: 40, // 드래그 가능 표시 바의 너비
    height: 5, // 높이
    borderRadius: 2.5, // 모서리 둥글기
    backgroundColor: "#ccc", // 바의 색
    marginBottom: 8,
  },
  modalTitle: {
    fontSize: 18, // 글씨 크기
    fontWeight: "bold", // 글씨 굵기
  },
});
