import ListCommonInputStyle from "../../../Styles/ListStyles/ListCommonInputStyle";
import textStyle from "../../../Styles/TextStyle";
import React from "react";
import {
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";

interface inputProps extends TextInputProps {
  children?: React.ReactNode;
  text?: string;
  inputText?: string;
  onPress?: () => void;
  value: string;
  onChangeText: (text: string) => void;
}

export const OpenFreSgsTitInputBox: React.FC<inputProps> = ({
  text,
  ...props
}) => {
  // text 속성을 이용하여 최대 길이를 계산
  const maxLength = text ? text.length : 0;

  return (
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[
        ListCommonInputStyle.OpenFreSgsTitInputBoxStyle,
        textStyle.medium10,
      ]}
      placeholder={text}
      maxLength={30} // 최대 길이 설정
      {...props}
    />
  );
};

export const OpenFreSgsContInputBox: React.FC<inputProps> = ({
  text,
  ...props
}) => {
  // text 속성을 이용하여 최대 길이를 계산

  return (
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[
        ListCommonInputStyle.OpenFreSgsContInputBoxStyle,
        textStyle.medium10,
      ]}
      textAlignVertical="top"
      multiline={true}
      placeholder={text}
      {...props}
    />
  );
};
// 컴포넌트 이름 변경 AnsInput
export const CommentInput: React.FC<inputProps> = ({
  text,
  onPress,
  ...props
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TextInput
        style={[ListCommonInputStyle.FreeSqsCommentInputStyle]}
        placeholder={text}
        {...props}
      ></TextInput>
      <TouchableOpacity
        style={[
          ListCommonInputStyle.FreeSqsCommentButtonStyle,
          {
            position: "absolute",
            right: deviceWidth * 0.00093,
            marginRight: deviceWidth * 0.01,
          },
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            textStyle.semibold10,
            {
              color: "#FFFFFF",
              lineHeight: deviceHeight * 0.02,
            },
          ]}
        >
          등록
        </Text>
      </TouchableOpacity>
    </View>
  );
};
