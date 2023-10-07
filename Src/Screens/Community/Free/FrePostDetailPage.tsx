import { View, Text } from "react-native";
import React from "react";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { SqsComment } from "../../../Components/ListCompo/SgsCompo/SgsCompo";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import SgsButtonStyles from "../../../Styles/ListStyles/SgsStyles/SgsButtonStyles";
import { CommentInput } from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import { FrePost } from "../../../Components/ListCompo/FreCompo/FreCompo";

// 건의 게시판과 공통되는 화면이기 때문에 건의 게시판의 .style을 그대로 가져왔습니다.

const FreePostClkToast: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <AccountBackground>
      <BackIconTopbarStyle text="게시판" onPress={() => navigation.goBack()} />
      <View
        style={[
          SgsButtonStyles.divideContentsLine,
          {
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            width: deviceWidth * 1,
          },
        ]}
      >
        <FrePost
          nickname="자유닉"
          sgstit="도원씨 조졌네요 닉네임이 길어지면"
          sgscont="뷰 영역을 작게 했더니 텍스트가 잘리네여.. 랄랄라"
          sgsposttime="0초전"
        />
      </View>
      <View style={{ flex: 5 }}>
        <SqsComment
          commtnick="익명이"
          comtt="한우를 먹고 싶나 오마에"
          commtime="10년전"
        />
      </View>
      <View style={{ flex: 1 }}>
        <CommentInput text="댓글을 입력하세요." />
      </View>
    </AccountBackground>
  );
};

export default FreePostClkToast;
