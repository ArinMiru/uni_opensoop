import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { PostProfileIcon } from "../../../Components/IconCompo/ProfileIcon";
import {
  FreSgsProfileIcon,
  FreSgsAnsProfileIcon,
} from "../../../Components/IconCompo/ProfileIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  nickname?: string;
  sgsposttime?: string;
  sgstit?: string;
  sgscont?: string;
  sgsansnick?: string;
  sgsanstit?: string;
  sgsanstime?: string;
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

export const SgsPost: React.FC<ButtonProps> = ({
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
          <Text style={[textStyle.semibold11, { color: "#151515" }]}>
            {nickname}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <Text style={[textStyle.semibold08, { color: "#919191" }]}>
            {sgsposttime}
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
        <Text style={[textStyle.semibold12, { color: "#333333", left: "1%" }]}>
          {sgstit}
        </Text>
      </View>
      <View
        style={{
          height: "auto",
          width: "100%",
          marginTop: deviceHeight * 0.01,
        }}
      >
        <Text style={[textStyle.regular11, { color: "#151515", left: "1%" }]}>
          {sgscont}
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
          {"답변"}
        </Text>
      </View>
    </View>
  );
};

export const SgsComment: React.FC<ButtonProps> = ({
  sgsansnick,
  sgsanstit,
  sgsanstime,
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: deviceWidth * 0.868,
        minHeight: deviceHeight * 0.065,
        marginTop: deviceHeight * 0.017,
        borderBottomWidth: 1,
        borderBottomColor: "#F2F2F2",
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
              textStyle.semibold10,
              { color: "#151515" },
              { lineHeight: deviceWidth * 0.04 },
            ]}
          >
            {sgsansnick}
          </Text>
        </View>
        <View
          style={{
            height: "auto",
            marginLeft: deviceWidth * 0.02,
            marginTop: deviceHeight * 0.001,
          }}
        >
          <Text style={[textStyle.regular11, { color: "#151515" }]}>
            {sgsanstit}
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
        }}
      >
        <Text style={[textStyle.semibold07, { color: "#919191" }]}>
          {sgsanstime}
        </Text>
      </View>
    </View>
  );
};
