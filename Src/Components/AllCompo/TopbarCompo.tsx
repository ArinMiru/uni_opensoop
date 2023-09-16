import Styles from "../../Styles/TopbarStyle";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import textStyle from "../../Styles/TextStyle";
import { Feather } from "@expo/vector-icons";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

//프로퍼티 타입 정의
interface inputProps {
  children?: React.ReactNode; //리액트로 타입 명시
  text: string; //문자열로 타입 명시
  onPress?: () => void;
}

/**
 * App 화면 상단 초록색 상단 바(공지사항, 게시판, 투표, 캘린더))
 * (2023.09.14 김도원 생성)
 */
export const MenuTopbar: React.FC<inputProps> = ({
  children,
  text,
  onPress,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.Topbar}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: deviceWidth * 0.1,
            marginLeft: deviceWidth * 0.06,
          }}
          onPress={onPress}
        >
          <Feather name="menu" size={deviceWidth * 0.08} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            textStyle.semibold19,
            {
              color: "#FFFFFF",
            },
          ]}
        >
          {text}
        </Text>
      </View>

      <View style={{ flex: 1 }}></View>
      {children}
    </View>
  );
};

export const MenuTopbarManager: React.FC<inputProps> = ({
  children,
  text,
  onPress,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.Topbar}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: deviceWidth * 0.1,
            marginLeft: deviceWidth * 0.06,
          }}
          onPress={onPress}
        >
          <Feather name="menu" size={deviceWidth * 0.08} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            textStyle.semibold19,
            {
              color: "#FFFFFF",
            },
          ]}
        >
          {text}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: deviceWidth * 0.1,
            marginRight: deviceWidth * 0.06,
          }}
          onPress={onPress}
        >
          <Feather
            name="plus-circle"
            size={deviceWidth * 0.07}
            color="#ffffff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const BackIocnTopbar: React.FC<inputProps> = ({ children, text }) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.Topbar}>
      <Text style={[textStyle.semibold19, { color: "#FFFFFF" }]}>{text}</Text>
      {children}
    </View>
  );
};

export const BackIconEditDelRegiTopbar: React.FC<inputProps> = ({
  children,
  text,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.Topbar}>
      <Text style={[textStyle.semibold19, { color: "#FFFFFF" }]}>{text}</Text>
      {children}
    </View>
  );
};
