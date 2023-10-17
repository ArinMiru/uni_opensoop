import React from "react";
import { View, Text } from "react-native";
import { MainOpenBub } from "../../Components/MainPageCompo/MainPageCompo";
import { Background } from "../../Components/AllCompo/Background";

const HomePageScreen = ({}) => {
  return (
    <Background>
      <MainOpenBub />
    </Background>
  );
};

export default HomePageScreen;
