import React from "react";
import { TouchableOpacity, Text, View, Platform } from "react-native";
import textStyle from "../../Styles/TextStyle";
import { Entypo } from "@expo/vector-icons";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";
import SchdlButtonStyle from "../../Styles/SchdlStyles/SchdlButtonStyle";

interface ButtonProps {
  children?: React.ReactNode;
  hour?: string;
  minutes?: string;
  event?: string;
  today?: string;
  date?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * 일정페이지에서 시간을 선택하는 버튼입미다.
 */
export const SchdlTimeButton: React.FC<ButtonProps> = ({
  children,
  onPress,
  hour,
  minutes,
}) => {
  return (
    <TouchableOpacity
      style={[
        SchdlButtonStyle.SchdlTimeButtonStyle,
        {
          flexDirection: "row",
          justifyContent: "space-evenly",
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          textStyle.semibold14,
          {
            color: "#666666",
            lineHeight: Platform.OS === "android" ? deviceHeight * 0.06 : 0,
            marginLeft: "14%",
          },
        ]}
      >
        {hour}
      </Text>
      <Text
        style={[
          textStyle.semibold14,
          {
            color: "#666666",
            lineHeight: Platform.OS === "android" ? deviceHeight * 0.06 : 0,
          },
        ]}
      >
        :
      </Text>
      <Text
        style={[
          textStyle.semibold14,
          {
            color: "#666666",
            lineHeight: Platform.OS === "android" ? deviceHeight * 0.06 : 0,
            marginRight: "14%",
          },
        ]}
      >
        {minutes}
      </Text>

      {children}
    </TouchableOpacity>
  );
};

/**
 * 일정페이지에서 날짜를 선택하는 버튼입니다.
 */
export const SchdlRegiDateButtonStyle: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={SchdlButtonStyle.SchdlRegiDateButtonStyle}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

/**
 * 일정페이지에서 달력의 숫자 버튼입니다.
 * 그 중에서 오늘을 나타내는 버튼입니다.
 */
export const SchdlSchdldayButton: React.FC<ButtonProps> = ({
  children,
  onPress,
  today,
}) => {
  return (
    <TouchableOpacity
      style={[
        SchdlButtonStyle.SchdlDayButtonStyle,
        { backgroundColor: "#4BB781" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          textStyle.bold12,
          {
            color: "#ffffff",
            lineHeight: Platform.OS === "android" ? deviceHeight * 0.023 : 0,
            ...Platform.select({
              ios: {
                lineHeight: deviceHeight * 0.024,
              },
            }),
          },
        ]}
      >
        {today}
      </Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 일정페이지에서 달력의 숫자 버튼입니다.
 * 그 중에서 일정있는 날을 나타내는 버튼입니다.
 */
export const SchdlTodayButton: React.FC<ButtonProps> = ({
  children,
  onPress,
  event,
}) => {
  return (
    <TouchableOpacity
      style={[
        SchdlButtonStyle.SchdlDayButtonStyle,
        { backgroundColor: "#EB5288" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          textStyle.bold12,
          {
            color: "#ffffff",
            lineHeight: Platform.OS === "android" ? deviceHeight * 0.023 : 0,
            ...Platform.select({
              ios: {
                lineHeight: deviceHeight * 0.024,
              },
            }),
          },
        ]}
      >
        {event}
      </Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 일정페이지에서 수정버튼 버튼을 누르기 전의 버튼입니다.
 */
export const SchdlBefoCliklEditButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        SchdlButtonStyle.SchdlClikButtonStyle,
        { borderColor: "#4BB781" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          textStyle.medium09,
          {
            lineHeight: deviceHeight * 0.018,
            color: "#4BB781",
          },
        ]}
      >
        수정
      </Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 일정페이지에서 수정버튼 버튼을 누른 후의 버튼입니다.
 */
export const SchdlAftrCliklEditButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        SchdlButtonStyle.SchdlClikButtonStyle,
        { borderColor: "#4BB781", backgroundColor: "#4BB781" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          textStyle.medium09,
          {
            lineHeight: deviceHeight * 0.018,
            color: "#ffffff",
          },
        ]}
      >
        수정
      </Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 일정페이지에서 삭제버튼 버튼을 누르기 전의 버튼입니다.
 */
export const SchdlBefoClikDelButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        SchdlButtonStyle.SchdlClikButtonStyle,
        { borderColor: "#F66565" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          textStyle.medium09,
          {
            lineHeight: Platform.OS === "android" ? deviceHeight * 0.017 : 0,
            ...Platform.select({
              ios: {
                lineHeight: deviceHeight * 0.018,
              },
            }),
            color: "#F66565",
          },
        ]}
      >
        삭제
      </Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 일정페이지에서 삭제버튼 버튼을 누른 후의 버튼입니다.
 */
export const SchdlAftrClikDelButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        SchdlButtonStyle.SchdlClikButtonStyle,
        { borderColor: "#F66565", backgroundColor: "#F66565" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          textStyle.medium09,
          {
            lineHeight: Platform.OS === "android" ? deviceHeight * 0.017 : 0,
            ...Platform.select({
              ios: {
                lineHeight: deviceHeight * 0.018,
              },
            }),
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

/**
 * 일정페이지에서 날짜를 선택하는 버튼입니다.
 */
export const SchdlRegiDateButton: React.FC<ButtonProps> = ({
  children,
  onPress,
  date,
}) => {
  return (
    <TouchableOpacity
      style={SchdlButtonStyle.SchdlRegiDateButtonStyle}
      onPress={onPress}
    >
      <Text
        style={[
          textStyle.semibold14,
          {
            color: "#666666",
            lineHeight: Platform.OS === "android" ? deviceHeight * 0.058 : 0,
          },
        ]}
      >
        {date}
      </Text>
      {children}
    </TouchableOpacity>
  );
};
