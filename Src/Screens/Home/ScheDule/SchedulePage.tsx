import { SafeAreaView } from "react-native";
import React from "react";
import { LocaleConfig, Calendar } from "react-native-calendars";
import { MenuTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";

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
const SchedulePage = () => {
  // 월 이름 배열을 별도로 만들어 현재 월을 가져오도록 설정
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MenuTopbarStyle text="일정" />
      <Calendar
        header={{
          visible: true,
          renderHeader: (date: Date) => {
            const month = monthNames[date.getMonth()];
            return month;
          },
        }}
        style={{ width: "100%", height: "50%" }}
      />
    </SafeAreaView>
  );
};

export default SchedulePage;
