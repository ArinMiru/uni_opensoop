import React, { useState } from "react";
import { View } from "react-native";
import {
  FreBefoClikButton,
  SgsBefoClikButton,
  QstBefoClikButton,
} from "../ListCommonCompo/ListCategorieButton";
import { deviceWidth } from "../../../Utils/DeviceUtils";

interface ButtonProps {
  firsttext?: string;
  secondtext?: string;
  thirdtext?: string;
  navigation?: { navigate: (screenName: string) => void };
  children?: React.ReactNode;
}

export const ListCategorieCompo: React.FC<ButtonProps> = ({
  firsttext,
  secondtext,
  thirdtext,
  children,
  navigation,
}) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonPress = (buttonType: string) => {
    setSelectedButton(buttonType);
    switch (buttonType) {
      case "fre":
        navigation?.navigate("FrePostPage"); // 'FrePageName' 을 해당 페이지의 이름으로 변경하세요.
        break;
      case "sgs":
        navigation?.navigate("SgsPostPage"); // 'SgsPageName' 을 해당 페이지의 이름으로 변경하세요.
        break;
      case "qst":
        navigation?.navigate("QstPostPage"); // 'QstPageName' 을 해당 페이지의 이름으로 변경하세요.
        break;
      default:
        break;
    }
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        marginRight: deviceWidth * 0.14,
        width: deviceWidth * 0.7,
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <FreBefoClikButton
        text={firsttext}
        color={selectedButton === "fre" ? "#4BB781" : "#A5DBC0"}
        onPress={() => handleButtonPress("fre")}
      />
      <SgsBefoClikButton
        text={secondtext}
        color={selectedButton === "sgs" ? "#4BB781" : "#A5DBC0"}
        onPress={() => handleButtonPress("sgs")}
      />
      <QstBefoClikButton
        text={thirdtext}
        color={selectedButton === "qst" ? "#4BB781" : "#A5DBC0"}
        onPress={() => handleButtonPress("qst")}
      />
      {children}
    </View>
  );
};
