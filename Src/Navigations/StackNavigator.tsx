import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ModalScreen from "../Screens/ModalScreen";
import TestScreen from "./TestScreen";
import { StackNavigationProp } from "@react-navigation/stack";
import AccountLogin from "../Screens/AccountLogin"
import AccountLoginRegi from "../Screens/AccountLoginRegi";

type RootStackParamList = {                                                         //파라미터 전달 값 없음
  ModalScreen: undefined;
  AccountLoginRegi: undefined;
  AccountLogin: undefined;                                                       //파라미터 전달 값 없음
};

export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "ModalScreen">;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountLoginRegi"
        component={AccountLoginRegi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountLogin"
        component={AccountLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
