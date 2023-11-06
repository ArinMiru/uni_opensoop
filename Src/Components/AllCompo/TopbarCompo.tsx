import Styles from "../../Styles/TopbarStyles/TopbarStyle";
import React from "react";
import { View, Text } from "react-native";
import textStyle from "../../Styles/TextStyle";
import { TopbarStylePlusIcon } from "../IconCompo/PlusIcon";
import { TopbarDelButton, TopbarRegiButton } from "./TopbarEditDelRegiButton";
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { deviceWidth } from "../../Utils/DeviceUtils";
import { Image } from "react-native";
import { GrayBackIconButton } from "../IconCompo/BackIconButton";
import { deviceHeight } from "../../Utils/DeviceUtils";
import { ProfileIcon } from "../IconCompo/ProfileIcon";
import { AntDesign } from "@expo/vector-icons";

//프로퍼티 타입 정의
interface ButtonProps {
  children?: React.ReactNode; //리액트로 타입 명시
  Title?: string; //Title
  MEMB_SC_NM: string; //MEMB_SC_NM
  MEMB_DEP_NM: string; //MEMB_DEP_NM
  navigation?: any;
  onPress?: () => void;
  onPressProfile?: () => void;
  onPressDel?: () => void;
  onPressRegi?: () => void;
  onPressEdit?: () => void;
}

/*------------------------------------------------------------*/

/**
 * MainPageTopbar
 * Image + 텍스트 + ProfileIcon
 */
export const MainPageTopbarStyle: React.FC<ButtonProps> = ({
  children,
  MEMB_SC_NM,
  MEMB_DEP_NM,
  onPressProfile,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <View style={{ flex: 0.23 }}></View>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: deviceHeight * 0.01,
            width: deviceWidth * 0.28,
          }}
          source={require("../../Assets/Images/TopbarLogoImage.png")}
        ></Image>
        <View style={{ marginTop: deviceWidth * 0.02 }}>
          <AntDesign
            name="minus"
            size={deviceWidth * 0.05}
            color={"#BABABA"}
            style={{ transform: [{ rotate: "90deg" }] }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={[
              textStyle.semibold11,
              { marginLeft: deviceWidth * 0.01 },
              { marginTop: deviceHeight * 0.01 },
              { lineHeight: deviceHeight * 0.026 },
              { color: "#151515" },
            ]}
          >
            {MEMB_SC_NM}
          </Text>
          <Text
            style={[
              textStyle.bold08,
              { marginLeft: deviceWidth * 0.01 },
              { marginTop: deviceHeight * 0.012 },
              { lineHeight: deviceHeight * 0.031 },
              { color: "#919191" },
            ]}
          >
            {MEMB_DEP_NM}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <ProfileIcon onPress={onPressProfile} />
      </View>
      {children}
    </View>
  );
};

/*------------------------------------------------------------*/

/**
 * MenuTopbarStyle + Plus
 * 뒤로가기 + 텍스트 + Plus
 * 뒤로가기 + 텍스트 + X
 * 조건부 렌더링
 * 공지사항, 투표, 일정, 게시판에서 사용
 */
export const MenuTopbarStyle: React.FC<ButtonProps> = ({
  children,
  Title,
  MEMB_SC_NM,
  MEMB_DEP_NM,
  onPressRegi,
}) => {
  const userData = getUserData();
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <View style={{ flex: 0.1 }}></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            textStyle.semibold13,
            { color: "#151515" },
            { marginLeft: deviceWidth * 0.02 },
          ]}
        >
          {Title}
        </Text>
        <Text
          style={[
            textStyle.bold08,
            { marginLeft: deviceWidth * 0.02 },
            { marginTop: deviceHeight * 0.009 },
            { color: "#919191" },
          ]}
        >
          {MEMB_SC_NM}
        </Text>
        <Text
          style={[
            textStyle.bold08,
            { marginLeft: deviceWidth * 0.01 },
            { marginTop: deviceHeight * 0.009 },
            { color: "#919191" },
          ]}
        >
          {MEMB_DEP_NM}
        </Text>
      </View>
      {["02", "03", "05"].includes(userData?.TIT_CD || "") ? (
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TopbarStylePlusIcon onPress={onPressRegi} />
        </View>
      ) : (
        <View style={{ flex: 1 }} />
      )}
      {children}
    </View>
  );
};

/*------------------------------------------------------------*/

/**
 * PageTitDelRequire(figma 기준)
 * 투표 페이지만 사용
 * 조건 렌더링 O
 * 뒤로가기 + 텍스트 + X (일반사용자)
 * 뒤로가기 + 텍스트 + 삭제(쓰레기통 아이콘) (학회장, 부학회장, 관리자)
 */
export const BackIconDelTopbarStyle: React.FC<ButtonProps> = ({
  children,
  Title,
  MEMB_SC_NM,
  MEMB_DEP_NM,
  onPressDel,
}) => {
  const userData = getUserData();
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <View style={{ flex: 0.23 }}></View>
      <Image
        style={{
          resizeMode: "contain",
          marginTop: deviceHeight * 0.01,
          width: deviceWidth * 0.28,
        }}
        source={require("../../Assets/Images/TopbarLogoImage.png")}
      ></Image>
      <View style={{ marginTop: deviceWidth * 0.02 }}>
        <AntDesign
          name="minus"
          size={deviceWidth * 0.05}
          color={"#BABABA"}
          style={{ transform: [{ rotate: "90deg" }] }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={[
            textStyle.semibold13,
            { color: "#151515" },
            { marginLeft: deviceWidth * 0.02 },
          ]}
        >
          {Title}
        </Text>
        <Text
          style={[
            textStyle.semibold08,
            { marginLeft: deviceWidth * 0.01 },
            { marginTop: deviceHeight * 0.01 },
            { color: "#919191" },
          ]}
        >
          {MEMB_SC_NM} {MEMB_DEP_NM}
        </Text>
      </View>
      {["02", "03", "05"].includes(userData?.TIT_CD || "") ? (
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TopbarDelButton onPress={onPressDel} />
          {/** 쓰레기통 아이콘 */}
        </View>
      ) : (
        <View style={{ flex: 1 }} />
      )}
      {children}
    </View>
  );
};

/*-------------------------------------------------------*/

/**
 * PageTitDelRequire(figma 기준)
 * 투표, 건의게시판, 자유게시판
 * 조건 렌더링 X
 * 뒤로가기 + 텍스트 + 삭제
 */
export const BackIconDelNoRqTopbarStyle: React.FC<ButtonProps> = ({
  children,
  Title,
  MEMB_SC_NM,
  MEMB_DEP_NM,
  onPressDel,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <View style={{ flex: 0.23 }}></View>
      <Image
        style={{
          resizeMode: "contain",
          marginTop: deviceHeight * 0.01,
          width: deviceWidth * 0.28,
        }}
        source={require("../../Assets/Images/TopbarLogoImage.png")}
      ></Image>
      <View style={{ marginTop: deviceWidth * 0.02 }}>
        <AntDesign
          name="minus"
          size={deviceWidth * 0.05}
          color={"#BABABA"}
          style={{ transform: [{ rotate: "90deg" }] }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text style={[textStyle.semibold13, { color: "#151515" }]}>
          {Title}
        </Text>
        <Text
          style={[
            textStyle.semibold08,
            { marginLeft: deviceWidth * 0.01 },
            { marginTop: deviceHeight * 0.01 },
            { color: "#919191" },
            { textAlign: "left" },
          ]}
        >
          {MEMB_SC_NM} {MEMB_DEP_NM}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TopbarDelButton onPress={onPressDel} />
      </View>
      {children}
    </View>
  );
};

/**
 * BackIconRegiTopbarStyle
 * 뒤로가기 + 텍스트 + 등록
 * 공지사항 등록, 투표 등록, 일정 등록, 게시판 등록에서 사용
 */
export const BackIconRegiTopbarStyle: React.FC<ButtonProps> = ({
  children,
  Title,
  MEMB_SC_NM,
  MEMB_DEP_NM,
  onPress,
  onPressRegi,
}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <GrayBackIconButton onPress={onPress} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            textStyle.semibold13,
            { color: "#151515" },
            { marginLeft: deviceWidth * 0.01 },
          ]}
        >
          {Title}
        </Text>
        <Text
          style={[
            textStyle.semibold08,
            { marginLeft: deviceWidth * 0.01 },
            { marginTop: deviceHeight * 0.01 },
            { color: "#919191" },
            { textAlign: "left" },
          ]}
        >
          {MEMB_SC_NM} {MEMB_DEP_NM}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TopbarRegiButton onPress={onPressRegi} />
      </View>
      {children}
    </View>
  );
};

/**
 * BackIconRegiTopbarStyle
 * 뒤로가기 + 텍스트 + X
 * 투표에서만 사용
 */
export const BackIconTopbarStyle: React.FC<ButtonProps> = ({
  children,
  MEMB_SC_NM,
  MEMB_DEP_NM,
  Title,
  onPress,
  onPressDel,
}) => {
  const userData = getUserData();
  // 컴포넌트의 타입을 정확하게 명시
  return (
    <View style={Styles.TopbarStyle}>
      <GrayBackIconButton onPress={onPress} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            textStyle.semibold13,
            { color: "#151515" },
            { marginLeft: deviceWidth * 0.01 },
          ]}
        >
          {Title}
        </Text>
        <Text
          style={[
            textStyle.semibold08,
            { marginLeft: deviceWidth * 0.01 },
            { marginTop: deviceHeight * 0.01 },
            { color: "#919191" },
            { textAlign: "left" },
          ]}
        >
          {MEMB_SC_NM} {MEMB_DEP_NM}
        </Text>
      </View>
      <View style={{ flex: 1 }} />
      {children}
    </View>
  );
};

/*------------------------------------------------------------*/

/*XXXXXXXXXXXXXXXXXXXXXXXXXX*/
export const BackIconEditTopbarStyle: React.FC = ({}) => {
  // 컴포넌트의 타입을 정확하게 명시
  return <View></View>;
};
/*XXXXXXXXXXXXXXXXXXXXXXXXXX*/

/*XXXXXXXXXXXXXXXXXXXXXXXXXX*/
export const MenuIconRegiTopbarStyle: React.FC = ({}) => {
  const userData = getUserData();
  // 컴포넌트의 타입을 정확하게 명시
  return <View></View>;
};

/*XXXXXXXXXXXXXXXXXXXXXXXXXX*/
export const MenuIconEditTopbarStyle: React.FC = ({}) => {
  return <View></View>;
};
/*XXXXXXXXXXXXXXXXXXXXXXXXXX*/

/*------------------------------------------------------------*/
