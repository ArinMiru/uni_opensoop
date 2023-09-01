import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TestScreen from "./TestScreen";

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TestScreen" component={TestScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
