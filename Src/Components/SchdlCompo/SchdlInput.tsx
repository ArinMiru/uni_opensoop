import textStyle from "../../Styles/TextStyle";
import { TextInput, TextInputProps, Platform } from "react-native";
import SchdlInputStyle from "../../Styles/SchdlStyles/SchdlInputStyle";
import { deviceHeight } from "../../Utils/DeviceUtils";

interface inputProps extends TextInputProps {
  text: string; //문자열로 타입 명시
}

export const SchdlVoteRegiTitInput: React.FC<inputProps> = ({
  children,
  text,
  ...props
}) => {
  return (
    <TextInput
      placeholderTextColor="#BDBDBD"
      style={[
        SchdlInputStyle.SchdlVoteRegiTilteInputStyle,
        textStyle.medium14,
        SchdlInputStyle.RegiTitleUderBarStyle,
      ]}
      placeholder={text}
      {...props}
    />
  );
};
