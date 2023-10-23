import { View, Platform, KeyboardAvoidingView } from "react-native";
import React from "react";
import {
  SqsPost,
  SqsComment,
} from "../../../Components/ListCompo/SgsCompo/SgsCompo";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { CommentInput } from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import { ScrollView } from "react-native-gesture-handler";
import { SugBubListDel } from "../../../Services/_private/SugBubListApi";
import { SgsPostDetailProps } from "../../../Utils/NavigationProp/NavigationDetailScrProp";

const SgsPostClkToast: React.FC<SgsPostDetailProps> = ({
  navigation,
  route,
}) => {
  const { CRE_SEQ, CONT, TIT, NICK_NM, CRE_DAT, AnsFree } = route.params;
  const sgsDel = () => {
    SugBubListDel(CRE_SEQ);
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
          <SqsPost
            nickname={NICK_NM}
            sgstit={TIT}
            sgscont={CONT}
            sgsposttime={CRE_DAT}
            onPress={sgsDel}
          />
          <View
            style={[
              SgsButtonStyles.divideContentsLine,
              { marginTop: deviceHeight * 0.018 },
            ]}
          ></View>
          {AnsFree.sort((a, b) => b.ANS_SEQ - a.ANS_SEQ) // 내림차순 정렬
            .map((comment) => (
              <SqsComment
                key={comment.ANS_SEQ}
                sgsansnick={comment.ANS_MEMB_ID}
                sgsanstit={comment.CONT}
                sgsanstime={comment.CRE_DAT}
              />
            ))}

          <CommentInput text="댓글을 입력하세요." />
        </ScrollView>
      </KeyboardAvoidingView>
    </AccountBackground>
  );
};

export default SgsPostClkToast;
