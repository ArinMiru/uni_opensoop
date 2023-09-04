import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../Utils/DeviceUtils";
import Constants from "expo-constants";

export default StyleSheet.create({
  loginBackground: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: deviceWidth * 1,
    height: deviceHeight * 1,
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,             // 안드로이드의 경우 SafeAreaView 가 적용되지 않아 별도의 값을 구하여 상태 표시줄을 보존 하여야 함
  },
});
