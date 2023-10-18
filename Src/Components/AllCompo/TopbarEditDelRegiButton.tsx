import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { deviceWidth } from "../../Utils/DeviceUtils";
import TopbarEditDelRegiButtonStyle from "../../Styles/TopbarStyles/TopbarEditDelRegiButtonStyle";
import TextStyle from "../../Styles/TextStyle";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

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
 * Topbar에 있는 Delete 아이콘 (쓰레기통)
 *
 * - 조건 렌더링 -
 * (공지사항, 투표) 02, 03, 05
 * (게시판) - All
 *
 */
export const TopbarDelButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ marginRight: deviceWidth * 0.06 }}
      onPress={onPress}
    >
      <Feather name="trash" size={deviceWidth * 0.04} color="#F05151" />
    </TouchableOpacity>
  );
};

/*------------------------------------------------------------*/

/*XXXXXXXXXXXXXXXXXXXXXXXXXX*/
export const TopbarEditButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return <TouchableOpacity onPress={onPress}></TouchableOpacity>;
};
/*XXXXXXXXXXXXXXXXXXXXXXXXXX*/

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
      style={{ marginRight: deviceWidth * 0.06 }}
      onPress={onPress}
    >
      <Ionicons name="send-sharp" size={deviceWidth * 0.045} color="#4BB781" />
    </TouchableOpacity>
  );
};

/*------------------------------------------------------------*/
