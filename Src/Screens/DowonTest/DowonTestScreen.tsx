import React from "react";
import { View, Text } from "react-native";
import { MainOpenBub } from "../../Components/MainPageCompo/MainPageCompo";
import { Background } from "../../Components/AllCompo/Background";
import NewBackgroundStyle from "../../Styles/NewBackgroundStyle";
import { TopbarEditButton } from "../../Components/AllCompo/TopbarEditDelRegiButton";
import {
  MainPageTopbarStyle,
  MenuTopbarStyle,
} from "../../Components/AllCompo/TopbarCompo";

interface ScreenProps {
  children?: React.ReactNode;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * @Dowon(김도원 생성)
 * DowonTestScreen
 */

const DowonTestScreen = ({}) => {
  return (
    <Background>
      <MainPageTopbarStyle text={"공지사항"} />
      <View
        style={[
          NewBackgroundStyle.OnlyTopRadiusBackgroundStyle,
          { alignItems: "center" },
        ]}
      ></View>
    </Background>
  );
};

export default DowonTestScreen;
