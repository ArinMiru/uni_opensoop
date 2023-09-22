import React from "react";
import { DrawerScreenProps } from "../../Navigations/StackNavigator"; // 타입 임포트
import IdFindEmail from "../Account/IdFind/IdFindEmail";
import IdFindOut from "../Account/IdFind/IdFindOut";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BlackBackIconButton } from "../../Components/IconCompo/BackIconButton";
import TopbarStyletest from "../Account/IdFind/Topbartest";
import { MenuTopbarStyle } from "../../Components/AllCompo/TopbarCompo";

const Drawer = createDrawerNavigator();

const DrawerScreen: React.FC<DrawerScreenProps> = ({ navigation }) => {
  // 타입을 명시적으로 설정
  const closeDrawer = () => {
    navigation.goBack(); // 모달을 닫기 위한 함수를 정의합니다.
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="공지사항" component={TopbarStyletest} />
      <Drawer.Screen name="비밀번호찾기" component={IdFindOut} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;