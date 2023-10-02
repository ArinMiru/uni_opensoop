import { View, Text } from "react-native";
import React from "react";
import textStyle from "../../Styles/TextStyle";
import DrawerButtonStyles from "../../Styles/DrawerStyles/DrawerButtonStyles";

interface Textporops {
  children?: React.ReactNode;
  text?: string;
}

export const DrawerTextArea: React.FC<Textporops> = ({ children }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={[
          textStyle.medium20,
          {
            color: "#ffffff",
          },
        ]}
      >
        메뉴
      </Text>
    </View>
  );
};

export const Drawerdivision: React.FC<Textporops> = ({ children, text }) => {
  return (
    <View
      style={[
        DrawerButtonStyles.DrawerMenuHorizonLine,
        {
          flex: 1,
          justifyContent: "flex-end",
        },
      ]}
    >
      <Text
        style={[
          textStyle.semibold10,
          {
            color: "#ffffff",
            marginBottom: "5%",
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};
