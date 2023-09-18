import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ModalScreen from "../Screens/ModalScreen";
import { StackNavigationProp } from "@react-navigation/stack";
import AccountLogin from "../Screens/Account/SignIn/AccountLogin";
import AccountLoginRegi from "../Screens/Account/SignIn/AccountLoginRegi";
import RegiId from "../Screens/Account/SignUp/RegiId";
import RegiNmNic from "../Screens/Account/SignUp/RegiNmNic";
import RegiPass from "../Screens/Account/SignUp/RegiPass";
import RegiChk from "../Screens/Account/SignUp/RegiChk";
import UniCertiDprtSrch from "../Screens/Account/UniCrtf/UniCertiDprtSrch";
import UniCertiEcode from "../Screens/Account/UniCrtf/UniCertiEcode";
import UniCertiEmail from "../Screens/Account/UniCrtf/UniCertiEmail";
import UniCertiStudNum from "../Screens/Account/UniCrtf/UniCertiStudNum";
import UniCertiChk from "../Screens/Account/UniCrtf/UniCertiChk"
import UniCertiSchSrch from "../Screens/Account/UniCrtf/UniCertiSchSrch";
import PassFindEcode from "../Screens/Account/PassFind/PassFindEcode";
import PassFindForEmail from "../Screens/Account/PassFind/PassFindForEmail";
import PassFindForId from "../Screens/Account/PassFind/PassFindForId";
import PassFindNewPass from "../Screens/Account/PassFind/PassFindNewPass";
import PassFindChk from "../Screens/Account/PassFind/PassFindChk";
import IdFindEmail from "../Screens/Account/IdFind/IdFindEmail";
import IdFindOut from "../Screens/Account/IdFind/IdFindOut";
import NoticePage from "../Screens/Home/NoTice/NoticePage";
import Topbartest from "../Screens/Account/IdFind/Topbartest";
import DrawerScreen from "../Components/AllCompo/DrawerMenu/DrawerScreen";

type RootStackParamList = {
  //파라미터 전달 값 없음
  ModalScreen: undefined;
  AccountLoginRegi: undefined;
  AccountLogin: undefined;
  RegiId: undefined;
  RegiNmNic: undefined;
  RegiPass: undefined; //파라미터 전달 값 없음
  RegiChk: undefined;
  UniCertiDprtSrch: undefined;
  UniCertiEcode: undefined;
  UniCertiEmail: undefined;
  UniCertiStudNum: undefined;
  UniCertiChk: undefined;
  UniCertiSchSrch: undefined;
  PassFindEcode: undefined;
  PassFindForEmail: undefined;
  PassFindForId: undefined;
  PassFindNewPass: undefined;
  PassFindChk: undefined;
  IdFindEmail: undefined;
  IdFindOut: undefined;
  NoticePage: undefined;
  Topbartest: undefined;
  DrawerScreen: undefined;
};

export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "AccountLoginRegi">;
};

export type DrawerScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "DrawerScreen">;
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
        name="RegiChk"
        component={RegiChk}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="UniCertiEcode"
        component={UniCertiEcode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniCertiSchSrch"
        component={UniCertiSchSrch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniCertiDprtSrch"
        component={UniCertiDprtSrch}
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
        name="UniCertiChk"
        component={UniCertiChk}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassFindEcode"
        component={PassFindEcode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassFindForEmail"
        component={PassFindForEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassFindForId"
        component={PassFindForId}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassFindNewPass"
        component={PassFindNewPass}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassFindChk"
        component={PassFindChk}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IdFindEmail"
        component={IdFindEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IdFindOut"
        component={IdFindOut}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NoticePage"
        component={NoticePage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Topbartest"
        component={Topbartest}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DrawerScreen"
        component={DrawerScreen}
        options={{ headerShown: false, presentation: "transparentModal" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
