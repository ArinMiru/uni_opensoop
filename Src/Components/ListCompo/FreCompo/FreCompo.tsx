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
  freqstansnick?: string;
  freqstanstit?: string;
  freqstanstime?: string;
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
  freposttime,
  fretit,
  frecont,
  frelike,
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
          <FreEditDelButton onPress={onPress} />
        </View>
      </View>
    </ScrollView>
  );
};

export const FreQstComment: React.FC<ButtonProps> = ({
  freqstansnick,
  freqstanstit,
  freqstanstime,
  onPress,
}) => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          width: deviceWidth * 1,
          paddingLeft: deviceWidth * 0.06,
          minHeight: deviceHeight * 0.05,
          paddingTop: deviceHeight * 0.018,
        }}
      >
        <View style={{ justifyContent: "center" }}>
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
          <Text style={[textStyle.semibold08, { color: "#151515" }]}>
            {freqstansnick}
          </Text>
          <View
            style={{
              height: "auto",
              marginTop: deviceHeight * 0.006,
            }}
          >
            <Text style={[textStyle.regular08, { color: "#151515" }]}>
              {freqstanstit}
            </Text>
          </View>
        </View>
        <View>
          <Text style={[textStyle.semibold05, { color: "#919191" }]}>
            {freqstanstime}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
