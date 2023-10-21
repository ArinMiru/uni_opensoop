import React from "react";
import { Text, View } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { PostProfileIcon } from "../../../Components/IconCompo/ProfileIcon";
import { FreEditDelButton, FreLikeButtton } from "../FreCompo/FreButtonCompo";
import { ScrollView } from "react-native-gesture-handler";

interface ButtonProps {
  children?: React.ReactNode;
  nickname?: string;
  freposttime?: string;
  fretit?: string;
  frecont?: string;
  frelike?: number;
  freansnick?: string;
  freanstit?: string;
  freanstime?: string;
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
  editPress,
  delPress,
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
              {freposttime}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <FreLikeButtton like={frelike} />
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
            {fretit}
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
            {frecont}
          </Text>
        </View>
        {children}
        <View
          style={{
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          <FreEditDelButton editOnPress={editPress} deleOnPress={delPress} />
        </View>
      </View>
    </ScrollView>
  );
};

export const FreComment: React.FC<ButtonProps> = ({
  freansnick,
  freanstit,
  freanstime,
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
            {freansnick}
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
              {freanstit}
            </Text>
          </View>
        </View>
        <View>
          <Text style={[textStyle.regular07, { color: "#000000" }]}>
            {freanstime}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
