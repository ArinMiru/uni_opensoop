import { View, Text, TextInputProps } from "react-native";
import { deviceWidth } from "../../Utils/DeviceUtils";
import TextStyle from "../../Styles/TextStyle";

interface TextTopProps extends TextInputProps {
  children?: React.ReactNode;
  text?: string;
  inputText?: string;
}

/*
 *회원가입 화면에서 flex 1의 범위를 가진 '회원가입' 글자 컴포넌트
 **/
export const RegiTextflex1: React.FC<TextTopProps> = ({ children, text }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "flex-end",
      marginRight: deviceWidth * 0.55,
    }}
  >
    <Text style={TextStyle.bold25}>{text}</Text>
    {children}
  </View>
);

/*
 *회원가입 화면에서 flex 2의 범위를 가진 '회원가입' 글자 컴포넌트
 **/
export const RegiTextflex2: React.FC<TextTopProps> = ({ children, text }) => (
  <View
    style={{
      flex: 2,
      justifyContent: "flex-end",
      marginRight: deviceWidth * 0.55,
    }}
  >
    <Text style={TextStyle.bold25}>{text}</Text>
    {children}
  </View>
);
