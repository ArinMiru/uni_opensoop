import Styles from "../../Styles/TopbarStyles/TopbarStyle";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import textStyle from "../../Styles/TextStyle";
import { WhiteBackIconButton } from "../IconCompo/BackIconButton";
import { TopbarStylePlusIcon } from "../IconCompo/PlusIcon";
import { MenuIcon } from "../IconCompo/MenuIcon";
import {
  TopbarDelButton,
  TopbarEditButton,
  TopbarRegiButton,
} from "./TopbarEditDelRegiButton";

//프로퍼티 타입 정의
interface inputProps {
  children?: React.ReactNode; //리액트로 타입 명시
  text: string; //문자열로 타입 명시
  navigation?: any;
  onPress?: () => void;
  onPressRegi?: () => void;
  onPressDel?: () => void;
}

interface ButtonProps {
  color: string;
  onPress: () => void;
}

interface DrawerScreenProps {
  children?: React.ReactNode; //리액트로 타입 명시
  text: string; //문자열로 타입 명시
  navigation?: any;
  onPress?: () => void;
}

/*------------------------------------------------------------*/

/**
 * MenuTopbarStyle
 * 메뉴 아이콘 + 텍스트 + X
 * MenuTopbarStyleManager와 다른 점은 오른쪽에 Plus 아이콘이 존재하지 않는다는 점이다.
 */
export const MenuTopbarStyle: React.FC<DrawerScreenProps> = ({
  children,
  text,
  navigation,
  onPress,
}) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <View
        style={{
          flex: 1,
        }}
      >
        <MenuIcon onPress={onPress} />
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={[textStyle.semibold19, { color: "#FFFFFF" }]}>{text}</Text>
        {children}
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

/*------------------------------------------------------------*/

/**
 * MenuTopbarStyleManager
 * 메뉴 아이콘 + 텍스트 + Plus
 * MenuTopbarStyle와 다른 점은 오른쪽에 Plus 아이콘이 존재한다는 점이다.
 * Plus 아이콘은 onPress를 통해 Plus 아이콘을 누르면 Plus 아이콘에 해당하는 기능을 수행한다.
 */
export const MenuTopbarStyleManager: React.FC<inputProps> = ({
  children,
  text,
  navigation,
  onPress,
  onPressRegi,
}) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <MenuIcon onPress={onPress} />
      <Text style={[textStyle.semibold19, { color: "#FFFFFF" }]}>{text}</Text>
      <TopbarStylePlusIcon onPress={onPressRegi} />
    </View>
  );
};

/*------------------------------------------------------------*/

/**
 * BackIocnTopbarStyle
 * 뒤로가기 아이콘과 텍스트가 존재하는 TopbarStyle
 * 뒤로가기 + 텍스트 + X
 * 뒤로가기 아이콘은 onPress를 통해 뒤로가기 기능을 수행한다.
 * 텍스트는 뒤로가기 아이콘과 같은 라인에 존재한다.
 * 텍스트는 문자열로 타입을 명시한다.
 */
export const BackIocnTopbarStyle: React.FC<inputProps> = ({
  children,
  text,
  onPress,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity onPress={onPress}>
          <WhiteBackIconButton onPress={onPress} />
        </TouchableOpacity>
      </View>
      <Text style={[textStyle.semibold19, { color: "#FFFFFF" }]}>{text}</Text>
      <View style={[{ flex: 1 }]}></View>
      {children}
    </View>
  );
};

/*------------------------------------------------------------*/

/**
 * BackIconDelTopbarStyle
 * 뒤로가기 + 텍스트 + 삭제
 * 뒤로가기 아이콘, 텍스트, 삭제 버튼이 존재하는 TopbarStyle
 * 뒤로가기 아이콘은 onPress를 통해 뒤로가기 기능을 수행한다.
 * 삭제 버튼은 onPress를 통해 삭제 기능을 수행한다.
 * 삭제 아이콘은 텍스트와 같은 라인에 존재한다.
 */
export const BackIconDelTopbarStyle: React.FC<inputProps> = ({
  children,
  text,
  onPress,
  onPressDel,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <TouchableOpacity onPress={onPress}>
        <WhiteBackIconButton onPress={onPress} />
      </TouchableOpacity>
      <Text style={[textStyle.semibold19, { color: "#FFFFFF" }]}>{text}</Text>
      <TopbarDelButton onPress={onPressDel} />
    </View>
  );
};

/*------------------------------------------------------------*/

/**
 * BackIconRegiTopbarStyle
 * 뒤로가기 + 텍스트 + 등록
 * 뒤로가기 아이콘, 텍스트, 등록 버튼이 존재하는 TopbarStyle
 * 뒤로가기 아이콘은 onPress를 통해 뒤로가기 기능을 수행한다.
 * 등록 버튼은 onPress를 통해 등록 기능을 수행한다.
 * 등록 아이콘은 텍스트와 같은 라인에 존재한다.
 */
export const BackIconRegiTopbarStyle: React.FC<inputProps> = ({
  children,
  text,
  onPress,
  onPressRegi,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <TouchableOpacity>
        <WhiteBackIconButton onPress={onPress} />
      </TouchableOpacity>
      <Text style={[textStyle.semibold19, { color: "#FFFFFF" }]}>{text}</Text>
      <TopbarRegiButton onPress={onPressRegi} />
    </View>
  );
};

/*------------------------------------------------------------*/

/**
 * BackIconEditTopbarStyle
 * 뒤로가기 + 텍스트 + 작성
 * 뒤로가기 아이콘, 텍스트, 작성 버튼이 존재하는 TopbarStyle
 * 뒤로가기 아이콘은 onPress를 통해 뒤로가기 기능을 수행한다.
 * 작성 버튼은 onPress를 통해 작성 기능을 수행한다.
 * 작성 아이콘은 텍스트와 같은 라인에 존재한다.
 */
export const BackIconEditTopbarStyle: React.FC<inputProps> = ({
  children,
  text,
  onPress,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <TouchableOpacity onPress={onPress}>
        <WhiteBackIconButton />
      </TouchableOpacity>
      <Text style={[textStyle.semibold19, { color: "#FFFFFF" }]}>{text}</Text>
      <TopbarEditButton />
    </View>
  );
};

/*------------------------------------------------------------*/

/**
 * MenuIconRegiTopbarStyle
 * MenuIcon과 텍스트, 등록 버튼이 존재하는 TopbarStyle
 * MenuIcon은 onPress를 통해 MenuIcon 기능을 수행한다.
 * 등록 버튼은 onPress를 통해 등록 기능을 수행한다.
 * 등록 아이콘은 텍스트와 같은 라인에 존재한다.
 */
export const MenuIconRegiTopbarStyle: React.FC<inputProps> = ({
  children,
  text,
  onPress,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <TouchableOpacity onPress={onPress}>
        <MenuIcon />
      </TouchableOpacity>
      <Text style={[textStyle.semibold19, { color: "#FFFFFF" }]}>{text}</Text>
      <TopbarRegiButton />
    </View>
  );
};

/*------------------------------------------------------------*/

/**
 * MenuIconEditTopbarStyle
 * 메뉴 아이콘 + 텍스트 + 작성
 * MenuIcon과 텍스트, 작성 버튼이 존재하는 TopbarStyle
 * MenuIcon은 onPress를 통해 MenuIcon 기능을 수행한다.
 * 작성 버튼은 onPress를 통해 작성 기능을 수행한다.
 * 작성 아이콘은 텍스트와 같은 라인에 존재한다.
 */
export const MenuIconEditTopbarStyle: React.FC<inputProps> = ({
  children,
  text,
  onPress,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <TouchableOpacity onPress={onPress}>
        <MenuIcon onPress={onPress} />
      </TouchableOpacity>
      <Text style={[textStyle.semibold19, { color: "#FFFFFF" }]}>{text}</Text>
      <TopbarEditButton />
    </View>
  );
};

/*------------------------------------------------------------*/
