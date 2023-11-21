import React from "react";
import { View, Text } from "react-native";
import TextStyle from "../../Styles/TextStyle";
import { deviceWidth } from "../../Utils/DeviceUtils";
import { ScreenProps } from "../../Navigations/StackNavigator";
import { Background } from "../../Components/AllCompo/Background";
import { BackIconTopbarStyle } from "../../Components/AllCompo/TopbarCompo";
import {
  ProfilePageUserInfo,
  CertLogoutBox,
} from "../../Components/ProfileCompo/ProfileCompo";
import { getUserData } from "../../Utils/_private/ApiData/UserData";

const ProfilePage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData(); // 현재 사용자 데이터
  return (
    <Background>
      <View style={{ justifyContent: "center" }}>
        <BackIconTopbarStyle
          Title="프로필"
          MEMB_SC_NM=""
          MEMB_DEP_NM=""
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            marginLeft: deviceWidth * 0.085,
            marginTop: deviceWidth * 0.02,
            marginBottom: deviceWidth * 0.02,
          }}
        >
          <Text style={[TextStyle.semibold15, { color: "#181D27" }]}>
            {"회원정보"}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <ProfilePageUserInfo
            PROF_IMG_PATH={userData?.PROF_IMG_PATH || ""}
            MEMB_CD={userData?.MEMB_NUM || ""}
            MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
            MEMB_EM={userData?.MEMB_EM || ""}
            MEMB_GRA={userData?.MEMB_GRA || ""}
            MEMB_NM={userData?.MEMB_NM || ""}
            MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
            TIT_NM={userData?.TIT_NM || ""}
            NICK_NUM={userData?.NICK_NM || ""}
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
          <CertLogoutBox
            onPressTITCERT={() => navigation.navigate("TitleCodeCerti")}
            onPressLOGOUT={() => navigation.navigate("AccountLogin")}
          />
        </View>
      </View>
    </Background>
  );
};

export default ProfilePage;
