import React from "react";
import { View, Text } from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { VoteInput } from "../../../Components/VoteCompo/VoteTextInput";
import { SchdlVoteRegiTitInput } from "../../../Components/SchdlCompo/SchdlInput";
import {
  ViewDupleVoteButton,
  ViewAnnymButton,
  AddVoteOptionButton,
} from "../../../Components/VoteCompo/VoteButton";
import VoteBoxStyle from "../../../Styles/VoteStyles/VoteBoxStyle";
import TextStyle from "../../../Styles/TextStyle";
/**
 * @Dowon(김도원 생성)
 * 투표 게시물 등록 페이지
 * [02, 03, 05] TIT_CD 에 맞는 사용자만 접근 가능 페이지
 */

const VotePostRegiPage = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<ParamListBase>;
}) => {
  return (
    <AccountBackground>
      <BackIconTopbarStyle text="투표" />
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SchdlVoteRegiTitInput text="제목을 입력하세요." />
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: "column",
          width: deviceWidth * 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            width: deviceWidth * 1,
          }}
        >
          <VoteInput text="텍스트" />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: deviceWidth * 1,
          }}
        >
          <VoteInput text="텍스트" />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            width: deviceWidth * 1,
          }}
        >
          <AddVoteOptionButton />
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            flex: 0.5,
            justifyContent: "center",
          }}
        >
          <View
            style={[
              VoteBoxStyle.voteExprBox,
              { left: deviceWidth * 0.1 },
              { justifyContent: "center" },
            ]}
          >
            <Text
              style={[
                TextStyle.medium10,
                { color: "#67B28A", lineHeight: deviceHeight * 0.025 },
                { textAlign: "center" },
              ]}
            >
              마감기한 설정
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>마감기한 설정 픽커 삽입</Text>
          {/** 마감기한 설정 픽커 삽입 필요 @ts7752 */}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <ViewDupleVoteButton />
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <ViewAnnymButton />
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
    </AccountBackground>
  );
};

export default VotePostRegiPage;
