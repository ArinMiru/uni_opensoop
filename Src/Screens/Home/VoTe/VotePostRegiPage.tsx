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
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import EditDelCloseModalStyle from "../../../Styles/ModalStyles/EditDelCloseModalStyles";
import { openBubListDell } from "../../../Services/_private/NoticeApi";
import { ModalReuableFuction } from "../../../Utils/ReusableFuction/ModalReuableFuction";
import { DateSltModlCompo } from "../../../Components/AllCompo/ModalCompo";
import DatePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { votBubRegiCall } from "../../../Services/_private/VoteApi";

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
  const [selectedCreSeq, setSelectedCreSeq] = useState<number>(0);
  const [isButtonOn, setIsButtonOn] = useState<boolean>(false);
  const [voteTitle, setVoteTitle] = useState<string>(""); // 투표 제목 상태

  const modalFunctions = ModalReuableFuction();
  const modalItemDel = () => {
    openBubListDell(selectedCreSeq);
    modalFunctions.handleCloseModal();
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(
    `${new Date().getFullYear()}년 ${
      new Date().getMonth() + 1
    }월 ${new Date().getDate()}일`
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const formattedDate = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
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
    const date = new Date(selectedDate);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  const getVoteInfo = () => {
    return voteInputs.map((_, index) => `${index + 1}:${_}`).join(",");
  };

  const registerVote = async () => {
    const VOT_INFO = getVoteInfo();
    const VOT_EXPR_DATE = getFormattedDate();

    const voteItem = {
      VOTE_TITLE: voteTitle,
      VOT_TYPE_CD: "",
      VOT_GO_CD: "",
      VOT_EXPR_DATE: VOT_EXPR_DATE,
      VOT_DESC: "",
      VOT_INFO: VOT_INFO,
      VOT_SEL_SEQ: "",
      CRE_SEQ: "",
    };
  };

  return (
    <Background>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={modalFunctions.bottomSheetModalRef}
          index={1}
          snapPoints={[
            deviceHeight * 0.4,
            deviceHeight * 0.4,
            deviceHeight * 0.4,
          ]}
          onDismiss={modalFunctions.handleCloseModal}
        >
          <View style={EditDelCloseModalStyle.contentContainer}>
            <DateSltModlCompo />
          </View>
        </BottomSheetModal>

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
              flex: 1,
              width: deviceWidth * 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SchdlVoteRegiTitInput
              text="제목을 입력하세요."
              value={voteTitle}
              onChangeText={setVoteTitle}
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
                <VoteInput text="텍스트" value="" />
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
              flex: 1,
              width: deviceWidth * 1,
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                flex: 0.5,
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
              <DateSltButton date={selectedDate} onPress={showDatePicker} />
              {/**    
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                locale="ko-KR"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              */}
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
                  size={deviceWidth * 0.05}
                  color="#4BB781"
                />
              ) : (
                <Ionicons
                  name="ios-radio-button-off"
                  size={deviceWidth * 0.05}
                  color="#4BB781"
                />
              )}
              <Text
                style={[
                  textStyle.regular10,
                  { color: "#4BB781" },
                  { marginLeft: deviceWidth * 0.02 },
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
        {modalFunctions.modalVisible && (
          <TouchableWithoutFeedback onPress={modalFunctions.handleCloseModal}>
            <View style={EditDelCloseModalStyle.overlay} />
          </TouchableWithoutFeedback>
        )}
      </BottomSheetModalProvider>
    </Background>
  );
};

export default VotePostRegiPage;
