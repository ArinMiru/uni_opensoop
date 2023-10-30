import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { VoteInput } from "../../../Components/VoteCompo/VoteTextInput";
import { SchdlVoteRegiTitInput } from "../../../Components/SchdlCompo/SchdlInput";
import {
  ViewDupleVoteButton,
  AddVoteOptionButton,
} from "../../../Components/VoteCompo/VoteButton";
import VoteBoxStyle from "../../../Styles/VoteStyles/VoteBoxStyle";
import TextStyle from "../../../Styles/TextStyle";
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
import DateTimePickerModal from "react-native-modal-datetime-picker";

/**
 * @Dowon(김도원 생성)
 * 투표 게시물 등록 페이지
 * [02, 03, 05] TIT_CD 에 맞는 사용자만 접근 가능 페이지
 */

const VotePostRegiPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData(); // 현재 사용자 데이터
  const [selectedCreSeq, setSelectedCreSeq] = useState<number>(0);

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
    // date의 타입을 Date로 지정합니다.
    const formattedDate = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
    setSelectedDate(formattedDate);
    hideDatePicker();
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

        <BackIconTopbarStyle
          Title="투표 등록"
          MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
          MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
          onPress={() => navigation.goBack()}
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
            <SchdlVoteRegiTitInput text="제목을 입력하세요." />
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "column",
              width: deviceWidth * 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                width: deviceWidth * 1,
              }}
            >
              <VoteInput text="텍스트" />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: deviceWidth * 1,
              }}
            >
              <VoteInput text="텍스트" />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                width: deviceWidth * 1,
              }}
            >
              <AddVoteOptionButton />
            </View>
          </View>
          <View style={{ flex: 1 }}></View>
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
                    TextStyle.medium10,
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
            }}
          >
            <ViewDupleVoteButton />
          </View>
          <View
            style={{
              flex: 2,
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
