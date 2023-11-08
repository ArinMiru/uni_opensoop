import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    backgroundColor: "#EEEEEE",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // 인디케이터 위치와 스타일 변경
  dotStyle: {
    backgroundColor: "rgba(0,0,0,.2)", // 비활성 인디케이터 색상
    width: 4,
    height: 4,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    bottom: -45, // 위치 조정
  },
  activeDotStyle: {
    backgroundColor: "#4BB781", // 활성 인디케이터 색상
    width: 4,
    height: 4,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    bottom: -45, // 위치 조정
  },
});
