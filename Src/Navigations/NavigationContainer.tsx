// navigation/NavigationContainer.tsx

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigator from "./StackNavigator";

export const NavigationContainerWrapper = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

NavigationContainerWrapper();
