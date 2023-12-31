import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import VoteBoxStyle from "../../../Styles/VoteStyles/VoteBoxStyle";
import textStyle from "../../../Styles/TextStyle";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import { BackIconRegiTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import {
  SchdlVoteEditTitInput,
  SchdlVoteRegiTitInput,
} from "../../../Components/SchdlCompo/SchdlInput";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SchdlTimeButton } from "../../../Components/SchdlCompo/SchdlButton";
import {
  schdBubSvcNew,
  schdBubSvcUp,
} from "../../../Services/_private/SchdBubApi";
import { SchdEditPostPageProp } from "../../../Utils/NavigationProp/NavigationDetailScrProp";
import {
  formatDateString,
  handleDateConfirm,
} from "../../../Utils/ReusableFuction/DateFormat";

const SchedulePostRegiPage: React.FC<SchdEditPostPageProp> = ({
  navigation,
  route,
}) => {
  const { TIT, STRT_SCHD_YMD, END_SCHD_YMD, CRE_SEQ } = route.params;
  const userData = getUserData();
  const [schdTitle, setSchdTitle] = useState<string>(TIT);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateType, setDateType] = useState<"start" | "end">("start");
  const showStartDatePicker = () => {
    setDateType("start");
    setDatePickerVisibility(true);
  };

  const showEndDatePicker = () => {
    setDateType("end");
    setDatePickerVisibility(true);
  };

  const [selectedStartDate, setSelectedStartDate] = useState<string>(
    formatDateString(STRT_SCHD_YMD)
  );
  const [selectedEndDate, setSelectedEndDate] = useState<string>(
    formatDateString(END_SCHD_YMD)
  );

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const scEdit = async () => {
    try {
      const result = await schdBubSvcUp(
        schdTitle,
        selectedStartDate,
        selectedEndDate,
        CRE_SEQ
      );
      if (result && result.RSLT_CD === "00") {
        navigation.goBack();
        Alert.alert("성공", "수정을 성공하였습니다.");
      } else {
        // API 호출 실패시 에러 메시지 표시
        Alert.alert("실패", "수정에 실패하였습니다. 데이터를 확인해주세요.");
      }
    } catch (error) {
      // 네트워크 에러 등 기타 에러 처리
      Alert.alert("오류", "수정 중 오류가 발생하였습니다.");
    }
  };

  const handleStartDateConfirm = (date: Date) => {
    handleDateConfirm(
      selectedStartDate,
      selectedEndDate,
      date,
      setSelectedStartDate,
      hideDatePicker
    );
  };

  const handleEndDateConfirm = (date: Date) => {
    handleDateConfirm(
      selectedStartDate,
      selectedEndDate,
      date,
      setSelectedEndDate,
      hideDatePicker
    );
  };

  return (
    <Background>
      <BackIconRegiTopbarStyle
        Title="일정 수정"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPress={() => navigation.goBack()}
        onPressRegi={scEdit}
      />
      <View style={[NewBackgroundStyle.OnlyTopRadiusBackgroundStyle]}>
        <View
          style={{
            flex: 2,
            width: deviceWidth * 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SchdlVoteEditTitInput
            text={schdTitle}
            value={schdTitle}
            onChangeText={(text) => setSchdTitle(text)}
          />
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "column",
            width: deviceWidth * 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              width: deviceWidth * 1,
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                flex: 0.2,
                justifyContent: "center",
              }}
            >
              <View
                style={[
                  VoteBoxStyle.voteExprBox,
                  { left: deviceWidth * 0.1 },
                  { justifyContent: "center" },
                ]}
              >
                <Text
                  style={[
                    textStyle.medium10,
                    { color: "#67B28A", lineHeight: deviceHeight * 0.025 },
                    { textAlign: "center" },
                  ]}
                >
                  날짜 설정
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <SchdlTimeButton
                startDate={selectedStartDate}
                endDate={selectedEndDate}
                onPressStartDate={showStartDatePicker}
                onPressEndDate={showEndDatePicker}
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                locale="ko-KR"
                onConfirm={
                  dateType === "start"
                    ? handleStartDateConfirm
                    : handleEndDateConfirm
                }
                onCancel={hideDatePicker}
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 4 }}></View>
      </View>
    </Background>
  );
};

export default SchedulePostRegiPage;
