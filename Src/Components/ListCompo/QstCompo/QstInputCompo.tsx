import { View, Text, TouchableOpacity, TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import QstInputStyles from "../../../Styles/ListStyles/QstStyles/QstInputStyles";
import TextStyle from "../../../Styles/TextStyle";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import QstButtonStyles from "../../../Styles/ListStyles/QstStyles/QstButtonStyles";

interface TextTopProps extends TextInputProps {
  children?: React.ReactNode;
  text?: string;
  inputText?: string;
  onPress?: () => void;
}

/*
질문게시판에서 답변할때 사용하는 인풋(안에 등록버튼있는) 컴포넌트입니다.
**/
export const AnswerInputBox: React.FC<TextTopProps> = ({
  children,
  inputText,
  onPress,
}) => (
  <View style={{ flex: 1, flexDirection: "row" }}>
    <TextInput
      style={[QstInputStyles.AnswerInputBoxStyle, TextStyle.medium09]}
    ></TextInput>
    <TouchableOpacity
      style={QstButtonStyles.QstAnswerButtonStyle}
      onPress={onPress}
    >
      <Text
        style={[
          TextStyle.medium09,
          {
            color: "#FFFFFF",
            lineHeight: deviceHeight * 0.02,
          },
        ]}
      >
        등록
      </Text>
      {children}
    </TouchableOpacity>
  </View>
);
