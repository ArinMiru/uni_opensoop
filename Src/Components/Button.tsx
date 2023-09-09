import React from "react";
import { TouchableOpacity, Text, Platform } from "react-native";
import Styles from "../Styles/ButtonStyle";
import textStyle from "../Styles/TextStyle";
import { Ionicons } from "@expo/vector-icons";
import { deviceHeight, deviceWidth } from "../Utils/DeviceUtils";


//  프로퍼티 타입 정의 
interface ButtonProps {
  children?: React.ReactNode;
  text: string;
  onPress?: () => void;
  navigation?: {navigate: (screenName: string) => void;}
}
interface BasicProps{

}

/**
 * 기본 긴 버튼
 * 사용법은 LongButton text="문자열"
 */

export const LongButton: React.FC<ButtonProps> = ({ children, text, onPress }) => {                // 파스칼 케이스 적용 
  return (
    <TouchableOpacity style={Styles.longButtonStyle} onPress={onPress}>
      <Text style={textStyle.textbase}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};
/**
 * 기본 짧은 버튼
 * 사용법은 ShortButton text = "문자열"
 */

export const ShortButton: React.FC<ButtonProps> = ({ children, text, onPress }) => {               // 파스칼 케이스 적용 
  return (
    <TouchableOpacity style={Styles.shortButtonStyle} onPress={onPress}>
      <Text style={textStyle.textbase}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 맨 처음 로그인 회원가입 화면에서 사용할 회원가입 버튼
 */

export const RegiButton: React.FC<ButtonProps> = ({ children, text, onPress }) => {
  return (
    <TouchableOpacity style={Styles.regiStyle} onPress={onPress}>
      <Text style={textStyle.regibuttontext}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 두 번째 로그인 화면에서 사용할 아이디찾기, 비밀번호찾기 버튼
 */
export const LoginButton: React.FC<ButtonProps> = ({ children, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.loginStyle}>
      <Text style={textStyle.loginbuttontext}>{text}</Text>
      {children}
    </TouchableOpacity>
  )
}

/**
 * chevron-back 아이콘에 해당하는 버튼 영역
 */
export const IconButton: React.FC<ButtonProps> = ({ children, text, onPress }) => {
  return (
    <TouchableOpacity style={{width : deviceWidth * 0.2 , height : deviceHeight * 0.05, }} onPress={onPress}><Ionicons style={{marginLeft:deviceWidth*0.06}} name="chevron-back" size={24} color="black"/>
      {children}
    </TouchableOpacity>
  )
}