import { View, Text, TouchableOpacity, TextInputProps } from "react-native";
import textStyle from "../../Styles/TextStyle";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";
import { TextInput } from "react-native-gesture-handler";
import AccountButtonStyle from "../../Styles/AccountStyles/AccountButtonStyle";
import AccountInputStyle from "../../Styles/AccountStyles/AccountInputStyle";

interface TextTopProps extends TextInputProps {
  children?: React.ReactNode;
  text?: string;
  inputText?: string;
  onPress?: () => void;
}

/*
회원가입 화면에 flex 2의 범위를 가진 텍스트 인풋, 짧은 버튼이 가로정렬된 컴포넌트
**/
export const RegiDupleFlex2: React.FC<
  TextTopProps & { validationMessage?: string; validationColor?: string }
> = ({
  children,
  text,
  inputText,
  onPress,
  validationMessage,
  validationColor,
  ...props
}) => (
  <View style={{ flex: 2 }}>
    <View style={{ flexDirection: "row" }}>
      <TextInput
        placeholderTextColor="#BDBDBD"
        style={[
          AccountInputStyle.srchDupleInputStyle,
          textStyle.medium12,
          { marginTop: deviceHeight * 0.04, marginRight: deviceWidth * 0.0375 },
        ]}
        placeholder={inputText}
        {...props}
      ></TextInput>
      <TouchableOpacity
        style={[
          AccountButtonStyle.srchDupleButtonStyle,
          { marginTop: deviceHeight * 0.04 },
        ]}
        onPress={onPress}
      >
        <Text style={[textStyle.semibold13, { color: "#fff" }]}>{text}</Text>
        {children}
      </TouchableOpacity>
    </View>
    <View style={{ paddingLeft: deviceHeight * 0.01 }}>
      <Text style={{ color: validationColor }}>{validationMessage}</Text>
    </View>
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
        textStyle.medium12,
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
