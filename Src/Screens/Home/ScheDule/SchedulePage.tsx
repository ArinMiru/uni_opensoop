import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Dimensions,
  Alert,
} from "react-native";
import { LocaleConfig, Calendar } from "react-native-calendars";
import { ManagerMenuTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import Constants from "expo-constants";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { CommonActions, useIsFocused } from "@react-navigation/native";
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
import {
  SchdBubDtlListSvc,
  schdBubSvcDel,
} from "../../../Services/_private/SchdBubApi";
import {
  SCHD_BuB_Item,
  parseSchdbubDtlListData,
} from "../../../Utils/_private/ApiData/SchdBubDtlListSvc";
import { StatusBar } from "expo-status-bar";
import { YMDSchdBubListSvc } from "../../../Services/_private/SchdBubApi";

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

interface MarkedDates {
  [date: string]: {
    selected: boolean;
    marked: boolean;
    selectedColor: string;
  };
}

const SchedulePage: React.FC<ScreenProps> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [schdData, setSchdData] = useState<SchdBubData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const userData = getUserData();
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(moment().format("YYYY-MM"));
  const [specificDates, setSpecificDates] = useState<MarkedDates>({});
  const [scheduleDetails, setScheduleDetails] = useState<
    SCHD_BuB_Item[] | null
  >(null);
  const [hasScheduleForSelectedDate, setHasScheduleForSelectedDate] =
    useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState<string | null>(
    moment().format("YYYY-MM-DD")
  );

  const dateSelect = (date: string) => {
    setSelectedDate(date);
    scheduleForDate(date);
  };

  const scheduleForDate = (date: string) => {
    SchdBubDtlListSvc(date)
      .then((data) => {
        if (data !== null) {
          const parsedData = parseSchdbubDtlListData(data).SCHD_BUB;
          setScheduleDetails(parsedData);
        }
      })
      .catch((error) => {});
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

  const updateMarkedDates = (data: SchdBubData, todayStr: string) => {
    const newMarkedDates: MarkedDates = {};
    data.SCHD_BUB.forEach((item) => {
      const day = item.DAY;
      const year = data.YEAR;
      const month = data.MONTH.padStart(2, "0");
      const dateStr = `${year}-${month}-${day.padStart(2, "0")}`;

      if (Number(item.CNT) > 0) {
        newMarkedDates[dateStr] = {
          selected: true,
          marked: true,
          selectedColor: "#4BB781",
        };
      }
    });

    // 현재 날짜에 빨간색 원을 추가합니다.
    newMarkedDates[todayStr] = {
      selected: true,
      marked: true,
      selectedColor: "red",
    };

    setSpecificDates(newMarkedDates);
  };

  const onMonthChange = async (month: string) => {
    const [year, m] = month.split("-");
    try {
      const newSchdData = await YMDSchdBubListSvc(year, m);
      const todayStr = moment().format("YYYY-MM-DD"); // 오늘 날짜 문자열
      if (newSchdData) {
        updateMarkedDates(newSchdData, todayStr);
      }
    } catch (error) {
      // 오류 처리
    }
  };

  const schdBubSvcDelPress = async (CRE_SEQ: number) => {
    try {
      const userData = getUserData();
      if (userData != null) {
        const result = await schdBubSvcDel(CRE_SEQ);
        if (result && result.RSLT_CD === "00") {
          Alert.alert("성공", "일정 삭제 성공", [
            {
              text: "확인",
              onPress: () =>
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [
                      {
                        name: "BottomTabNavigations",
                        state: {
                          routes: [
                            {
                              name: "SchedulePage",
                            },
                          ],
                        },
                      },
                    ],
                  })
                ),
            },
          ]);
        } else {
          navigation.goBack();
          Alert.alert("실패", "게시물 등록 실패");
        }
      } else {
      }
    } catch (error) {}
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

            const today = moment().format("YYYY-MM-DD");
            markedDates[today] = {
              selected: true,
              marked: true,
              selectedColor: "red",
            };
            setSchdData(data);
            setSpecificDates(markedDates);
          }
          setLoading(false);
        })
        .catch((error) => {});
    }
  }, [userData, isFocused]);

  const renderButtons = () => {
    if (!scheduleDetails || scheduleDetails.length === 0) {
      return null;
    }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
          marginTop: deviceHeight * 0.009,
        }}
      >
        <View style={{ flexDirection: "row", marginRight: deviceWidth * 0.08 }}>
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
    );
  };

  const renderScheduleForDate = (date: string) => {
    const daySchedules = schdData?.SCHD_BUB.filter(
      (item) => item.DAY === moment(date).format("DD") && Number(item.CNT) > 0
    );

    if (
      !daySchedules ||
      scheduleDetails === null ||
      daySchedules.length === 0
    ) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[TextStyle.semibold14]}>일정 없음</Text>
        </View>
      );
    }

    return (
      <View style={{ flexDirection: "column", marginTop: "5%" }}>
        {scheduleDetails.map((detail, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: "1%",
              marginLeft: "5%",
            }}
          >
            <View style={{ marginRight: deviceWidth * 0.03 }}>
              {["02", "03", "05"].includes(userData?.TIT_CD || "") &&
              isEditClicked ? (
                <ScdlEditIcon
                  onPress={() =>
                    navigation.navigate("SchdEditPostPage", {
                      TIT: detail.TIT,
                      STRT_SCHD_YMD: detail.STRT_SCHD_YMD,
                      END_SCHD_YMD: detail.END_SCHD_YMD,
                      CRE_SEQ: detail.CRE_SEQ,
                    })
                  }
                />
              ) : isDeleteClicked &&
                ["02", "03", "05"].includes(userData?.TIT_CD || "") ? (
                <SchldDelButton
                  onPress={() => schdBubSvcDelPress(detail.CRE_SEQ)}
                />
              ) : !isEditClicked && !isDeleteClicked ? (
                <Octicons
                  name="dot-fill"
                  size={deviceWidth * 0.05}
                  color="#4BB781"
                />
              ) : null}
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
                {detail.TIT}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "flex-end",
                marginLeft: "auto",
                marginRight: deviceWidth * 0.04,
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
                {moment(detail.STRT_SCHD_YMD).format("M월 D일")}
                {" ~ "}
                {moment(detail.END_SCHD_YMD).format("M월 D일")}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[{ flex: 1 }, { paddingTop: Constants.statusBarHeight }]}
    >
      <StatusBar style="dark" backgroundColor="white" />
      <ManagerMenuTopbarStyle
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
          markingType={"multi-period"}
          markedDates={specificDates}
          style={{
            width: deviceWidth * 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          onDayPress={(day) => dateSelect(day.dateString)}
          current={currentMonth}
          onMonthChange={(month) => {
            setCurrentMonth(month.dateString.substring(0, 7));
            onMonthChange(month.dateString.substring(0, 7));
          }}
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
          {renderButtons()}
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
              {selectedDate && renderScheduleForDate(selectedDate)}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SchedulePage;
