import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ModalScreen from "../Screens/ModalScreen";
import UniCertiDprtSrch from "../Screens/Account/SingUp/UniCertiDprtSrch";
import TestScreen from "./TestScreen";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  TestScreen: undefined; //파라미터 전달 값 없음
  ModalScreen: undefined; //파라미터 전달 값 없음
  UniCertiDprtSrch: undefined;
};

export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "TestScreen">;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TestScreen"
        component={TestScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniCertiDprtSrch"
        component={UniCertiDprtSrch}
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
