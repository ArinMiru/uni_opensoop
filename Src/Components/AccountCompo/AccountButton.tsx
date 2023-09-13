import { Children } from "react";
import ButtonStyle from "../../Styles/ButtonStyle";
import { TouchableOpacity, Text } from "react-native";
import textStyle from "../../Styles/TextStyle";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * 예시일뿐 쓰면 안이쁨
 * @param param0
 * @returns
 */
export const SrchDupleButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity style={ButtonStyle.srchDupleButtonStyl} onPress={onPress}>
      <Text style={[textStyle.semibold13, { color: "#ffffff" }]}>{text} </Text>
      {children}
    </TouchableOpacity>
  );
};
