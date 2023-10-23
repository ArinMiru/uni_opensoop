import { View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { LocaleConfig, Calendar } from "react-native-calendars";
import { MenuTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import Constants from "expo-constants";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { useIsFocused } from "@react-navigation/native";
import { SchdBubData } from "../../../Utils/_private/ApiData/SchdBubData";
import { SchdBubListSvc } from "../../../Services/_private/SchdBubApi";
import Spinner from "react-native-loading-spinner-overlay";
import moment from "moment"; // moment 라이브러리 추가

LocaleConfig.locales["kr"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ],
  dayNamesShort: ["월", "화", "수", "목", "금", "토", "일"],
  today: "오늘",
};
LocaleConfig.defaultLocale = "kr";

const SchedulePage: React.FC<ScreenProps> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [schdData, setSchdData] = useState<SchdBubData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const userData = getUserData();
  const monthNames = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  useEffect(() => {
    if (userData !== null && isFocused) {
      setLoading(true);
      SchdBubListSvc()
        .then((data) => {
          if (data !== null) {
            const markedDates: {
              [date: string]: {
                selected: boolean;
                marked: boolean;
                selectedColor: string;
              };
            } = {};
            data.SCHD_BUB.forEach((item) => {
              const day = item.DAY;
              const year = data.YEAR;
              const month = data.MONTH;
              const hasSchedule = Number(item.CNT) > 0;

              if (hasSchedule) {
                markedDates[`${year}-${month}-${day}`] = {
                  selected: true,
                  marked: true,
                  selectedColor: "#4BB781",
                };
              }
            });

            // 현재 날짜 표시
            const today = moment().format("YYYY-MM-DD");
            markedDates[today] = {
              selected: true,
              marked: true,
              selectedColor: "red", // 빨간색으로 변경
            };

            setSchdData(data);
            setSpecificDates(markedDates);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("투표 게시판 데이터 가져오기 오류:", error);
        });
    }
  }, [userData, isFocused]);

  const [specificDates, setSpecificDates] = useState<{
    [date: string]: {
      selected: boolean;
      marked: boolean;
      selectedColor: string;
    };
  }>({});

  return (
    <SafeAreaView
      style={[{ flex: 1 }, { paddingTop: Constants.statusBarHeight }]}
    >
      <MenuTopbarStyle
        Title="일정"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPress={() => navigation.goBack()}
        onPressRegi={() => navigation.navigate("NoticePostRegiPage")}
      />
      <View
        style={[
          NewBackgroundStyle.BottomTabBackgroundStyle,
          { alignItems: "center" },
        ]}
      >
        <Spinner
          // 로딩 상태에 따라 Spinner를 화면에 표시
          visible={loading}
          textContent={"로딩 중..."}
          textStyle={{ color: "#FFF" }}
        />
        <Calendar
          header={{
            visible: true,
            format: "MM",
            renderHeader: (date: Date) => {
              const month = monthNames[date.getMonth()];
              return month;
            },
          }}
          markingType={"multi-dot"}
          markedDates={specificDates}
          style={{
            width: deviceWidth * 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
        <View style={[SgsButtonStyles.divideSchdlContentsLine]} />
      </View>
    </SafeAreaView>
  );
};

export default SchedulePage;
