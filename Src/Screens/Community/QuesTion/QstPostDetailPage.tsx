import React, { useState } from "react";
import { View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import {
  FreQstComment,
  FrePost,
} from "../../../Components/ListCompo/FreCompo/FreCompo";
import { BackIconEditDelTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { ListAnsTextInput } from "../../../Components/AllCompo/ListAnsTextInputCompo";
import { FreeBubDel } from "../../../Services/_private/FreeApi";
import { FreeAnsBubNew } from "../../../Services/AnsApi/FreeAnsApi";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { QstPostDetailProps } from "../../../Utils/NavigationProp/NavigationDetailScrProp";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { deviceHeight } from "../../../Utils/DeviceUtils";
import { QuesAnsBubSvcNew } from "../../../Services/AnsApi/QuestAnsApi";
import { QuesAnsBubSvcUp } from "../../../Services/AnsApi/QuestAnsApi";

const QstPostDetailPage: React.FC<QstPostDetailProps> = ({
  route,
  navigation,
}) => {
  const [cont, setCont] = useState<string>("");
  const userData = getUserData();
  const { CRE_SEQ, CONT, TIT, NICK_NM, LIKE_CNT, CRE_DAT, AnsFree } =
    route.params;

  console.log(CRE_SEQ);

  const dellPress = () => {
    FreeBubDel(CRE_SEQ);
  };

  const QstAnsNewBut = async () => {
    try {
      const userData = getUserData();
      if (userData != null) {
        await QuesAnsBubSvcNew(TIT, cont, CRE_SEQ);
      } else {
        -885;
        console.error("userData가 null입니다.");
      }
    } catch (error) {
      console.error("등록 오류", error);
    }
  };

  return (
    <Background>
      <BackIconEditDelTopbarStyle
        Title="질문게시판"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPress={() => navigation.goBack()}
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
            style={{ alignItems: "center", paddingBottom: deviceHeight * 0.09 }}
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
    </Background>
  );
};

export default QstPostDetailPage;
