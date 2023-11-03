import React from "react";
import { Text, View } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import {
  FreSgsProfileIcon,
  FreSgsAnsProfileIcon,
} from "../../../Components/IconCompo/ProfileIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ButtonProps {
  children?: React.ReactNode;
  nickname?: string;
  freposttime?: string;
  fretit?: string;
  frecont?: string;
  frelike?: number;
  freqstansnick?: string;
  freqstanstit?: string;
  freqstanstime?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
  editPress?: () => void;
  delPress?: () => void;
}

// 건의 게시판과 공통되는 화면이기 때문에 건의 게시판의 .style을 그대로 가져왔습니다.

/*
 * 자유게시판의 게시글 화면입니다.
 **/

export const FrePost: React.FC<ButtonProps> = ({
  children,
  nickname,
  freposttime,
  fretit,
  frecont,
  frelike,
  onPress,
}) => {
  return (
    <View
      style={{
        width: deviceWidth * 0.868,
        marginLeft: deviceWidth * 0.06,
        marginRight: deviceWidth * 0.06,
        minHeight: deviceHeight * 0.2,
        marginTop: deviceHeight * 0.018,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={[
          {
            flex: 1.5,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <View>
          <FreSgsProfileIcon />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={[textStyle.semibold12, { color: "#151515" }]}>
            {nickname}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <Text style={[textStyle.regular08, { color: "#000000" }]}>
            {freposttime}
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          width: "100%",
          height: deviceHeight * 0.08,
          justifyContent: "center",
        }}
      >
        <Text style={[textStyle.semibold14, { color: "#333333" }]}>
          {fretit}
        </Text>
      </View>
      <View
        style={{
          height: "auto",
          width: "100%",
          marginTop: deviceHeight * 0.01,
        }}
      >
        <Text style={[textStyle.regular11, { color: "#151515" }]}>
          {frecont}
        </Text>
      </View>
      {children}
      <View
        style={{
          width: deviceWidth * 1,
          alignItems: "flex-end",
          marginTop: deviceHeight * 0.018,
        }}
      >
        <View style={[SgsButtonStyles.divideContentsLine]} />
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "row",
          marginTop: deviceHeight * 0.018,
        }}
      >
        <MaterialCommunityIcons
          name="message-reply-text"
          size={deviceWidth * 0.06}
          color="#4BB781"
        />
        <Text
          style={[
            textStyle.semibold12,
            { color: "#151515" },
            { marginLeft: deviceWidth * 0.019 },
            { lineHeight: deviceWidth * 0.06 },
          ]}
        >
          {"댓글"}
        </Text>
      </View>
    </View>
  );
};

export const FreQstComment: React.FC<ButtonProps> = ({
  freqstansnick,
  freqstanstit,
  freqstanstime,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: deviceWidth * 0.868,
        minHeight: deviceHeight * 0.09,
        marginTop: deviceHeight * 0.017,
      }}
    >
      <View>
        <FreSgsAnsProfileIcon />
      </View>
      <View
        style={{
          width: deviceWidth * 0.57,
          flexDirection: "column",
        }}
      >
        <View style={{ marginLeft: deviceWidth * 0.02 }}>
          <Text
            style={[
              textStyle.semibold09,
              { color: "#151515" },
              { lineHeight: deviceWidth * 0.04 },
            ]}
          >
            {freqstansnick}
          </Text>
        </View>
        <View
          style={{
            height: "auto",
            marginLeft: deviceWidth * 0.02,
            marginTop: deviceHeight * 0.001,
          }}
        >
          <Text style={[textStyle.regular12, { color: "#151515" }]}>
            {freqstanstit}
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          paddingTop: deviceHeight * 0.006,
        }}
      >
        <Text style={[textStyle.semibold08, { color: "#919191" }]}>
          {freqstanstime}
        </Text>
      </View>
    </View>
  );
};

export const QstComment: React.FC<ButtonProps> = ({
  freqstansnick,
  freqstanstit,
  freqstanstime,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: deviceWidth * 0.868,
        minHeight: deviceHeight * 0.09,
        marginTop: deviceHeight * 0.017,
      }}
    >
      <View style={{ flex: 0.5 }}>
        <FreSgsAnsProfileIcon />
      </View>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <View style={{ marginLeft: deviceWidth * 0.02 }}>
          <Text
            style={[
              textStyle.semibold09,
              { color: "#151515" },
              { paddingTop: deviceHeight * 0.006 },
              { lineHeight: deviceWidth * 0.04 },
            ]}
          >
            {freqstansnick}
          </Text>
        </View>
        <View
          style={{
            height: "auto",
            width: deviceWidth * 0.55,
            marginLeft: deviceWidth * 0.02,
            marginTop: deviceHeight * 0.0,
          }}
        >
          <Text
            style={[
              textStyle.regular12,
              { color: "#151515" },
              { lineHeight: deviceWidth * 0.055 },
            ]}
          >
            {freqstanstit}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "flex-end",
          paddingLeft: deviceWidth * 0.02,
        }}
      >
        <Text
          style={[
            textStyle.semibold08,
            { color: "#919191" },
            { textAlign: "left" },
          ]}
        >
          {freqstanstime}
        </Text>
      </View>
    </View>
  );
};
