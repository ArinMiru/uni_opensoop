import React, { useEffect, useRef } from "react";
import { Alert, View } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Navigations/StackNavigator";
import { checkStoredJWTToken } from "../../Utils/_private/.secure/.autoLogin";
import { autoLogin } from "../../Services/_private/EndPointApiFuntion";

// ScreenProps 타입 정의
export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
};

interface LoadingScreenProps extends ScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ navigation }) => {
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    const jwtAutoLogin = async () => {
      try {
        const tokenCheck = await checkStoredJWTToken();

        if (tokenCheck !== null) {
          const loginauto = await autoLogin(tokenCheck);

          if (loginauto !== null && loginauto === "00") {
            setTimeout(() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "BottomTabNavigations" }],
              });
            }, 1500);
          } else {
            // 로그인 실패 시 사용자에게 6초 동안 대기 후 피드백 제공
            setTimeout(() => {
              navigation.navigate("AccountLoginRegi");
            }, 6000);
          }
        } else {
          // 토큰이 없는 경우 6초 동안 대기 후 화면 전환
          setTimeout(() => {
            navigation.navigate("AccountLoginRegi");
          }, 6000);
        }
      } catch (error) {
        console.error("JWT 토큰 확인 및 자동 로그인 오류:", error);
        Alert.alert("자동 로그인 오류", "자동 로그인에 실패하였습니다.");
        // 예외 발생 시 사용자에게 피드백 제공
        setTimeout(() => {
          navigation.navigate("AccountLoginRegi");
        }, 3000);
      }
    };

    jwtAutoLogin();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
      />
    </View>
  );
};

export default LoadingScreen;
