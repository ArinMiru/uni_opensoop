import {
  View,
  Platform,
  TextInputProps,
  TouchableOpacity,
  Text,
} from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import textStyle from "../../../Styles/TextStyle";
import { OpenProfileIcon } from "../../IconCompo/ProfileIcon";
import QstButtonStyles from "../../../Styles/ListStyles/QstStyles/QstButtonStyles";
import { Entypo } from "@expo/vector-icons";
import { AnswerInputBox } from "./QstInputCompo";

/**
 * @Dowon(김도원 수정)
 * QstListButton
 * nickname: 닉네임
 * postanswer: 답변하기
 * postcontent: 게시글 내용
 * Interface ButtonProps 추가
 */

interface ButtonProps extends TextInputProps {
  children?: React.ReactNode;
  nickname?: string;
  postanswer?: string;
  postcontent?: string;
  postanswercontent?: string;
  onPress?: () => void;
}

const renderSeparator = () => (
  <View style={{ height: 1, backgroundColor: "#8B8B8B" }} />
);

//  ItemSeparatorComponent={renderSeparator} // 항목 사이에 구분선 삽입

export const QstListButton: React.FC<ButtonProps> = ({
  children,
  onPress,
  nickname,
  postcontent,
  postanswer,
}) => {
  return (
    <View style={QstButtonStyles.QstListStyle}>
      <View
        style={[
          QstButtonStyles.horizontalLine,
          {
            flex: 1.5,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <OpenProfileIcon />
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={[textStyle.semibold10, { color: "#00B45A", left: "2%" }]}
          >
            {nickname}
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={[
              textStyle.bold07,
              {
                color: "#00841D",
                textDecorationLine: "underline",
              },
            ]}
          >
            {postanswer}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1.5,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={[
              textStyle.semibold10,
              {
                color: "#000000",
                marginLeft: "6%",
              },
            ]}
          >
            {postcontent}
          </Text>
        </View>
        <View
          style={{
            flex: 0.16,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Entypo
              name="triangle-down"
              size={deviceWidth * 0.05}
              color="#00B45A"
            />
          </TouchableOpacity>
        </View>
      </View>
      {children}
    </View>
  );
};

export const QstListQstPushButton: React.FC<ButtonProps> = ({
  children,
  onPress,
  nickname,
  postcontent,
  postanswer,
  postanswercontent,
}) => {
  return (
    <View style={QstButtonStyles.QstListQstPushStyle}>
      <View
        style={[
          QstButtonStyles.horizontalLine,
          {
            flex: 1.5,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <OpenProfileIcon />
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={[
              textStyle.semibold10,
              { color: "#00B45A", left: "2%", textDecorationLine: "underline" },
            ]}
          >
            {nickname}
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={[
              textStyle.bold07,
              {
                color: "#00841D",
                textDecorationLine: "underline",
              },
            ]}
          >
            {postanswer}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1.5,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={[
              textStyle.semibold10,
              {
                color: "#000000",
                marginLeft: "6%",
              },
            ]}
          >
            {postcontent}
          </Text>
        </View>
        <View
          style={{
            flex: 0.16,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Entypo
              name="triangle-up"
              size={deviceWidth * 0.05}
              color="#00B45A"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <AnswerInputBox></AnswerInputBox>
      </View>
      <View
        style={{
          flex: 1.5,
          flexDirection: "row",
          marginLeft: deviceWidth * 0.06,
          alignItems: "center",
        }}
      >
        <View style={{ flex: 0.1 }}>
          <Entypo name="level-down" size={16} color="#24B50C" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[textStyle.medium09, { color: "#424C43" }]}>
            {postanswercontent}
          </Text>
        </View>
      </View>
      {children}
    </View>
  );
};
