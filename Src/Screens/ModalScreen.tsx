// ModalScreen.tsx

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScreenProps } from "../Navigations/StackNavigator";            // 타입 임포트

interface ModalProps {                                                  // 속성 지정                                                              
  children?: React.ReactNode;                                           //리액트로 타입 명시
  text: string;                                                         //문자열로 타입 명시
}

const ModalScreen: React.FC<ScreenProps> = ({ navigation }) => {        // 타입을 명시적으로 설정
  const closeModal = () => {
    navigation.goBack();                                                // 모달을 닫기 위한 함수를 정의합니다.
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          height: "50%",
          width: "100%",
          borderColor: "#000000",
          borderWidth: 10,
        }}
        onPress={closeModal}
      >
        <Text>
          Modal Test 스타일 수정 해야 함. 스타이 적용 안되어 있음. 그냥 이 영역
          누르거나 드래그 해서 밑으로 내리면 모달 꺼짐
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
