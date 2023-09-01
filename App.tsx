import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  currentPlatform,
  deviceHeight,
  deviceWidth,
} from "./Src/Utils/DeviceUtils";
import { fetchData } from "./Src/Services/ApiService";
import { NavigationContainerWrapper } from "./Src/Navigations/NavigationContainer";

export default function App() {
  fetchData();                              // 생성 해 놓은 ApiService 함수 호출
  return <NavigationContainerWrapper />;    // Navigation 루트 설정
}