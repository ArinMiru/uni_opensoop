import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { deviceWidth } from "../../Utils/DeviceUtils";
import TopbarEditDelRegiButtonStyle from "../../Styles/TopbarStyles/TopbarEditDelRegiButtonStyle";
import TextStyle from "../../Styles/TextStyle";

/** TopbarEditDelRegiButton
 * 공지사항, 투표, 게시판, 일정에 해당하는 Topbar에 있는 Edit, Delete, Register 버튼의 컴포넌트가 존재하는 코드 입니다.
 * 이 코드는 공지사항, 투표, 게시판, 일정에만 존재하는 코드 입니다.
 */

/*------------------------------------------------------------*/

/**
 * TopbarEditDelRegiButton
 * 공지사항, 투표, 게시판, 일정에 해당하는 Topbar에 있는 Edit, Delete, Register 버튼이 존재하는 코드 입니다.
 * 이 코드는 공지사항, 투표, 게시판, 일정에 해당하는 Topbar에만 존재하는 코드 입니다.
 */
interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/*------------------------------------------------------------*/

/**
 * TopbarDelButton
 * Topbar에 있는 Delete 아이콘
 * 공지사항, 투표, 게시판, 일정에 해당하는 Topbar에만 존재하는 코드 입니다.
 */
export const TopbarDelButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        TopbarEditDelRegiButtonStyle.TopbarDelButtonStyle,
        { marginRight: deviceWidth * 0.06 },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          TextStyle.semibold12,
          {
            color: "#EB5288",
            lineHeight: deviceWidth * 0.05,
          },
        ]}
      >
        {"삭제"}
      </Text>
      {children}
    </TouchableOpacity>
  );
};

/*------------------------------------------------------------*/

/**
 * TopbarEditButton
 * Topbar에 있는 Edit 아이콘
 * 공지사항, 투표, 게시판, 일정에 해당하는 Topbar에만 존재하는 코드 입니다.
 */
export const TopbarEditButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        TopbarEditDelRegiButtonStyle.TopbarEditButtonStyle,
        { marginRight: deviceWidth * 0.06 },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          TextStyle.semibold12,
          {
            color: "#4BB781",
            lineHeight: deviceWidth * 0.05,
          },
        ]}
      >
        {"작성"}
      </Text>
      {children}
    </TouchableOpacity>
  );
};

/*------------------------------------------------------------*/

/**
 * TopbarRegiButton
 * Topbar에 있는 Register 아이콘
 * 공지사항, 투표, 게시판, 일정에 해당하는 Topbar에만 존재하는 코드 입니다.
 */
export const TopbarRegiButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        TopbarEditDelRegiButtonStyle.TopbarRegiButtonStyle,
        {
          marginRight: deviceWidth * 0.06,
          justifyContent: "center",
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          TextStyle.semibold12,
          {
            color: "#4BB781",
            lineHeight: deviceWidth * 0.05,
          },
        ]}
      >
        {"등록"}
      </Text>
      {children}
    </TouchableOpacity>
  );
};

/*------------------------------------------------------------*/
