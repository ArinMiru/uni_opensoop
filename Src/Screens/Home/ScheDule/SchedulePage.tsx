import { View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { LocaleConfig, Calendar } from "react-native-calendars";
import { MenuTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { Background } from "../../../Components/AllCompo/Background";
import Constants from "expo-constants";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { ScreenProps } from "../../../Navigations/StackNavigator";
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

  // 특정 날짜로 지정 (예: 10월 10일, 10월 15일)
  const specificDates = {
    "2023-10-10": { selected: true, marked: true, selectedColor: "#4BB781" },
    "2023-10-15": { selected: true, marked: true, selectedColor: "#4BB781" },
  };

  const userData = getUserData(); // 현재 사용자 데이터

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
          NewBackgroundStyle.OnlyTopRadiusBackgroundStyle,
          { alignItems: "center" },
        ]}
      >
        <Calendar
          header={{
            visible: true,
            format: "MM", // 이 부분을 "MM"으로 변경
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
