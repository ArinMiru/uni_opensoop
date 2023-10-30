import { View, Text, TouchableOpacity, TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";
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
  text,
  onPress,
}) => {
  const maxLength = text ? text.length : 0;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TextInput
        style={[QstInputStyles.AnswerInputBoxStyle]}
        placeholder={text}
        maxLength={30}
      ></TextInput>
      <TouchableOpacity
        style={[
          QstButtonStyles.QstAnswerButtonStyle,
          {
            position: "absolute",
            right: deviceWidth * 0.00093,
          },
        ]}
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
};

export const QstContInputBox: React.FC<TextTopProps> = ({
  children,
  text,
  ...props
}) => {
  return (
    <TextInput
      placeholderTextColor="#BDBDBD"
      placeholder={text}
      style={[
        QstInputStyles.QstContInputBoxStyle,
        TextStyle.medium12,
        { height: "auto" },
      ]}
      textAlignVertical="top"
      multiline={true}
      {...props}
    />
  );
};
