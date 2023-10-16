import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NoTicePage from "../Screens/Home/NoTice/NoticePage";
import FrePostPage from "../Screens/Community/Free/FrePostPage";
import SchedulePage from "../Screens/Home/ScheDule/SchedulePage";
import VotePostPage from "../Screens/Home/VoTe/VotePostPage";

const Tab = createBottomTabNavigator();

const BottomTabNavigations = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false, // 탭 이름 숨기기
        headerShown: false,
      }}
    >
      <Tab.Screen name="NoticePage" component={NoTicePage} />
      <Tab.Screen name="FrePostPage" component={FrePostPage} />
      <Tab.Screen name="SchedulePage" component={SchedulePage} />
      <Tab.Screen name="VotePostPage" component={VotePostPage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigations;
