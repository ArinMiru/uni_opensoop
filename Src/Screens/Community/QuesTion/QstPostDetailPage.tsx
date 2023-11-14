import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import {
  FreQstComment,
  FrePost,
} from "../../../Components/ListCompo/FreCompo/FreCompo";
import { BackIconEditDelTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { ListAnsTextInput } from "../../../Components/AllCompo/ListAnsTextInputCompo";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { QstPostDetailProps } from "../../../Utils/NavigationProp/NavigationDetailScrProp";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { deviceHeight } from "../../../Utils/DeviceUtils";
import { QuesAnsBubSvcNew } from "../../../Services/AnsApi/QuestAnsApi";
import { QuesAnsBubSvcUp } from "../../../Services/AnsApi/QuestAnsApi";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import {
  EditModalCompo,
  DelModalCompo,
  CloseModalCompo,
} from "../../../Components/AllCompo/ModalCompo";
import EditDelCloseModalStyle from "../../../Styles/ModalStyles/EditDelCloseModalStyles";
import { ModalReuableFuction } from "../../../Utils/ReusableFuction/ModalReuableFuction";
import { quesBubSvcDel } from "../../../Services/_private/QusetApi";
import { CommonActions } from "@react-navigation/native";

const QstPostDetailPage: React.FC<QstPostDetailProps> = ({
  route,
  navigation,
}) => {
  const modalFunctions = ModalReuableFuction();
  const [cont, setCont] = useState<string>("");
  const userData = getUserData();
  const { CRE_SEQ, CONT, TIT, NICK_NM, LIKE_CNT, CRE_DAT, AnsFree } =
    route.params;

  console.log(CRE_SEQ);

  const dellPress = async () => {
    const result = await quesBubSvcDel(CRE_SEQ);
    if (result && result.RSLT_CD === "00") {
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
                    params: { selectedCategory: "질문", newPageload: true },
                  },
                ],
              },
            },
          ],
        })
      );
    } else {
      navigation.goBack();
      Alert.alert("실패", "게시글 삭제 실패");
    }
  };

  const QstAnsNewBut = async () => {
    try {
      const userData = getUserData();
      if (userData != null) {
        await QuesAnsBubSvcNew(cont, CRE_SEQ);
      } else {
        -885;
        console.error("userData가 null입니다.");
      }
    } catch (error) {
      console.error("등록 오류", error);
    }
  };

  const quesEdit = () => {
    navigation.navigate("QstEditPostPage", { CRE_SEQ: CRE_SEQ, TIT: TIT });
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
            <EditModalCompo EditonPress={quesEdit} />
            <DelModalCompo DelonPress={dellPress} />
            <CloseModalCompo CloseonPress={modalFunctions.handleCloseModal} />
          </View>
        </BottomSheetModal>
        <BackIconEditDelTopbarStyle
          Title="질문게시판"
          MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
          MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
          onPress={() => navigation.goBack()}
          onPressEditDel={ modalFunctions.handleButtonPress}
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
              onPress={QstAnsNewBut}
            />
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
      </BottomSheetModalProvider>
    </Background>
  );
};

export default QstPostDetailPage;
