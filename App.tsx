import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  currentPlatform,
  deviceHeight,
  deviceWidth,
} from "./Src/Utils/DeviceUtils";
import { fetchData } from "./Src/Services/ApiService";

export default function App() {
  fetchData();                                      // 생성 해 놓은 ApiService 함수 호출

  return (
    <View style={styles.container}>
      <Text> 플랫폼 : {currentPlatform}</Text>
      <Text> 세로 : {deviceHeight}</Text>
      <Text> 가로 : {deviceWidth}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
