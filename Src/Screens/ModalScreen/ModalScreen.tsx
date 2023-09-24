import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScreenProps } from "../../Navigations/StackNavigator";

interface ModalProps {
  children?: React.ReactNode;
  text: string;
}

const ModalScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{
        flex: 1, // 세로 크기를 디바이스의 20%로 설정
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column-reverse",
        paddingBottom: 0,
      }}
    >
      <TouchableOpacity
        style={{
          height: "100%",
          width: "100%",
          borderColor: "#000000",
          borderWidth: 10,
        }}
        onPress={toggleModal}
      >
        <Text>Open Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
