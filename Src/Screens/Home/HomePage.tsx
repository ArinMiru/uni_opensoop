import React, { useEffect, useState } from "react";
import { View, BackHandler, Text } from "react-native";
import { deviceWidth } from "../../Utils/DeviceUtils";
import {
  MainOpenBub,
  MainVoteBub,
  MainSchdBub,
  MainSchdNoBox,
  OneMainSchdBub,
} from "../../Components/MainPageCompo/MainPageCompo";
import { Background } from "../../Components/AllCompo/Background";
import { MainPageTopbarStyle } from "../../Components/AllCompo/TopbarCompo";
import { ScreenProps } from "../../Navigations/StackNavigator";
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { useFocusEffect } from "@react-navigation/native";
import { openBubListCall } from "../../Services/_private/NoticeApi";
import { votBubListCall } from "../../Services/_private/VoteApi";
import { SchdBubDtlListSvc } from "../../Services/_private/SchdBubApi";
import { VoteItem } from "../../Utils/_private/ApiData/VoteData";
import { NoticeItem } from "../../Utils/_private/ApiData/NoticeData";
import { SCHD_BuB_Item } from "../../Utils/_private/ApiData/SchdBubDtlListSvc";
import { timeUntilVoteEnds } from "../../Utils/voteTimeUtil";

const HomePageScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData();
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [votes, setVotes] = useState<VoteItem[]>([]);
  const [schedules, setSchedules] = useState<SCHD_BuB_Item[]>([]);
  const [todaySchedules, setTodaySchedules] = useState<SCHD_BuB_Item[]>([]);

  useEffect(() => {
    const fetchNoticeData = async () => {
      const REQ_PAGE = 1;
      const noticeData = await openBubListCall(REQ_PAGE);
      if (noticeData && noticeData.OPEN_BUB) {
        setNotices(noticeData.OPEN_BUB.slice(0, 2));
      }
    };

    const fetchVoteData = async () => {
      const voteData = await votBubListCall();
      if (voteData && voteData.VOTE_BUB) {
        setVotes(voteData.VOTE_BUB.slice(0, 2));
      }
    };

    const fetchScheduleData = async () => {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      const formattedToday = `${yyyy}-${mm}-${dd}`;

      const scheduleData = await SchdBubDtlListSvc(formattedToday);
      if (scheduleData !== null) {
        setSchedules(scheduleData.SCHD_BUB);
      } else {
        setSchedules([]);
      }
    };

    fetchNoticeData();
    fetchVoteData();
    fetchScheduleData();
  }, []);

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const formattedToday = `${yyyy}-${mm}-${dd}`;

    const filteredSchedules = schedules.filter(
      (schedule) =>
        schedule.STRT_SCHD_YMD <= formattedToday &&
        schedule.END_SCHD_YMD >= formattedToday
    );

    setTodaySchedules(filteredSchedules);
  }, [schedules]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("AccountLogin");
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [navigation])
  );

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
            F_Open_Tit={notices[0]?.TIT || "공지사항 1제목"}
            F_Open_MEMB_NM={notices[0]?.MEMB_NM || "작성자 이름"}
            F_Open_DEP_NM={notices[0]?.MEMB_DEP_NM || "학과 이름"}
            F_TIT_NM={notices[0]?.TIT_NM || "직책 이름"}
            F_Open_Photo={notices[0]?.IMAGE_INFO[0]?.FILE_PATH || "이미지 path"}
            F_OpenPostLike={notices[0]?.LIKE_CNT}
            S_Open_Tit={notices[1]?.TIT || "공지사항 2제목"}
            S_Open_MEMB_NM={notices[1]?.MEMB_NM || "작성자 이름"}
            S_Open_DEP_NM={notices[1]?.MEMB_DEP_NM || "학과 이름"}
            S_TIT_NM={notices[1]?.TIT_NM || "직책 이름"}
            S_Open_Photo={notices[1]?.IMAGE_INFO[0]?.FILE_PATH || "이미지 path"}
            S_OpenPostLike={notices[1]?.LIKE_CNT}
            onPress={() =>
              navigation.navigate("NoticePage", { newPageload: true })
            }
          />
        </View>
        <View>
          <MainVoteBub
            F_VOT_TIT={votes[0]?.VOTE_TITLE || "1번째 투표 제목"}
            S_VOT_TIT={votes[1]?.VOTE_TITLE || "2번째 투표 제목"}
            F_VOT_TOT={`마감 ${
              votes[0]?.VOT_EXPR_DATE
                ? timeUntilVoteEnds(votes[0]?.VOT_EXPR_DATE)
                : "날짜 정보 없음"
            }`}
            S_VOT_TOT={`마감 ${
              votes[1]?.VOT_EXPR_DATE
                ? timeUntilVoteEnds(votes[1]?.VOT_EXPR_DATE)
                : "날짜 정보 없음"
            }`}
            F_VOT_GO_CD={votes[0]?.VOT_GO_CD || "2023-10-19"}
            S_VOT_GO_CD={votes[1]?.VOT_GO_CD || "2023-10-20"}
            onPress={() => navigation.navigate("VotePostPage")}
          />
        </View>
        <View style={{ marginBottom: deviceWidth * 0.04 }}>
          {todaySchedules && todaySchedules.length > 0 ? (
            todaySchedules.length === 1 ? (
              <OneMainSchdBub
                F_STRT_SCHD_YMD={
                  todaySchedules[0]?.STRT_SCHD_YMD.split(" ")[0] || "시작 날짜"
                }
                F_END_SCHD_YMD={
                  todaySchedules[0]?.END_SCHD_YMD.split(" ")[0] || "종료 날짜"
                }
                F_SCHD_TIT={todaySchedules[0]?.TIT || "일정 제목"}
                onPress={() => navigation.navigate("SchedulPage")}
              />
            ) : (
              <MainSchdBub
                F_STRT_SCHD_YMD={
                  todaySchedules[0]?.STRT_SCHD_YMD.split(" ")[0] || "시작 날짜"
                }
                F_END_SCHD_YMD={
                  todaySchedules[0]?.END_SCHD_YMD.split(" ")[0] || "종료 날짜"
                }
                S_STRT_SCHD_YMD={
                  todaySchedules[1]?.STRT_SCHD_YMD.split(" ")[0] || "시작 날짜"
                }
                S_END_SCHD_YMD={
                  todaySchedules[1]?.END_SCHD_YMD.split(" ")[0] || "종료 날짜"
                }
                F_SCHD_TIT={todaySchedules[0]?.TIT || "첫번째 일정 제목"}
                S_SCHD_TIT={todaySchedules[1]?.TIT || "두번째 일정 제목"}
                onPress={() => navigation.navigate("SchedulPage")}
              />
            )
          ) : (
            <MainSchdNoBox onPress={() => navigation.navigate("SchedulPage")} />
          )}
        </View>
      </View>
    </Background>
  );
};

export default HomePageScreen;
