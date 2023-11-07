import React from "react";
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";

//프로퍼티 타입 정의
interface ButtonProps {
  children?: React.ReactNode; //리액트로 타입 명시
  onPress?: () => void;
}

export const ListEdtDltButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginRight: deviceWidth * 0.05,
      }}
      onPress={onPress}
    >
      <SimpleLineIcons
        name="options-vertical"
        size={deviceWidth * 0.04}
        color="#37424D"
      />
      {children}
    </TouchableOpacity>
  );
};
