/**
 * VoteButton Components (Figma 참고)
 */

import { TouchableOpacity, Text } from "react-native";
import textStyle from "../../Styles/TextStyle";
import VoteButtonStyle from "../../Styles/VoteButtonStyle";
import { AntDesign } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * @param param0
 * @returns
 */

/**
 * 투표 선택 후 상태 버튼
 */
export const VoteSlctButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity style={VoteButtonStyle.voteSlctStyle} onPress={onPress}>
      <Text style={[textStyle.medium13, { color: "#166D41" }]}>{text} </Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 투표 선택 전 상태 버튼
 */
export const VoteUnSlctButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity style={VoteButtonStyle.voteUnSlctStyle} onPress={onPress}>
      <Text style={[textStyle.medium13, { color: "#166D41" }]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 투표 현황 페이지 버튼
 */
export const VoteStatusPageButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={VoteButtonStyle.voteStatusPageStyle}
      onPress={onPress}
    >
      <Text style={[textStyle.medium13, { color: "#166D41" }]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 투표 현황보기 버튼
 */
export const VoteStatusButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity style={VoteButtonStyle.voteStatusStyle} onPress={onPress}>
      <Text style={[textStyle.regular13, { color: "#67B28A" }]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 투표하기 버튼
 */
export const VoteRegiButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity style={VoteButtonStyle.voteStatusStyle} onPress={onPress}>
      <Text style={[textStyle.semibold13, { color: "#FFFFFF" }]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 투표 선택지 늘리는 버튼
 */
export const AddVoteOptionButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={VoteButtonStyle.addVoteOptionStyle}
      onPress={onPress}
    >
      <AntDesign
        style={{ marginLeft: deviceWidth * 0.06 }}
        name="plus"
        size={21}
        color="#FFFFFF"
        borderWidth="1.5"
      />
      {children}
    </TouchableOpacity>
  );
};
