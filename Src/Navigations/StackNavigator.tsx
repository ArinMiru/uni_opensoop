import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ModalScreen from "../Screens/ModalScreen";
import TestScreen from "./TestScreen";
import { StackNavigationProp } from "@react-navigation/stack";
import AccountLogin from "../Screens/AccountLogin"
import AccountLoginRegi from "../Screens/AccountLoginRegi";
import RegiId from "../Screens/RegiId";
import RegiNmNic from "../Screens/RegiNmNic"
import RegiPass from "../Screens/RegiPass"
import UniCertiDprtSrch from "../Screens/Account/SingUp/UniCertiDprtSrch";

type RootStackParamList = {                                                         //파라미터 전달 값 없음
  ModalScreen: undefined;
  AccountLoginRegi: undefined;
  AccountLogin: undefined;
  RegiId: undefined; 
  RegiNmNic: undefined;        
  RegiPass: undefined;                                              //파라미터 전달 값 없음
  UniCertiDprtSrch: undefined;
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
        name="RegiId"
        component={RegiId}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegiNmNic"
        component={RegiNmNic}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegiPass"
        component={RegiPass}
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