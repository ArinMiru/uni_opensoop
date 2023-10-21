import React, { useState } from "react";
import { View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Navigations/StackNavigator";
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

type FreePostDetailRouteProp = RouteProp<
  RootStackParamList,
  "FrePostDetailPage"
>;
type FreePostDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  "FrePostDetailPage"
>;

type FreePostDetailProps = {
  route: FreePostDetailRouteProp;
  navigation: FreePostDetailNavigationProp;
};

const FreePostDetailPage: React.FC<FreePostDetailProps> = ({
  route,
  navigation,
}) => {
  const { CRE_SEQ, CONT, TIT, NICK_NM, LIKE_CNT, CRE_DAT, AnsFree } =
    route.params;
  console.log(CRE_SEQ);

  const dellPress = () => {
    FreeBubDel(CRE_SEQ);
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
                key={comment.ANS_SEQ} // 각 댓글의 ANS_SEQ를 고유한 키로 사용
                freqstansnick={comment.ANS_MEMB_ID}
                freqstanstit={comment.CONT}
                freqstanstime={comment.CRE_DAT}
              />
            ))}
          <CommentInput text="댓글을 입력하세요." />
        </ScrollView>
      </KeyboardAvoidingView>
    </AccountBackground>
  );
};

export default FreePostDetailPage;
