import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

export default StyleSheet.create({
  /**
   * 공지사항에서 사용하는 사진을 불러오는 버튼입니다.
   */
  PhotoLawStyle: {
    width: deviceWidth * 0.3625,
    height: deviceHeight * 0.0404,
    marginRight: deviceWidth * 0.07,
    backgroundColor: "#A1A1A1",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    borderRadius: 100,
  },

  LawStyle: {
    width: deviceWidth * 0.3625,
    height: deviceHeight * 0.0404,
    marginRight: deviceWidth * 0.07,
    backgroundColor: "#A1A1A1",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 100,
  },

  /**
   * 공지사항에서 사용하는 좋아요 버튼입니다.
   */
  OpenLikeButtonStyle: {
    width: deviceWidth * 0.16,
    height: deviceHeight * 0.045,
    backgroundColor: "#4BB781",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 16,
  },

  /**
   * 공지사항에서 사용하는 사진 추가, 삭제버튼이 들어가는 네모난 연한 연두색 상자 스타일입니다.
   */
  OpenPhotoBoxStyle: {
    width: deviceWidth * 0.2,
    height: deviceWidth * 0.2, // @holly1017 레전드 작품
    backgroundColor: "#DEEBE4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});
