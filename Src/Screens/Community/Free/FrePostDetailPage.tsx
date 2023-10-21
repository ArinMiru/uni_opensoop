import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { FreQstComment } from "../../../Components/ListCompo/FreCompo/FreCompo";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { FrePost } from "../../../Components/ListCompo/FreCompo/FreCompo";
import { ScrollView } from "react-native-gesture-handler";
import { CommentInput } from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { FreeData } from "../../../Utils/_private/ApiData/FreeData";

// 건의 게시판과 공통되는 화면이기 때문에 건의 게시판의 .style을 그대로 가져왔습니다.

const FreePostDetailPage: React.FC<ScreenProps> = ({ navigation }) => {
  const [freeData, setFreeData] = useState<FreeData | null>(null); // 자유게시판 데이터
  return (
    <AccountBackground>
      <BackIconTopbarStyle text="게시판" onPress={() => navigation.goBack()} />
      <KeyboardAvoidingView
        style={{ flex: 1, marginBottom: deviceWidth * 0.02 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "android" ? -600 : 0}
      >
        <ScrollView>
          <FrePost
            nickname={"익명이"}
            fretit="해결함 닉네임 길이 제한 걸면됨"
            frecont="해결했다 텍스트 늘려봐ㅏㅏㅏㅏㅏㅏ!!해결했다 텍스트 늘려봐ㅏㅏㅏㅏㅏㅏ!!"
            freposttime="0초전"
            frelike={100} // 좋아요 수 number로 받아오기
          />
          <View
            style={[
              SgsButtonStyles.divideContentsLine,
              { marginTop: deviceHeight * 0.018 },
            ]}
          ></View>
          <FreQstComment
            freqstansnick="익명이"
            freqstanstit="한우를 먹고 싶나 오마0에한우를 먹고 싶나 오마0에한우를 먹고 싶나 오마0에"
            freqstanstime="10년전"
          />
          <CommentInput text="댓글을 입력하세요." />
        </ScrollView>
      </KeyboardAvoidingView>
    </AccountBackground>
  );
};

export default FreePostDetailPage;