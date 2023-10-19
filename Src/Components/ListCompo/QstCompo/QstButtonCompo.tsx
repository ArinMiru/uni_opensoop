import { View, TextInputProps, TouchableOpacity, Text } from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import textStyle from "../../../Styles/TextStyle";
import { OpenProfileIcon } from "../../IconCompo/ProfileIcon";
import QstButtonStyles from "../../../Styles/ListStyles/QstStyles/QstButtonStyles";
import { Entypo } from "@expo/vector-icons";
import { AnswerInputBox } from "./QstInputCompo";
import { ChatIcon } from "../../IconCompo/ChatIcon";
import { Qicon } from "../../IconCompo/Qicon";
import { QstListButton } from "../QstCompo/QstCompo";
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
  title?: string;
  nickname?: string;
  postanswer?: string;
  postcontent?: string;
  postanswercontent?: string;
  qstposttime?: string;
  grade?: string;
  onPress?: () => void;
}

const renderSeparator = () => (
  <View style={{ height: 1, backgroundColor: "#8B8B8B" }} />
);

//  ItemSeparatorComponent={renderSeparator} // 항목 사이에 구분선 삽입

export const QstListContentButton: React.FC<ButtonProps> = ({
  children,
  onPress,
  nickname,
  postcontent,
  postanswer,
  grade,
  qstposttime,
  title,
}) => {
  return (
    <QstListButton onPress={onPress}>
      <View
        style={[
          {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <View style={{ marginLeft: deviceWidth * 0.034 }}>
          <Qicon />
        </View>
        <View
          style={{
            flex: 5,
            justifyContent: "center",
            height: "100%",
            marginLeft: deviceHeight * 0.011,
          }}
        >
          <Text
            style={[
              textStyle.semibold10,
              {
                color: "#969996",
              },
            ]}
          >
            {postcontent}
          </Text>
        </View>
        <View
          style={{
            flex: 1.5,
            height: "100%",
            alignItems: "flex-end",
            justifyContent: "center",
            marginRight: deviceWidth * 0.034,
          }}
        >
          <Text
            style={[
              textStyle.semibold05,
              {
                color: "#919191",
              },
            ]}
          >
            {qstposttime}
          </Text>
        </View>
      </View>

      {/* 두번 쨰 뷰 */}

      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 5,
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ marginLeft: deviceWidth * 0.034 }}>
            <OpenProfileIcon />
          </View>
          <View
            style={{
              alignItems: "flex-start",
              marginLeft: deviceWidth * 0.02,
            }}
          >
            <Text style={[textStyle.semibold08, { color: "#151515" }]}>
              {nickname}
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-start",
              marginLeft: deviceWidth * 0.006,
            }}
          >
            <Text style={[textStyle.semibold05, { color: "#919191" }]}>
              {grade}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1.5,
            flexDirection: "row",
            height: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            marginRight: deviceWidth * 0.034,
          }}
        >
          <View>
            <ChatIcon />
          </View>
          <View>
            <Text
              style={[
                textStyle.semibold07,
                { color: "#4BB781", marginLeft: deviceWidth * 0.018 },
              ]}
            >
              8{postanswer}
            </Text>
          </View>
        </View>
      </View>
      {children}
    </QstListButton>
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
