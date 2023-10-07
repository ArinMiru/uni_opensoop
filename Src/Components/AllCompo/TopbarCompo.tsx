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
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { deviceWidth } from "../../Utils/DeviceUtils";

const userData = getUserData();

//프로퍼티 타입 정의
interface inputProps {
  children?: React.ReactNode; //리액트로 타입 명시
  text: string; //문자열로 타입 명시
  navigation?: any;
  onPress?: () => void;
  onPressRegi?: () => void;
  onPressEdit?: () => void;
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
  onPressRegi?: () => void;
}

/*------------------------------------------------------------*/

/**
 * MenuTopbarStyle
 * 메뉴 아이콘 + 텍스트 + Plus
 * 메뉴 아이콘 + 텍스트 + X
 * 조건부 렌더링
 * 공지사항, 투표
 * MenuTopbarStyleManager와 다른 점은 오른쪽에 Plus 아이콘이 존재하지 않는다는 점이다.
 */
export const MenuTopbarStyle: React.FC<DrawerScreenProps> = ({
  children,
  text,
  navigation,
  onPress,
  onPressRegi,
}) => {
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
      {/* # 아래의 정보 처럼 사용자의 직함 코드를 이용하여 조건부로 렌더링 할 것. # */}
      {/* 02, 03, 05) 사용자 직함 코드(TIT_CD)를 이용하여 조건부 렌더링(@ArinMiru) */}
      {["02", "03", "05"].includes(userData?.TIT_CD || "") && (
        <TopbarStylePlusIcon onPress={onPressRegi} />
      )}
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

/*------------------------------------------------------------*/

/**
 * BackIconTopbarStyle
 * BackIconDelTopbarStyle(미사용)
 * 뒤로가기 아이콘과 텍스트가 존재하는 TopbarStyle
 * 뒤로가기 + 텍스트 + X (일반사용자)
 * 뒤로가기 + 텍스트 + 삭제 (학회장, 부학회장, 관리자)
 * 투표 상세페이지 사용
 * 뒤로가기 아이콘은 onPress를 통해 뒤로가기 기능을 수행한다.
 * 텍스트는 뒤로가기 아이콘과 같은 라인에 존재한다.
 * 텍스트는 문자열로 타입을 명시한다.
 */
export const BackIconTopbarStyle: React.FC<inputProps> = ({
  children,
  text,
  onPress,
  onPressDel,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity onPress={onPress}>
          <WhiteBackIconButton onPress={onPress} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={[textStyle.semibold19, { color: "#FFFFFF" }]}>{text}</Text>
        {children}
      </View>
      {/* 02, 03, 05) 사용자 직함 코드(TIT_CD)를 이용하여 조건부 렌더링(@ArinMiru) */}
      {["02", "03", "05"].includes(userData?.TIT_CD || "") && (
        <TopbarDelButton onPress={onPressDel} />
      )}
      <View style={[{ flex: 1 }]}></View>
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
 * 메뉴 아이콘 + 텍스트 + X
 * 메뉴 아이콘 + 텍스트 + 등록
 * 일정에서 사용
 * MenuIcon과 텍스트, 등록 버튼이 존재하는 TopbarStyle
 * MenuIcon은 onPress를 통해 MenuIcon 기능을 수행한다.
 * 등록 버튼은 onPress를 통해 등록 기능을 수행한다.
 * 등록 아이콘은 텍스트와 같은 라인에 존재한다.
 */
export const MenuIconRegiTopbarStyle: React.FC<inputProps> = ({
  children,
  text,
  onPress,
  onPressRegi,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <TouchableOpacity onPress={onPress}>
        <MenuIcon />
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={[textStyle.semibold19, { color: "#FFFFFF" }]}>{text}</Text>
        {children}
      </View>
      {/* # 아래의 정보 처럼 사용자의 직함 코드를 이용하여 조건부로 렌더링 할 것. # */}
      {/* 02, 03, 05) 사용자 직함 코드(TIT_CD)를 이용하여 조건부 렌더링(@ArinMiru) */}
      {["02", "03", "05"].includes(userData?.TIT_CD || "") && (
        <TopbarRegiButton onPress={onPressRegi} />
      )}
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

/*------------------------------------------------------------*/

/**
 * MenuIconEditTopbarStyle
 * 메뉴 아이콘 + 텍스트 + 작성
 * (자유, 건의, 질문)게시판 글 작성 시 사용
 * 별도 조건별 렌더링 필요없음
 * MenuIcon과 텍스트, 작성 버튼이 존재하는 TopbarStyle
 * MenuIcon은 onPress를 통해 MenuIcon 기능을 수행한다.
 * 작성 버튼은 onPress를 통해 작성 기능을 수행한다.
 * 작성 아이콘은 텍스트와 같은 라인에 존재한다.
 */
export const MenuIconEditTopbarStyle: React.FC<inputProps> = ({
  children,
  text,
  onPress,
  onPressEdit,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <View
        style={{
          width: deviceWidth * 0.2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={onPress}>
          <MenuIcon onPress={onPress} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: deviceWidth * 0.2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            textStyle.semibold19,
            {
              color: "#FFFFFF",
            },
          ]}
        >
          {text}
        </Text>
      </View>
      <View
        style={{
          width: deviceWidth * 0.2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TopbarEditButton onPress={onPressEdit} />
      </View>
    </View>
  );
};

/*------------------------------------------------------------*/
