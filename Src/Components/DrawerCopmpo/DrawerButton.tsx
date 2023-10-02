import React from "react";
import { TouchableOpacity, Text } from "react-native";
import textStyle from "../../Styles/TextStyle";
import DrawerMenuButton from "../../Styles/DrawerStyles/DrawerButtonStyles";
import {
  FreeIcon,
  SqsIcon,
  QstIcon,
  NoticeIcon,
  SchdlIcon,
  VoteIcon,
} from "../IconCompo/DrawerIcon";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/*
 * 도로우 네비게이션의 공지사항 버튼입니다.
 **/
export const DrawerNocticeButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={DrawerMenuButton.DrawerMenuclkButton}
      onPress={onPress}
    >
      <NoticeIcon />
      <Text style={[textStyle.semibold13, { color: "#4BB781" }]}>공지사항</Text>
      {children}
    </TouchableOpacity>
  );
};

export const DrawerFreeButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={DrawerMenuButton.DrawerMenuButton}
      onPress={onPress}
    >
      <FreeIcon />
      <Text style={[textStyle.semibold13, { color: "#ffffff" }]}>
        자유게시판
      </Text>
      {children}
    </TouchableOpacity>
  );
};

export const DrawerSqsButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={DrawerMenuButton.DrawerMenuButton}
      onPress={onPress}
    >
      <SqsIcon />
      <Text style={[textStyle.semibold13, { color: "#ffffff" }]}>
        건의게시판
      </Text>
      {children}
    </TouchableOpacity>
  );
};

export const DrawerQstButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  {
    [textStyle.semibold08, { color: "#ffffff" }];
  }
  return (
    <TouchableOpacity
      style={DrawerMenuButton.DrawerMenuButton}
      onPress={onPress}
    >
      <QstIcon />
      <Text style={[textStyle.semibold13, { color: "#ffffff" }]}>
        질문게시판
      </Text>
      {children}
    </TouchableOpacity>
  );
};

export const DrawerVoteButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  {
    [textStyle.semibold08, { color: "#ffffff" }];
  }
  return (
    <TouchableOpacity
      style={DrawerMenuButton.DrawerMenuButton}
      onPress={onPress}
    >
      <VoteIcon />
      <Text style={[textStyle.semibold13, { color: "#ffffff" }]}>투표</Text>
      {children}
    </TouchableOpacity>
  );
};

export const DrawerSchdlButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  {
    [textStyle.semibold08, { color: "#ffffff" }];
  }
  return (
    <TouchableOpacity
      style={DrawerMenuButton.DrawerMenuButton}
      onPress={onPress}
    >
      <SchdlIcon />
      <Text style={[textStyle.semibold13, { color: "#ffffff" }]}>일정</Text>
      {children}
    </TouchableOpacity>
  );
};
