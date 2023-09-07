import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ModalScreen from "../Screens/ModalScreen";
import { StackNavigationProp } from "@react-navigation/stack";
import AccountLogin from "../Screens/AccountLogin";
import AccountLoginRegi from "../Screens/AccountLoginRegi";
// import UniCertiDprtSrch from "../Screens/Account/SingUp/UniCertiDprtSrch";
import UniCertiDprtSrch from "../Screens/Account/UniCrtf/UniCertiDprtSrch";
import UniCertiEcode from "../Screens/Account/UniCrtf/UniCertiEcode";
import UniCertiEmail from "../Screens/Account/UniCrtf/UniCertiEmail";
import UniCertiStudNum from "../Screens/Account/UniCrtf/UniCertiStudNum"
import IdFindEcode from "../Screens/Account/IdFind/IdFindEcode"
import IdFindEmail from "../Screens/Account/IdFind/IdFindEmail"
import IdFindOut from "../Screens/Account/IdFind/IdFindOut"
import PassFindEcode from "../Screens/Account/PassFind/PassFindEcode"
import PassFindForEmail from "../Screens/Account/PassFind/PassFindForEmail"
import PassFindForId from "../Screens/Account/PassFind/PassFindForId"

type RootStackParamList = {
  //파라미터 전달 값 없음
  ModalScreen: undefined;
  AccountLoginRegi: undefined;
  AccountLogin: undefined; //파라미터 전달 값 없음
  UniCertiDprtSrch: undefined;
  UniCertiEcode : undefined;
  UniCertiEmail : undefined;
  UniCertiStudNum : undefined;
  IdFindEcode : undefined;
  IdFindEmail : undefined;
  IdFindOut : undefined;
  PassFindEcode : undefined;
  PassFindForEmail : undefined;
  PassFindForId : undefined;

};

export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "AccountLoginRegi">;
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
        name="UniCertiDprtSrch"
        component={UniCertiDprtSrch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniCertiEcode"
        component={UniCertiEcode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniCertiEmail"
        component={UniCertiEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniCertiStudNum"
        component={UniCertiStudNum}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />

      <Stack.Screen
        name="IdFindEmail"
        component={IdFindEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IdFindEcode"
        component={IdFindEcode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IdFindOut"
        component={IdFindOut}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PassFindForId"
        component={PassFindForId}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassFindForEmail"
        component={PassFindForEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassFindEcode"
        component={PassFindEcode}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

    
  );
};

export default StackNavigator;
