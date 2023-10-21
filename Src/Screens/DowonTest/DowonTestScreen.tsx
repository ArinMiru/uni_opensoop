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
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";
import { BackIconTopbarStyle } from "../../Components/AllCompo/TopbarCompo";
import ProfilePageStyles from "../../Styles/MainPageStyles/ProfilePageStyles";
import TextStyle from "../../Styles/TextStyle";
import {
  ProfilePageUserInfo,
  CertLogoutBox,
} from "../../Components/ProfileCompo/ProfileCompo";

interface ScreenProps {
  children?: React.ReactNode;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * @Dowon(김도원 생성)
 * DowonTestScreen
 */

const DowonTestScreen: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <Background>
      <View style={{ justifyContent: "center" }}>
        <BackIconTopbarStyle Title="프로필" MEMB_SC_NM="" MEMB_DEP_NM="" />
        <View
          style={{
            marginLeft: deviceWidth * 0.085,
            marginTop: deviceWidth * 0.001,
            marginBottom: deviceWidth * 0.02,
          }}
        >
          <Text style={[TextStyle.semibold15, { color: "#181D27" }]}>
            {"회원정보"}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <ProfilePageUserInfo
            PROF_IMG_PATH=""
            MEMB_CD="2018143005"
            MEMB_DEP_NM="정보통신학과"
            MEMB_EM="hapje010@ptu.ac.kr"
            MEMB_GRA="4학년"
            MEMB_NM="김도원"
            MEMB_SC_NM="평택대학교"
            TIT_NM="재학생"
            NICK_NUM="피카피카"
          />
        </View>
        <View
          style={{
            marginLeft: deviceWidth * 0.085,
            marginTop: deviceWidth * 0.04,
            marginBottom: deviceWidth * 0.02,
          }}
        >
          <Text style={[TextStyle.semibold15, { color: "#181D27" }]}>
            {"기타"}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <CertLogoutBox />
        </View>
      </View>
    </Background>
  );
};

export default DowonTestScreen;
