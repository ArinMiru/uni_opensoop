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
import {
  MainVoteBub,
  MainSchdBub,
} from "../../Components/MainPageCompo/MainPageCompo";
import { deviceWidth } from "../../Utils/DeviceUtils";

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
      <MainPageTopbarStyle MEMB_SC_NM="평택대학교" MEMB_DEP_NM="정보통신학과" />
      <View style={{ marginBottom: deviceWidth * 0.025 }}>
        <MainOpenBub
          Title="공지사항 제목"
          MEMB_NM="안재경"
          MEMB_DEP_NM="정보통신학과"
          TIT_NM="학회장"
        />
      </View>
      <View style={{ marginBottom: deviceWidth * 0.025 }}>
        <MainVoteBub Title="테스트" VOT_GO_CD="2023-10-19" />
      </View>
      <View>
        <MainSchdBub
          STRT_SCHD_YMD="2023-10-18"
          END_SCHD_YMD="2023-10-19"
          Title="일정 제목 들어가는 곳"
        />
      </View>
    </Background>
  );
};

export default DowonTestScreen;
