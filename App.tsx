import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  currentPlatform,
  deviceHeight,
  deviceWidth,
} from "./Src/Utils/DeviceUtils";

export default function App() {
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
