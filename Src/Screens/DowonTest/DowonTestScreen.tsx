import React from "react";
import { AccountBackground } from "../../Components/AllCompo/Background";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";
import { MainOpenBub } from "../../Components/MainPageCompo/MainPageCompo";
import { Background } from "../../Components/AllCompo/Background";

/**
 * @Dowon(김도원 생성)
 * DowonTestScreen
 */

const DowonTestScreen = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<ParamListBase>;
}) => {
  return (
    <Background>
      <MainOpenBub />
    </Background>
  );
};

export default DowonTestScreen;
