import React from "react";
import { View } from "react-native";
import { deviceWidth } from "../../Utils/DeviceUtils";
import {
  MainOpenBub,
  MainVoteBub,
  MainSchdBub,
} from "../../Components/MainPageCompo/MainPageCompo";
import { Background } from "../../Components/AllCompo/Background";
import { MainPageTopbarStyle } from "../../Components/AllCompo/TopbarCompo";
import { ScreenProps } from "../../Navigations/StackNavigator";
import { getUserData } from "../../Utils/_private/ApiData/UserData";

const HomePageScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData(); // 현재 사용자 데이터
  return (
    <Background>
      <MainPageTopbarStyle
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPressProfile={() => navigation.navigate("ProfilePage")}
      />
      <View
        style={{
          height: "91%",
          justifyContent: "space-between",
        }}
      >
        <View>
          <MainOpenBub
            F_Open_Tit="공지사항 1제목"
            F_Open_MEMB_NM="안재경"
            F_Open_DEP_NM="정보통신학과"
            F_TIT_NM="학회장"
            F_OpenPostLike={100}
            S_Open_Tit="공지사항 2제목"
            S_Open_MEMB_NM="장현빈"
            S_Open_DEP_NM="정보통신학과"
            S_TIT_NM="부학회장"
            S_OpenPostLike={200}
            onPress={() => navigation.navigate("NoticePage")}
          />
        </View>
        <View>
          <MainVoteBub
            F_VOT_TIT="1번쨰 투표 제목"
            S_VOT_TIT="2번쨰 투표 제목"
            F_VOT_TOT={100}
            S_VOT_TOT={200}
            F_VOT_GO_CD="2023-10-19"
            S_VOT_GO_CD="2023-10-20"
            onPress={() => navigation.navigate("VotePostPage")}
          />
        </View>
        <View style={{ marginBottom: deviceWidth * 0.04 }}>
          <MainSchdBub
            F_STRT_SCHD_YMD="2023-10-18"
            F_END_SCHD_YMD="2023-10-19"
            S_STRT_SCHD_YMD="2023-10-18"
            S_END_SCHD_YMD="2023-10-19"
            F_SCHD_TIT="첫번째 일정 제목"
            S_SCHD_TIT="두번쨰 일정 제목"
            onPress={() => navigation.navigate("SchedulPage")}
          />
        </View>
      </View>
    </Background>
  );
};

export default HomePageScreen;
