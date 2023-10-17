import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

export const NavigationContainerWrapper = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default NavigationContainerWrapper; // 컴포넌트를 내보냅니다.
