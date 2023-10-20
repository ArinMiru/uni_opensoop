import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import HomePageScreen from "../Screens/Home/HomePage";
import NoTicePage from "../Screens/Home/NoTice/NoticePage";
import ListPostPage from "../Screens/Community/ListPostPage";
import SchedulePage from "../Screens/Home/ScheDule/SchedulePage"; // 경로 수정
import VotePostPage from "../Screens/Home/VoTe/VotePostPage"; // 경로 수정
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  FreeIcon,
  NoticeIcon,
  SchdlIcon,
  VoteIcon,
  BottomTabLogo,
} from "../Components/IconCompo/DrawerIcon";
import { deviceHeight } from "../Utils/DeviceUtils";

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const [selectedIcon, setSelectedIcon] = useState("HomePageScreen");

  return (
    <View style={{ flexDirection: "row", backgroundColor: "lightgray" }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.name,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
            setSelectedIcon(route.name);
          }
        };

        let iconComponent;
        if (route.name === "NoticePage") {
          iconComponent = (
            <NoticeIcon
              style={{
                paddingTop: "20%",
              }}
              color={selectedIcon === "NoticePage" ? "#484C52" : "#D9D9D9"}
            />
          );
        } else if (route.name === "ListPostPage") {
          iconComponent = (
            <FreeIcon
              style={{
                paddingTop: "20%",
              }}
              color={selectedIcon === "ListPostPage" ? "#484C52" : "#D9D9D9"}
            />
          );
        } else if (route.name === "SchedulePage") {
          iconComponent = (
            <SchdlIcon
              style={{
                paddingTop: "20%",
              }}
              color={selectedIcon === "SchedulePage" ? "#484C52" : "#D9D9D9"}
            />
          );
        } else if (route.name === "VotePostPage") {
          iconComponent = (
            <VoteIcon
              style={{
                paddingTop: "20%",
              }}
              color={selectedIcon === "VotePostPage" ? "#484C52" : "#D9D9D9"}
            />
          );
        } else if (route.name === "HomePageScreen") {
          iconComponent = (
            <BottomTabLogo
              color={selectedIcon === "HomePageScreen" ? "#484C52" : "#D9D9D9"}
            />
          );
        }

        return (
          <View
            onTouchEnd={onPress}
            key={route.key}
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: isFocused ? "#FDFDFD" : "#FDFDFD",
              height: deviceHeight * 0.1,
              borderTopWidth: 0.5,
              borderTopColor: "#C3C3C3",
            }}
          >
            {iconComponent}
          </View>
        );
      })}
    </View>
  );
};

const BottomTabNavigations = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomePageScreen"
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="NoticePage"
        component={NoTicePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ListPostPage"
        component={ListPostPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="HomePageScreen"
        component={HomePageScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SchedulePage"
        component={SchedulePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="VotePostPage"
        component={VotePostPage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigations;
