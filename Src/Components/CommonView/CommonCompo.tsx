import { View, Text, TouchableOpacity, TextInputProps } from "react-native";
import textStyle from "../../Styles/TextStyle";
import shortButtonStyle from "../../Styles/ButtonStyle";
import longButtonStyle from "../../Styles/ButtonStyle";
import TextInputStyle from "../../Styles/TextInputStyle";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";
import { TextInput } from "react-native-gesture-handler";

interface TextTopProps extends TextInputProps {
  children?: React.ReactNode;
  text?: string;
  inputText?: string;
}

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/*
회원가입 화면에서 flex 1의 범위를 가진 '회원가입' 글자 컴포넌트
**/
export const RegiText1: React.FC<TextTopProps> = ({ children, text }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "flex-end",
      marginRight: deviceWidth * 0.5,
    }}
  >
    <Text style={{ fontSize: 30, fontFamily: "Bold" }}>{text}</Text>
    {children}
  </View>
);

/*
회원가입 화면에서 flex 2의 범위를 가진 '회원가입' 글자 컴포넌트
**/
export const RegiText2: React.FC<TextTopProps> = ({ children, text }) => (
  <View
    style={{
      flex: 2,
      justifyContent: "flex-end",
      marginRight: deviceWidth * 0.5,
    }}
  >
    <Text style={{ fontSize: 30, fontFamily: "Bold" }}>{text}</Text>
    {children}
  </View>
);

/*
회원가입 화면에 flex 2의 범위를 가진 텍스트 인풋, 짧은 버튼이 가로정렬된 컴포넌트
**/
export const RegiCommonButton2: React.FC<TextTopProps> = ({
  children,
  text,
  inputText,
}) => (
  <View
    style={{ flex: 2, marginTop: deviceHeight * 0.03, flexDirection: "row" }}
  >
    <TextInput
      placeholderTextColor="#8391A1"
      style={TextInputStyle.shortInput}
      placeholder={inputText}
    ></TextInput>
    <TouchableOpacity style={shortButtonStyle.shortButtonStyle}>
      <Text style={textStyle.textbase}>{text}</Text>
      {children}
    </TouchableOpacity>
  </View>
);

/*
회원가입 화면에 flex 3의 범위를 가진 텍스트 인풋, 짧은 버튼이 가로정렬된 컴포넌트
**/
export const RegiCommonButton3: React.FC<TextTopProps> = ({
  children,
  text,
  inputText,
  ...props
}) => (
  <View
    style={{
      flex: 3,
      justifyContent: "center",
      marginTop: deviceHeight * 0.03,
      flexDirection: "row",
    }}
  >
    <TextInput
      placeholderTextColor="#8391A1"
      style={TextInputStyle.shortInput}
      placeholder={inputText}
      {...props}
    ></TextInput>
    <TouchableOpacity style={shortButtonStyle.shortButtonStyle}>
      <Text style={textStyle.textbase}>{text}</Text>
      {children}
    </TouchableOpacity>
  </View>
);

/*
회원가입 화면에서 다음 버튼 컴포넌트
**/
export const RegiNextButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => (
  <View style={{ flex: 4, justifyContent: "flex-start", alignItems: "center" }}>
    <TouchableOpacity onPress={onPress} style={longButtonStyle.longButtonStyle}>
      <Text style={textStyle.textbase}>{text}</Text>
      {children}
    </TouchableOpacity>
  </View>
);
