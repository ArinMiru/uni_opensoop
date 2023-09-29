import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NoticePage from "../Screens/Home/NoTice/NoticePage";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";
import SgsPostPage from "../Screens/Community/SuggeStion/SgsPostPage";
import FrePostPage from "../Screens/Community/Free/FrePostPage";
import QstPostPage from "../Screens/Community/QuesTion/QstPostPage";
import { View } from "react-native";
import Constants from "expo-constants";
import {
  DrawerNocticeButton,
  DrawerFreeButton,
  DrawerSqsButton,
  DrawerQstButton,
  DrawerVoteButton,
  DrawerSchdlButton,
} from "../Components/DrawerCopmpo/DrawerButton";
import {
  DrawerTextArea,
  Drawerdivision,
} from "../Components/DrawerCopmpo/DrawerCompo";

// navigation의 타입을 DrawerNavigationProp로 명시적으로 지정
type DrawerNavigatorProps = {
  navigation: DrawerNavigationProp<ParamListBase>;
};
const Drawer = createDrawerNavigator();

const CustomDrawerContent: React.FC<DrawerNavigatorProps> = ({
  navigation,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#4BB781",
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <DrawerTextArea />
      <Drawerdivision text="대학생활" />
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <DrawerNocticeButton onPress={() => navigation.navigate("공지사항")} />
      </View>
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <DrawerVoteButton onPress={() => navigation.navigate("공지사항")} />
      </View>
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <DrawerSchdlButton onPress={() => navigation.navigate("공지사항")} />
      </View>
      <Drawerdivision text="게시판" />

      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <DrawerFreeButton onPress={() => navigation.navigate("자유게시판")} />
      </View>
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <DrawerSqsButton onPress={() => navigation.navigate("건의게시판")} />
      </View>
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <DrawerQstButton onPress={() => navigation.navigate("질문게시판")} />
      </View>
      <View style={{ flex: 2 }}></View>
    </View>
  );
};

function DrawerNavigator({ navigation }: DrawerNavigatorProps) {
  return (
    <Drawer.Navigator
      initialRouteName="공지사항"
      drawerContent={(props) => <CustomDrawerContent navigation={navigation} />}
    >
      <Drawer.Screen
        name="공지사항"
        component={NoticePage}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="자유게시판"
        component={FrePostPage}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="건의게시판"
        component={SgsPostPage}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="질문게시판"
        component={QstPostPage}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
