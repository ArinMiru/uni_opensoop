import React from "react";
import { TouchableOpacity, Text, View, Platform } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import OpenButtonStyle from "../../../Styles/ListStyles/OpenButtonStyle";
import { Entypo } from "@expo/vector-icons";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { PostProfileIcon } from "../../../Components/IconCompo/ProfileIcon";
import { FreEditDelButton, FreLikeButtton } from "../FreCompo/FreButtonCompo";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  nickname?: string;
  sgsposttime?: string;
  sgstit?: string;
  sgscont?: string;
  commtnick?: string;
  comtt?: string;
  commtime?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

// 건의 게시판과 공통되는 화면이기 때문에 건의 게시판의 .style을 그대로 가져왔습니다.

/*
 * 자유게시판의 게시글 화면입니다.
 **/

export const FrePost: React.FC<ButtonProps> = ({
  children,
  nickname,
  sgsposttime,
  sgstit,
  sgscont,
  onPress,
}) => {
  return (
    <View
      style={{
        width: deviceWidth * 0.868,
        height: deviceHeight * 0.174,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={[
          SgsButtonStyles.horizontalLine,
          {
            flex: 1.5,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <View style={{ flex: 1 }}>
          <PostProfileIcon />
        </View>
        <View
          style={{
            flex: 1.5,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[textStyle.semibold12, { color: "#4BB781" }]}>
            {nickname}
          </Text>
        </View>
        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text
            style={[
              textStyle.regular08,
              {
                color: "#000000",
              },
            ]}
          >
            {sgsposttime}
          </Text>
        </View>
        <View style={{ flex: 6, alignItems: "flex-end" }}>
          <FreLikeButtton like="150" />
        </View>
      </View>

      <View
        style={{
          flex: 2,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Text
          style={[
            textStyle.semibold12,
            {
              color: "#000000",
            },
          ]}
        >
          {sgstit}
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Text
          style={[
            textStyle.regular10,
            {
              color: "#424C43",
            },
          ]}
        >
          {sgscont}
        </Text>
      </View>
      {children}
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
        }}
      >
        <FreEditDelButton />
      </View>
    </View>
  );
};

export const SqsComment: React.FC<ButtonProps> = ({
  commtnick,
  comtt,
  commtime,
  onPress,
}) => {
  return (
    <View
      style={{
        width: deviceWidth * 0.862,
        height: deviceHeight * 0.088,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: deviceWidth * 0.862,
          height: deviceHeight * 0.045,
          marginTop: "2%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <PostProfileIcon />
        </View>
        <View style={{ flex: 7.5 }}>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={[textStyle.semibold10, { color: "#00B45A" }]}>
              {commtnick}
            </Text>
          </View>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text style={[textStyle.medium09, { color: "#424C43" }]}>
              {comtt}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[textStyle.regular07, { color: "#000000" }]}>
            {commtime}
          </Text>
        </View>
      </View>
    </View>
  );
};
