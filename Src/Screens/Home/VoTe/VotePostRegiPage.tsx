import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import { BackIconRegiTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { VoteInput } from "../../../Components/VoteCompo/VoteTextInput";
import { SchdlVoteRegiTitInput } from "../../../Components/SchdlCompo/SchdlInput";
import { AddVoteOptionButton } from "../../../Components/VoteCompo/VoteButton";
import VoteBoxStyle from "../../../Styles/VoteStyles/VoteBoxStyle";
import textStyle from "../../../Styles/TextStyle";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { DateSltButton } from "../../../Components/VoteCompo/VoteButton";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { votBubRegi } from "../../../Services/_private/VoteApi";
import VoteInputStyle from "../../../Styles/VoteStyles/VoteInputStyle";
import { VoteTitInput } from "../../../Components/VoteCompo/VoteTextInput";

/**
 * @Dowon(김도원 생성)
 * 투표 게시물 등록 페이지
 * [02, 03, 05] TIT_CD 에 맞는 사용자만 접근 가능 페이지
 */

type UserVoteInput = {
  VOT_TITLE: string;
  VOT_TYPE_CD: string;
  VOT_GO_CD: string;
  VOT_EXPR_DATE: string;
  VOT_DESC: string;
  VOT_INFO: string;
};

const VotePostRegiPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData();
  const [isButtonOn, setIsButtonOn] = useState<boolean>(false);
  const [voteTitle, setVoteTitle] = useState<string>(""); // 투표 제목 상태
  const [voteInfos, setVoteInfos] = useState<string[]>(["", "", "", ""]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [tit, setTit] = useState<string>("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const formattedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    setSelectedDate(formattedDate);
    hideDatePicker();
  };

  const [voteInputs, setVoteInputs] = useState<number[]>([1, 2]);

  const handleAddVoteInput = () => {
    if (voteInputs.length < 4) {
      setVoteInputs((prev) => [...prev, prev.length + 1]);
    }
  };

  const getFormattedDate = () => {
    const date = selectedDate;
    const formattedDate = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
    return formattedDate;
  };

  const getVoteInfo = () => {
    return voteInputs.map((_, index) => `${index + 1}:${_}`).join(",");
  };

  const handleVoteInfoChange = (index: number, text: string) => {
    const newVoteInfos = [...voteInfos];
    newVoteInfos[index] = text;
    setVoteInfos(newVoteInfos);
  };

  const registerVote = async () => {
    const VOT_INFO = getVoteInfo();
    const VOT_EXPR_DATE = getFormattedDate();

    const voteItem = {
      VOTE_TITLE: voteTitle,
      VOT_TYPE_CD: isButtonOn ? "02" : "01",
      VOT_EXPR_DATE: VOT_EXPR_DATE,
      VOT_DESC: "",
      VOT_INFO: voteInfos,
    };
    console.log(voteItem);
    votBubRegi(
      voteItem.VOTE_TITLE,
      voteItem.VOT_TYPE_CD,
      voteItem.VOT_EXPR_DATE,
      voteItem.VOT_DESC,
      voteItem.VOT_INFO
    );
  };

  return (
    <Background>
      <BackIconRegiTopbarStyle
        Title="투표 등록"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPress={() => navigation.goBack()}
        onPressRegi={registerVote}
      />
      <View style={[NewBackgroundStyle.OnlyTopRadiusBackgroundStyle]}>
        <View
          style={{
            flex: 1.5,
            width: deviceWidth * 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={VoteInputStyle.VoteTitInputAreaStyle}>
            <VoteTitInput
              text="투표 제목을 입력하세요"
              value={tit}
              onChangeText={(text) => setTit(text)}
              keyboardType="default"
              keyboardAppearance="default"
              autoCapitalize="none"
            ></VoteTitInput>
            <Text
              style={[
                textStyle.semibold08,
                { color: "#919191", alignSelf: "flex-end", paddingTop: "2%" },
              ]}
            >
              최소 5자 / 최대 30자
            </Text>
          </View>
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
          {voteInputs.map((_, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: deviceWidth * 1,
              }}
            >
              <VoteInput
                text="텍스트"
                value={voteInfos[index]}
                onChangeText={(text) => handleVoteInfoChange(index, text)}
              />
            </View>
          ))}
          {voteInputs.length < 4 && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: deviceWidth * 1,
              }}
            >
              <AddVoteOptionButton onPress={handleAddVoteInput} />
            </View>
          )}
        </View>
        <View style={{ flex: 0.3 }}></View>
        <View
          style={{
            flex: 1.4,
            width: deviceWidth * 1,
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              flex: 0.7,
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
                마감기한 설정
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <DateSltButton date={getFormattedDate()} onPress={showDatePicker} />

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              locale="ko-KR"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "column",
            width: deviceWidth * 1,
            marginLeft: deviceWidth * 0.11,
          }}
        >
          <TouchableOpacity
            style={[
              { flexDirection: "row" },
              { alignItems: "center" },
              { marginRight: deviceWidth * 0.08 },
            ]}
            onPress={() => setIsButtonOn(!isButtonOn)}
          >
            {isButtonOn ? (
              <Ionicons
                name="ios-radio-button-on"
                size={deviceWidth * 0.07}
                color="#4BB781"
              />
            ) : (
              <Ionicons
                name="ios-radio-button-off"
                size={deviceWidth * 0.07}
                color="#4BB781"
              />
            )}
            <Text
              style={[
                textStyle.regular12,
                { color: "#4BB781" },
                { marginLeft: deviceWidth * 0.015 },
              ]}
            >
              복수 선택
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 3,
          }}
        ></View>
      </View>
    </Background>
  );
};

export default VotePostRegiPage;
