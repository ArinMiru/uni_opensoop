import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, Text } from "react-native";
import NoTicePage from "../Screens/Home/NoTice/NoticePage";
import FrePostPage from "../Screens/Community/Free/FrePostPage";
import SchedulePage from "../Screens/Home/ScheDule/SchedulePage"; // 경로 수정
import VotePostPage from "../Screens/Home/VoTe/VotePostPage"; // 경로 수정
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  FreeIcon,
  HomeIcon,
  SchdlIcon,
  VoteIcon,
  BottomTabLogo,
} from "../Components/IconCompo/DrawerIcon";
import { deviceHeight, deviceWidth } from "../Utils/DeviceUtils";
import JungTestScreen from "../Screens/JungTest/JungTestScreen";

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const [selectedIcon, setSelectedIcon] = useState("NoticePage");

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
            <HomeIcon
              style={{
                paddingTop: "20%",
              }}
              color={selectedIcon === "NoticePage" ? "#484C52" : "#D9D9D9"}
            />
          );
        } else if (route.name === "FrePostPage") {
          iconComponent = (
            <FreeIcon
              style={{
                paddingTop: "20%",
              }}
              color={selectedIcon === "FrePostPage" ? "#484C52" : "#D9D9D9"}
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
        } else if (route.name === "JungTestScreen") {
          iconComponent = (
            <BottomTabLogo
              color={selectedIcon === "JungTestScreen" ? "#484C52" : "#D9D9D9"}
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
      initialRouteName="NoticePage"
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="NoticePage"
        component={NoTicePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="FrePostPage"
        component={FrePostPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="JungTestScreen"
        component={JungTestScreen}
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
