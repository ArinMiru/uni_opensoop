import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigations/StackNavigator";

// ScreenProps 타입 정의
export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
};

interface LoadingScreenProps extends ScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ navigation }) => {
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    const checkLoading = async () => {
      const status = await videoRef.current?.getStatusAsync();
      if (status?.isLoaded) {
        // 5초 후에 AccountLogin 화면으로 이동
        setTimeout(() => {
          navigation.replace("AccountLoginRegi");
        }, 5000);
      }
    };

    checkLoading();
  }, []);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={require("../../Assets/Images/Loading.mp4")} // 비디오 파일 경로
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
        isLooping
        style={{ width: "100%", height: "100%" }}
        onPlaybackStatusUpdate={(status) => {
          if (status.isLoaded && status.didJustFinish) {
            // 비디오 재생이 끝나면 AccountLogin 화면으로 이동
            navigation.replace("AccountLoginRegi");
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingScreen;
