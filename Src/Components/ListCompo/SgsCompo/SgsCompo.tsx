import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { PostProfileIcon } from "../../../Components/IconCompo/ProfileIcon";
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

export const SqsPost: React.FC<ButtonProps> = ({
  children,
  nickname,
  sgsposttime,
  sgstit,
  sgscont,
  onPress,
}) => {
  return (
    <ScrollView>
      <View
        style={{
          width: deviceWidth * 0.868,
          marginLeft: deviceWidth * 0.06,
          marginRight: deviceWidth * 0.06,
          minHeight: deviceHeight * 0.174,
          marginTop: deviceHeight * 0.018,
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
          <View>
            <PostProfileIcon />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={[textStyle.semibold12, { color: "#4BB781" }]}>
              {nickname}
            </Text>
            <Text
              style={[
                textStyle.regular08,
                { color: "#000000" },
                { marginLeft: deviceWidth * 0.018 },
              ]}
            >
              {sgsposttime}
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 2,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Text style={[textStyle.semibold12, { color: "#000000" }]}>
            {sgstit}
          </Text>
        </View>
        <View
          style={{
            height: "auto",
            width: "100%",
            marginTop: deviceHeight * 0.018,
          }}
        >
          <Text style={[textStyle.regular10, { color: "#424C43" }]}>
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
          <SgsDelButton onPress={onPress} />
        </View>
      </View>
    </ScrollView>
  );
};

export const SqsComment: React.FC<ButtonProps> = ({
  sgsansnick,
  sgsanstit,
  sgsanstime,
  onPress,
}) => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          width: deviceWidth * 1,
          marginLeft: deviceWidth * 0.06,
          minHeight: deviceHeight * 0.05,
          marginTop: deviceHeight * 0.018,
        }}
      >
        <View>
          <PostProfileIcon />
        </View>
        <View
          style={{
            flexDirection: "column",
            width: deviceWidth * 0.7,
            marginLeft: deviceWidth * 0.018,
            height: "auto",
          }}
        >
          <Text
            style={[
              textStyle.semibold10,
              { color: "#00B45A" },
              { lineHeight: deviceHeight * 0.031 },
            ]}
          >
            {sgsansnick}
          </Text>
          <View
            style={{
              height: "auto",
              marginTop: deviceHeight * 0.006,
            }}
          >
            <Text
              style={[
                textStyle.medium09,
                { color: "#424C43" },
                { lineHeight: deviceHeight * 0.031 },
              ]}
            >
              {sgsanstit}
            </Text>
          </View>
        </View>
        <View>
          <Text style={[textStyle.regular07, { color: "#000000" }]}>
            {sgsanstime}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
