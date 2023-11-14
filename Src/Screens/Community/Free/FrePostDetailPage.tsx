import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import {
  FreQstComment,
  FrePost,
} from "../../../Components/ListCompo/FreCompo/FreCompo";
import { BackIconEditDelTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { ListAnsTextInput } from "../../../Components/AllCompo/ListAnsTextInputCompo";
import { FreeBubDel } from "../../../Services/_private/FreeApi";
import { FreeAnsBubNew } from "../../../Services/AnsApi/FreeAnsApi";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { FreePostDetailProps } from "../../../Utils/NavigationProp/NavigationDetailScrProp";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { deviceHeight } from "../../../Utils/DeviceUtils";
import { ModalReuableFuction } from "../../../Utils/ReusableFuction/ModalReuableFuction";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import EditDelCloseModalStyle from "../../../Styles/ModalStyles/EditDelCloseModalStyles";
import {
  EditModalCompo,
  DelModalCompo,
  CloseModalCompo,
} from "../../../Components/AllCompo/ModalCompo";
import { CommonActions } from "@react-navigation/native";

const FreePostDetailPage: React.FC<FreePostDetailProps> = ({
  route,
  navigation,
}) => {
  const modalFunctions = ModalReuableFuction();
  const [cont, setCont] = useState<string>("");
  const userData = getUserData();
  const { CRE_SEQ, CONT, TIT, NICK_NM, LIKE_CNT, CRE_DAT, AnsFree } =
    route.params;

  const dellPress = async () => {
    try {
      const result = await FreeBubDel(CRE_SEQ);
      if (result && result.data.RSLT_CD === "00") {
        navigation.goBack();
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "BottomTabNavigations",
                state: {
                  routes: [
                    {
                      name: "ListPostPage",
                      params: { selectedCategory: "자유", newPageload: true },
                    },
                  ],
                },
              },
            ],
          })
        );
      } else {
        navigation.goBack();
        Alert.alert("실패", "게시물 삭제에 실패 하였습니다");
      }
    } catch (error) {
      console.error("삭제 오류:", error);
    }
  };

  const FreeAnsNewBut = async () => {
    try {
      const userData = getUserData();
      if (userData != null) {
        await FreeAnsBubNew(cont, CRE_SEQ);
        Alert.alert("성공", "댓글이 등록 되었습니다");
      } else {
        -885;
        console.error("userData가 null입니다.");
      }
    } catch (error) {
      console.error("등록 오류", error);
    }
  };

  const handleButEdit = () => {
    navigation.navigate("FreEditPostPage", {
      CRE_SEQ: CRE_SEQ,
      CONT: CONT,
      TIT: TIT,
    });
  };

  return (
    <Background>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={modalFunctions.bottomSheetModalRef}
          index={1}
          snapPoints={[
            deviceHeight * 0.25,
            deviceHeight * 0.25,
            deviceHeight * 0.25,
          ]}
          onDismiss={modalFunctions.handleCloseModal}
        >
          <View style={EditDelCloseModalStyle.contentContainer}>
            <EditModalCompo EditonPress={handleButEdit} />
            <DelModalCompo DelonPress={dellPress} />
            <CloseModalCompo CloseonPress={modalFunctions.handleCloseModal} />
          </View>
        </BottomSheetModal>
        <BackIconEditDelTopbarStyle
          Title="자유게시판"
          MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
          MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
          onPress={() => navigation.goBack()}
          onPressEditDel={modalFunctions.handleButtonPress}
        />
        <KeyboardAvoidingView
          style={[NewBackgroundStyle.ListDetailBackgroundStyle, { flex: 1 }]}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          enabled={true}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View>
              <FrePost
                nickname={NICK_NM}
                fretit={TIT}
                frecont={CONT}
                freposttime={CRE_DAT}
                frelike={LIKE_CNT}
                delPress={dellPress}
              />
            </View>
            <View style={{ height: "2%" }}></View>

            <View
              style={{
                alignItems: "center",
                paddingBottom: deviceHeight * 0.09,
              }}
            >
              {AnsFree.sort((a, b) => b.ANS_SEQ - a.ANS_SEQ).map((comment) => (
                <FreQstComment
                  key={comment.ANS_SEQ}
                  freqstansnick={comment.ANS_MEMB_ID}
                  freqstanstit={comment.CONT}
                  freqstanstime={comment.CRE_DAT}
                />
              ))}
            </View>
          </ScrollView>
          <KeyboardAvoidingView>
            <ListAnsTextInput
              autoCapitalize="none"
              keyboardType="default"
              keyboardAppearance="default"
              value={cont}
              onChangeText={(text) => setCont(text)}
              onPress={FreeAnsNewBut}
            />
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
        {modalFunctions.modalVisible && (
          <TouchableWithoutFeedback onPress={modalFunctions.handleCloseModal}>
            <View style={EditDelCloseModalStyle.overlay} />
          </TouchableWithoutFeedback>
        )}
      </BottomSheetModalProvider>
    </Background>
  );
};

export default FreePostDetailPage;
