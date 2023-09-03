import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ModalScreen from "../Screens/ModalScreen";
import TestScreen from "./TestScreen";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  TestScreen: undefined;                                                          //파라미터 전달 값 없음
  ModalScreen: undefined;                                                         //파라미터 전달 값 없음
};

export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "ModalScreen">;
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
        name="ModalScreen"
        component={ModalScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
