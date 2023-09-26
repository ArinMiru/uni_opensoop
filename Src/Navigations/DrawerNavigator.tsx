import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NoticePage from "../Screens/Home/NoTice/NoticePage";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

// navigation의 타입을 DrawerNavigationProp로 명시적으로 지정
type DrawerNavigatorProps = {
  navigation: DrawerNavigationProp<ParamListBase>;
};

function DrawerNavigator({ navigation }: DrawerNavigatorProps) {
  return (
    <Drawer.Navigator initialRouteName="Stack">
      <Drawer.Screen
        name="Notice"
        component={NoticePage}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
