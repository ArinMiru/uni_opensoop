// navigation/NavigationContainer.tsx

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigator from "./StackNavigator";

const NavigationContainerWrapper = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default NavigationContainerWrapper;                    // 컴포넌트를 내보냅니다.
