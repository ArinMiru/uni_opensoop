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
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const ListCategorieCompo: React.FC<ButtonProps> = ({
  firsttext,
  secondtext,
  thirdtext,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        width: deviceWidth * 0.943,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <FreBefoClikButton
        text={firsttext}
        color={selectedCategory === "자유" ? "#212121" : "#ECECEC"}
        onPress={() => setSelectedCategory("자유")}
      />
      <SgsBefoClikButton
        text={secondtext}
        color={selectedCategory === "건의" ? "#212121" : "#ECECEC"}
        onPress={() => setSelectedCategory("건의")}
      />
      <QstBefoClikButton
        text={thirdtext}
        color={selectedCategory === "질문" ? "#212121" : "#ECECEC"}
        onPress={() => setSelectedCategory("질문")}
      />
    </View>
  );
};
