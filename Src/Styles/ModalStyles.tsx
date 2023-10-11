import { StyleSheet } from "react-native";

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  editArea: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#DEDEDE",
  },
  delArea: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#DEDEDE",
  },
  closeArea: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // 모달 바깥 영역을 덮도록 설정
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
