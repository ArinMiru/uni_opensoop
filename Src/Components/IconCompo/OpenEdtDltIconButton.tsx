import React from "react";
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";

//프로퍼티 타입 정의
interface ButtonProps {
  children?: React.ReactNode; //리액트로 타입 명시
  onPress?: () => void;
}

/**
 * @ArinMiru(김도원 생성)
 * OpenEdtDltButton
 * 공지사항 ... 아이콘 ( 관리자 권한일 때만 렌더링 )
 * OpenEdtDltButton 컴포넌트는 수정, 삭제 ModalScreen 을 렌더링하는 컴포넌트입니다.
 */

export const OpenEdtDltButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginRight: deviceWidth * 0.06,
      }}
      onPress={onPress}
    >
      <SimpleLineIcons
        name="options"
        size={deviceWidth * 0.053}
        color="#37424D"
      />
      {children}
    </TouchableOpacity>
  );
};
