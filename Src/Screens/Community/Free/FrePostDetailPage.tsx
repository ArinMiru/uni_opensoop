import React, { useState } from "react";
import { View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import {
  FreQstComment,
  FrePost,
} from "../../../Components/ListCompo/FreCompo/FreCompo";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { ListAnsTextInput } from "../../../Components/AllCompo/ListAnsTextInputCompo";
import { FreeBubDel } from "../../../Services/_private/FreeApi";
import { FreeAnsBubNew } from "../../../Services/AnsApi/FreeAnsApi";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { FreePostDetailProps } from "../../../Utils/NavigationProp/NavigationDetailScrProp";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const FreePostDetailPage: React.FC<FreePostDetailProps> = ({
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

  const FreeAnsNewBut = async () => {
    try {
      const userData = getUserData();
      if (userData != null) {
        await FreeAnsBubNew(cont, CRE_SEQ);
      } else {
        console.error("userData가 null입니다.");
      }
    } catch (error) {
      console.error("등록 오류", error);
    }
  };

  return (
    <Background>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={{
          flexGrow: 1, // this will fix scrollview scroll issue by passing parent view width and height to it
        }}
      >
        <BackIconTopbarStyle
          Title="자유게시판"
          MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
          MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
          onPress={() => navigation.goBack()}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <FrePost
            nickname={NICK_NM}
            fretit={TIT}
            frecont={CONT}
            freposttime={CRE_DAT}
            frelike={LIKE_CNT}
            delPress={dellPress}
          />

          <View style={{ alignItems: "center" }}>
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
        <ListAnsTextInput
          autoCapitalize="none"
          keyboardType="default"
          value={cont}
          onChangeText={(text) => setCont(text)}
          onPress={FreeAnsNewBut}
        />
      </KeyboardAwareScrollView>
    </Background>
  );
};

export default FreePostDetailPage;
