import React, { useState } from "react";
import { View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import {
  FreQstComment,
  FrePost,
} from "../../../Components/ListCompo/FreCompo/FreCompo";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { CommentInput } from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import { FreeBubDel } from "../../../Services/_private/FreeApi";
import { FreeAnsBubNew } from "../../../Services/AnsApi/FreeAnsApi";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { FreePostDetailProps } from "../../../Utils/NavigationProp/NavigationDetailScrProp";

const FreePostDetailPage: React.FC<FreePostDetailProps> = ({
  route,
  navigation,
}) => {
  const [cont, setCont] = useState<string>("");
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
    <AccountBackground>
      <BackIconTopbarStyle text="게시판" onPress={() => navigation.goBack()} />
      {/* 수정 에러 뜸 */}
      <KeyboardAvoidingView
        style={{ flex: 1, marginBottom: deviceWidth * 0.02 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "android" ? -600 : 0}
      >
        <ScrollView>
          <FrePost
            nickname={NICK_NM}
            fretit={TIT}
            frecont={CONT}
            freposttime={CRE_DAT}
            frelike={LIKE_CNT} // 좋아요 수 number로 받아오기
            delPress={dellPress}
          />
          <View
            style={[
              SgsButtonStyles.divideContentsLine,
              { marginTop: deviceHeight * 0.018 },
            ]}
          ></View>
          {AnsFree.sort((a, b) => b.ANS_SEQ - a.ANS_SEQ) // ANS_SEQ를 내림차순으로 정렬
            .map((comment) => (
              <FreQstComment
                key={comment.ANS_SEQ}
                freqstansnick={comment.ANS_MEMB_ID}
                freqstanstit={comment.CONT}
                freqstanstime={comment.CRE_DAT}
              />
            ))}
          <CommentInput
            text="댓글을 입력하세요."
            value={cont}
            onChangeText={(text) => setCont(text)}
            onPress={FreeAnsNewBut}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </AccountBackground>
  );
};

export default FreePostDetailPage;
