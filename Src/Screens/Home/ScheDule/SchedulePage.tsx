import { View, SafeAreaView, ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { LocaleConfig, Calendar } from "react-native-calendars";
import { MenuTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import Constants from "expo-constants";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { useIsFocused } from "@react-navigation/native";
import { SchdBubData } from "../../../Utils/_private/ApiData/SchdBubData";
import { SchdBubListSvc } from "../../../Services/_private/SchdBubApi";
import Spinner from "react-native-loading-spinner-overlay";
import moment from "moment";
import SchdlButtonStyle from "../../../Styles/SchdlStyles/SchdlButtonStyle";
import TextStyle from "../../../Styles/TextStyle";
import {
  ScdlEditIcon,
  SchldDelButton,
} from "../../../Components/IconCompo/ScdlEditDelIcon";
import {
  SchdlBefoCliklEditButton,
  SchdlAftrCliklEditButton,
  SchdlBefoClikDelButton,
  SchdlAftrClikDelButton,
} from "../../../Components/SchdlCompo/SchdlButton";
import { Octicons } from "@expo/vector-icons";

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
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(
    moment().format("YYYY-MM-DD") // 초기값을 오늘 날짜로 설정
  );

  const dateSelect = (date: string) => {
    setSelectedDate(date);
    scheduleForDate(date);
    console.log(date);
  };
  const scheduleForDate = (date: string) => {
    //로직 추가
  };

  const handleEditClick = () => {
    if (isEditClicked) {
      setIsEditClicked(false);
    } else {
      setIsEditClicked(true);
      setIsDeleteClicked(false);
    }
  };

  const handleDeleteClick = () => {
    if (isDeleteClicked) {
      setIsDeleteClicked(false);
    } else {
      setIsDeleteClicked(true);
      setIsEditClicked(false);
    }
  };

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
        onPressRegi={() => navigation.navigate("SchedulePostRegiPage")}
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
          onDayPress={(day) => dateSelect(day.dateString)}
        />
        <View style={[SgsButtonStyles.divideSchdlContentsLine]} />
        <View style={{ flexDirection: "row", height: deviceHeight * 0.06 }}>
          <View style={{ flex: 1, marginTop: deviceHeight * 0.009 }}>
            <Text
              style={[
                TextStyle.semibold15,
                { color: "#1E232C" },
                { marginLeft: deviceWidth * 0.08 },
                { lineHeight: deviceHeight * 0.06 },
              ]}
            >
              {selectedDate ? moment(selectedDate).format("DD") : "날짜 선택"}
              {"일"}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              marginTop: deviceHeight * 0.009,
            }}
          >
            <View
              style={{ flexDirection: "row", marginRight: deviceWidth * 0.08 }}
            >
              {isEditClicked ? (
                <SchdlAftrCliklEditButton onPress={handleEditClick} />
              ) : (
                <SchdlBefoCliklEditButton onPress={handleEditClick} />
              )}
              {isDeleteClicked ? (
                <SchdlAftrClikDelButton onPress={handleDeleteClick} />
              ) : (
                <SchdlBefoClikDelButton onPress={handleDeleteClick} />
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ScrollView>
            <View
              style={[SchdlButtonStyle.SchdlDetailBoxStyle, { height: "auto" }]}
            >
              {/** FlatList */}
              <View style={{ flexDirection: "column", marginTop: "5%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginLeft: "5%",
                  }}
                >
                  <View style={{ flex: 0.4 }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {isEditClicked ? (
                        <ScdlEditIcon />
                      ) : isDeleteClicked ? (
                        <SchldDelButton />
                      ) : (
                        <Octicons
                          name="dot-fill"
                          size={deviceWidth * 0.05}
                          color="#4BB781"
                        />
                      )}
                    </View>
                  </View>
                  <View
                    style={{
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "2%",
                    }}
                  >
                    <Text
                      style={[
                        TextStyle.medium12,
                        { color: "#1A3628" },
                        { textAlign: "left" },
                      ]}
                    >
                      {"예비 수강 신청 기간"}
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "flex-end",
                      marginLeft: "auto",
                      paddingRight: deviceWidth * 0.08,
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={[
                        TextStyle.semibold10,
                        { color: "#1A3628" },
                        { textAlign: "right" },
                      ]}
                    >
                      {"11월 15일"} {"~"} {"11월 19일"}
                    </Text>
                  </View>
                </View>
              </View>
              {/** FlatList */}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SchedulePage;
