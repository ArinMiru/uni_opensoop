import { View, Text, TouchableOpacity, TextInputProps } from "react-native";
import textStyle from "../../Styles/TextStyle";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { TextInput } from "react-native-gesture-handler";
import AccountButtonStyle from "../../Styles/AccountButtonStyle";
import AccountInputStyle from "../../Styles/AccountInputStyle";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface TextTopProps extends TextInputProps {
  children?: React.ReactNode;
  text?: string;
  inputText?: string;
  onPress?: () => void;
}

/*
회원가입 화면에 flex 2의 범위를 가진 텍스트 인풋, 짧은 버튼이 가로정렬된 컴포넌트
**/
export const RegiDupleFlex2: React.FC<TextTopProps> = ({
  children,
  text,
  inputText,
  onPress,
  ...props
}) => (
  <View style={{ flex: 2, flexDirection: "row" }}>
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[
        AccountInputStyle.srchDupleInputStyle,
        textStyle.medium14,
        { marginTop: deviceHeight * 0.03, marginRight: deviceWidth * 0.0375 },
      ]}
      placeholder={inputText}
      {...props}
    ></TextInput>
    <TouchableOpacity
      style={[
        AccountButtonStyle.srchDupleButtonStyle,
        { marginTop: deviceHeight * 0.03 },
      ]}
      onPress={onPress}
    >
      <Text style={[textStyle.semibold13, { color: "#fff" }]}>{text}</Text>
      {children}
    </TouchableOpacity>
  </View>
);

/*
  회원가입 화면에 flex 3의 범위를 가진 텍스트 인풋, 짧은 버튼이 가로정렬된 컴포넌트(SignUp폴더 안에 있는 파일의 (긴)인풋)
  **/
export const RegiDupleFlex3: React.FC<TextTopProps> = ({
  children,
  text,
  inputText,
  onPress,
  ...props
}) => (
  <View
    style={{
      flex: 3,
      justifyContent: "center",
      flexDirection: "row",
    }}
  >
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[
        AccountInputStyle.srchDupleInputStyle,
        textStyle.medium14,
        { marginTop: deviceHeight * 0.03, marginRight: deviceWidth * 0.0375 },
      ]}
      placeholder={inputText}
      {...props}
    ></TextInput>
    <TouchableOpacity
      style={[
        AccountButtonStyle.srchDupleButtonStyle,
        { marginTop: deviceHeight * 0.03 },
      ]}
      onPress={onPress}
    >
      <Text style={[textStyle.semibold13, { color: "#fff" }]}>{text}</Text>
      {children}
    </TouchableOpacity>
  </View>
);
