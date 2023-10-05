import React from "react";
import { TouchableOpacity, Text, View, Platform } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import OpenButtonStyle from "../../../Styles/ListStyles/OpenButtonStyle";
import { Entypo } from "@expo/vector-icons";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { PostProfileIcon } from "../../../Components/IconCompo/ProfileIcon";

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

/*
 * 게시판의 메인화면의 게시글의 백그라운드 버튼화면입니다.
 **/
export const SgsListButton: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={SgsButtonStyles.SgsListButtonStyle}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

/*
 * 건의게시판의 메인화면의 게시글 아래 시간 표시 박스입니다.
 **/
export const SgsTimeBox: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <View style={SgsButtonStyles.SgsListButtonEndBoxStyle}>
      {children},
      <Text style={[textStyle.regular07, { color: "#424C43" }]}>1초전</Text>
    </View>
  );
};

/*
 * 건의게시판의 게시글 삭제 버튼임미다.
 **/
export const SgsDelButton: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={SgsButtonStyles.SgsDelButtonStyle}
      onPress={onPress}
    >
      <Text
        style={[
          textStyle.medium09,
          {
            lineHeight: deviceHeight * 0.017,

            color: "#ffffff",
          },
        ]}
      >
        삭제
      </Text>
      {children}
    </TouchableOpacity>
  );
};

/*
 * 건의게시판의 게시글 화면입니다.
 **/

export const SqsPost: React.FC<ButtonProps> = ({
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
        <View style={{ flex: 6 }}></View>
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
        <SgsDelButton />
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
