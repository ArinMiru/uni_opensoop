import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Axios 라이브러리 설치완료</Text>
      <Text>Navigation 라이브러리 설치 완료</Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        각 디렉토리 마다 Readme 파일이 존재 할테니 한번씩은 읽어 보시길
        바랍니다.
      </Text>
      <StatusBar style="auto" />
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
