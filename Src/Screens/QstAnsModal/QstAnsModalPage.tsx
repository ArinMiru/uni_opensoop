import React from "react";
import NewBackgroundStyle from "../../Styles/NewBackgroundStyle";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  interpolate,
} from "react-native-reanimated";
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { QstAnsTextInput } from "../../Components/AllCompo/ListAnsTextInputCompo";
import { Dimensions } from "react-native";
import { QstComment } from "../../Components/ListCompo/FreCompo/FreCompo";
import textStyle from "../../Styles/TextStyle";

interface ScreenProps {
  navigation?: { navigate: (screenName: string) => void };
}

const deviceHeight = Dimensions.get("window").height;

const getKeyboardHeight = () => {
  if (Platform.OS === "ios") {
    if (deviceHeight <= 667) {
      return deviceHeight * 0.04;
    }
    if (deviceHeight <= 932) {
      return deviceHeight * 0.0002;
    } else {
      return deviceHeight * 0.0002;
    }
  } else {
    return deviceHeight * 0.0001;
  }
};

const QstAnsModalPage: React.FC<ScreenProps> = ({ navigation }) => {
  const inputY = useSharedValue(0);
  const modalY = useSharedValue(deviceHeight); // 모달의 Y 위치를 저장하는 shared value
  const backgroundOpacity = useSharedValue(0); // 배경의 opacity를 저장하는 shared value

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      opacity: backgroundOpacity.value, // 배경 opacity 설정
    };
  }, []);

  // 모달 애니메이션 스타일을 조정합니다.
  const animatedModalStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: modalY.value }],
    };
  });

  // 드래그 핸들러 함수를 작성합니다.
  const onGestureEvent = useAnimatedGestureHandler({
    onActive: (event) => {
      modalY.value = event.translationY > 0 ? event.translationY : 0; // 모달 위치 업데이트
      backgroundOpacity.value = interpolate(
        modalY.value,
        [0, deviceHeight],
        [0.5, 0]
      ); // 배경 opacity 업데이트
    },
    onEnd: () => {
      if (modalY.value > deviceHeight / 2) {
        // 모달을 중간 이상 드래그 했을 경우
        modalY.value = withSpring(deviceHeight); // 모달을 아래로 숨김
        backgroundOpacity.value = withSpring(0); // 배경을 투명하게
      } else {
        // 중간 이하로 드래그 했을 경우
        modalY.value = withSpring(0); // 모달을 원위치
        backgroundOpacity.value = withSpring(0.5); // 배경을 어둡게
      }
    },
  });

  const animatedInputStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: inputY.value }],
    };
  });

  const keyboardAvoidingBehavior =
    Platform.OS === "ios" ? "padding" : undefined;

  return (
    <KeyboardAvoidingView
      style={NewBackgroundStyle.container}
      behavior={keyboardAvoidingBehavior}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              animatedBackgroundStyle,
              { backgroundColor: "rgba(0, 0, 0, 0.5)" }, // 배경색 투명도 조정
            ]}
          />
          <View style={NewBackgroundStyle.modalTopBar}>
            <View style={NewBackgroundStyle.draggableIndicator} />
            <Text style={[textStyle.bold18]}>댓글</Text>
          </View>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={NewBackgroundStyle.modalView}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <QstComment
                  freqstansnick="재경재경"
                  freqstanstit="질문게시판 댓글 모달 창 입니다~"
                  freqstanstime="2023-10-31"
                />
              </View>
            </View>
          </ScrollView>
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[animatedInputStyle]}>
              <View>
                <QstAnsTextInput
                  onFocus={() => {
                    inputY.value = withSpring(-getKeyboardHeight());
                  }}
                  onBlur={() => {
                    inputY.value = withSpring(0);
                  }}
                />
              </View>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default QstAnsModalPage;
