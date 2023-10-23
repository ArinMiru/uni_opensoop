import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { VoteInput } from "../../../Components/VoteCompo/VoteTextInput";
import { SchdlVoteRegiTitInput } from "../../../Components/SchdlCompo/SchdlInput";
import {
  ViewDupleVoteButton,
  ViewAnnymButton,
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
  EditModalCompo,
  DelModalCompo,
  CloseModalCompo,
} from "../../../Components/AllCompo/ModalCompo";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import EditDelCloseModalStyle from "../../../Styles/ModalStyles/EditDelCloseModalStyles";
import { openBubListDell } from "../../../Services/_private/NoticeApi";
import { ModalReuableFuction } from "../../../Utils/ReusableFuction/ModalReuableFuction";
import { DateSltModlCompo } from "../../../Components/AllCompo/ModalCompo";
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
          Title="투표"
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
              <DateSltButton
                date="2024년 2월 24일"
                onPress={modalFunctions.handleButtonPress}
              />
            </View>
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <ViewDupleVoteButton />
            </View>
            <View style={{ flex: 1 }}>
              <ViewAnnymButton />
            </View>
          </View>
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
