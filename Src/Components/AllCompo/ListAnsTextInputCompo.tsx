import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  TextInputProps,
} from "react-native";
import textStyle from "../../Styles/TextStyle";
import QstInputStyles from "../../Styles/ListStyles/QstStyles/QstInputStyles";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";
import { Ionicons } from "@expo/vector-icons";

interface inputProps extends TextInputProps {
  text?: string;
  onPress?: () => void;
}

export const ListAnsTextInput: React.FC<inputProps> = ({
  text,
  onPress,
  ...props
}) => {
  return (
    <View
      style={{
        height: deviceHeight * 0.1,
        bottom: deviceHeight * 0.00005,
        flexDirection: "row-reverse",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 13,
        backgroundColor: "#FFFFFF",
      }}
    >
      <TextInput
        placeholderTextColor="#BDBDBD"
        style={[QstInputStyles.AnswerInputBoxStyle, textStyle.medium11]}
        placeholder={"답변을 입력해주세요"}
        keyboardType="default"
        {...props}
      />
      <View
        style={{
          position: "absolute",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{ marginRight: deviceWidth * 0.07 }}
          onPress={onPress}
        >
          <Ionicons
            name="send-sharp"
            size={deviceWidth * 0.045}
            color="#4BB781"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
