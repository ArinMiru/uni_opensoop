/**
 * VoteButton Components (Figma 참고)
 */

import { TouchableOpacity, Text, View } from "react-native";
import textStyle from "../../Styles/TextStyle";
import VoteButtonStyle from "../../Styles/VoteStyles/VoteButtonStyle";
import { AntDesign } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";
import { Entypo } from "@expo/vector-icons";

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

/**
 * 투표 선택지 늘리는 버튼
 */
export const ViewUnvottedButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <View
      style={{
        flex: 1,
        width: deviceWidth * 1,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={[
          VoteButtonStyle.viewUnvottedButtonStyle,
          { left: deviceWidth * 0.06 },
          { flexDirection: "row" },
          { justifyContent: "center" },
          { alignItems: "center" },
        ]}
        onPress={onPress}
      >
        <Entypo name="circle" size={deviceWidth * 0.05} color="#4BB781" />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={[
              textStyle.medium13,
              { color: "#212121" },
              { left: deviceWidth * 0.01 },
              { lineHeight: deviceWidth * 0.06 },
            ]}
          >
            미투표 보기
          </Text>
        </View>
        {children}
      </TouchableOpacity>
    </View>
  );
};

/**
 * 투표 선택지 늘리는 버튼
 */
export const VoteListButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={VoteButtonStyle.VoteListButtonStyle}
      onPress={onPress}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#888888",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <View style={{ flex: 0.2 }}>
          <Text>111</Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "column",
            backgroundColor: "#666666",
          }}
        >
          <Text>111</Text>
          <View style={{ flex: 1 }}>
            <Text>222</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text>333</Text>
        </View>
      </View>
      {children}
    </TouchableOpacity>
  );
};
