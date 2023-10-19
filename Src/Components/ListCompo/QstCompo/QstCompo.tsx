import { TextInputProps, TouchableOpacity } from "react-native";
import QstButtonStyles from "../../../Styles/ListStyles/QstStyles/QstButtonStyles";

interface ButtonProps extends TextInputProps {
  children?: React.ReactNode;
  onPress?: () => void;
}

export const QstListButton: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={QstButtonStyles.QstListStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
