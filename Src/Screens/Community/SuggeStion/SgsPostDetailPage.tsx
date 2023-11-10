import {
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import {
  SgsPost,
  SgsComment,
} from "../../../Components/ListCompo/SgsCompo/SgsCompo";
import { BackIconEditDelTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { ScrollView } from "react-native-gesture-handler";
import { SugBubListDel } from "../../../Services/_private/SugBubListApi";
import { SgsPostDetailProps } from "../../../Utils/NavigationProp/NavigationDetailScrProp";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { ListAnsTextInput } from "../../../Components/AllCompo/ListAnsTextInputCompo";
import { deviceHeight } from "../../../Utils/DeviceUtils";
import { SugAnsBubNew } from "../../../Services/AnsApi/SugAnsApi";
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

const SgsPostClkToast: React.FC<SgsPostDetailProps> = ({
  navigation,
  route,
}) => {
  const modalFunctions = ModalReuableFuction();
  const userData = getUserData();
  const [ansCont, setAnsCont] = useState<string>("");
  const { CRE_SEQ, CONT, TIT, NICK_NM, CRE_DAT, AnsFree } = route.params;
  const sgsDel = () => {
    SugBubListDel(CRE_SEQ);
  };
  const SugAnsNew = async () => {
    try {
      const userData = getUserData();
      if (userData != null) {
        await SugAnsBubNew(ansCont, CRE_SEQ);
      } else {
        console.error("userData가 null입니다.");
      }
    } catch (error) {
      console.error("등록 오류", error);
    }
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
            <EditModalCompo EditonPress={modalFunctions.handleEditPress} />
            <DelModalCompo DelonPress={modalFunctions.handleDeletePress} />
            <CloseModalCompo CloseonPress={modalFunctions.handleCloseModal} />
          </View>
        </BottomSheetModal>
        <BackIconEditDelTopbarStyle
          Title="건의게시판"
          MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
          MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
          onPress={() => navigation.goBack()}
          onPressEditDel={modalFunctions.handleButtonPress}
        />
        <KeyboardAvoidingView
          style={[NewBackgroundStyle.OnlyTopRadiusBackgroundStyle, { flex: 1 }]}
          behavior={Platform.select({ ios: "padding", android: undefined })}
          enabled={true}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View>
              <SgsPost
                nickname={NICK_NM}
                sgstit={TIT}
                sgscont={CONT}
                sgsposttime={CRE_DAT}
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
                <SgsComment
                  key={comment.ANS_SEQ}
                  sgsansnick={comment.ANS_MEMB_ID}
                  sgsanstit={comment.CONT}
                  sgsanstime={comment.CRE_DAT}
                />
              ))}
            </View>
          </ScrollView>
          <KeyboardAvoidingView>
            <ListAnsTextInput
              autoCapitalize="none"
              keyboardType="default"
              value={ansCont}
              onChangeText={(text) => setAnsCont(text)}
              onPress={SugAnsNew}
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

export default SgsPostClkToast;
