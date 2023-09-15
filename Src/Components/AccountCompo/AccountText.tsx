import { View, Text, TextInputProps } from "react-native";
import { deviceWidth } from "../../Utils/DeviceUtils";
import textStyle from "../../Styles/TextStyle";

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
      width: deviceWidth * 1,
      justifyContent: "flex-end",
    }}
  >
    <Text
      style={[
        textStyle.bold25,
        { color: "#424C43", marginLeft: deviceWidth * 0.1 },
      ]}
    >
      {text}
    </Text>
    {children}
  </View>
);
