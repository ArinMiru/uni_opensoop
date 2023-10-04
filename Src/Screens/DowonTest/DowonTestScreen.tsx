import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import {
  FreBefoClikButton,
  FreButton,
  SgsBefoClikButton,
  QstBefoClikButton,
  SgsButton,
  QstButton,
} from "../../Components/ListCompo/ListCommonCompo/ListCategorieButton";
import {
  OpenFreSgsTitInputBox,
  OpenFreSgsContInputBox,
} from "../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import { ListCategorieCompo } from "../../Components/ListCompo/ListCommonCompo/ListCategorieCompo";
import { OpenProfileIcon } from "../../Components/IconCompo/ProfileIcon";
import { OpenEdtDltButton } from "../../Components/IconCompo/OpenEdtDltIconButton";
import { SgsListContentButton } from "../../Components/ListCompo/SgsCompo/SgsButtonCompo";
import { SgsDelButton } from "../../Components/ListCompo/SgsCompo/SgsCompo";
import { NoticePostBoxView } from "../../Components/ListCompo/OpenCompo/NoticePostCompo";
import MNoticePostRegi from "../Home/NoTice/NoticePostRegiPage";
import { BackIconRegiTopbarStyle } from "../../Components/AllCompo/TopbarCompo";
import { AccountBackground } from "../../Components/AllCompo/Background";
import {
  OpenPhotoButton,
  OpenPhotoPlusBox,
  OpenPhotoDelBox,
  OpenPhotoComboBox,
} from "../../Components/ListCompo/OpenCompo/OpenButton";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";
import { RegiButton } from "../../Components/ListCompo/RegiButton";
import { FreeListButton } from "../../Components/ListCompo/FreCompo/FreButton";
import { FreeListIclucontnButton } from "../../Components/ListCompo/FreCompo/FreButtonCompo";
import { ScreenProps } from "../../Navigations/StackNavigator";
import { QstListButton } from "../../Components/ListCompo/QstCompo/QstButtonCompo";
import {
  ViewUnvottedButton,
  VoteRegiButton,
  VoteSlctButton,
  VoteStatusButton,
} from "../../Components/VoteCompo/VoteButton";
import { UnVotedListButton } from "../../Components/VoteCompo/VoteButton";
import { VoteStatusPageButton } from "../../Components/VoteCompo/VoteButton";
import { VotedListButton } from "../../Components/VoteCompo/VoteButton";
import { DrawerActions } from "@react-navigation/native"; // DrawerActions 추가
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";
import TextStyle from "../../Styles/TextStyle";
import { VoteUnSlctButton } from "../../Components/VoteCompo/VoteButton";
import { SchdlVoteRegiTitInput } from "../../Components/SchdlCompo/SchdlInput";
import { VoteInput } from "../../Components/VoteCompo/VoteTextInput";
import { TextInput, TextInputProps } from "react-native";
import { AddVoteOptionButton } from "../../Components/VoteCompo/VoteButton";
import { BackIconTopbarStyle } from "../../Components/AllCompo/TopbarCompo";
import { ViewDupleVoteButton } from "../../Components/VoteCompo/VoteButton";
import { ViewAnnymButton } from "../../Components/VoteCompo/VoteButton";
import VoteBoxStyle from "../../Styles/VoteStyles/VoteBoxStyle";
import { QstContInputBox } from "../../Components/ListCompo/QstCompo/QstInputCompo";
import { Platform } from "react-native";
/**
 * @Dowon(김도원 생성)
 * DowonTestScreen
 */

const DowonTestScreen = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<ParamListBase>;
}) => {
  return (
    <AccountBackground>
      <BackIconTopbarStyle text="게시판" />
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <ListCategorieCompo
          firsttext="자유"
          secondtext="건의"
          thirdtext="질문"
        />
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <QstContInputBox text="텍스트를 입력해주세요." />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: deviceWidth * 0.82,
        }}
      >
        <Text
          style={[
            TextStyle.medium09,
            { color: "#828282" },
            { textAlign: "left" },
          ]}
        >
          지식을 함께 나누며 해결해 나가는 즐거움을 느껴보세요. 이곳은 궁금증을
          해결하기 위한 질문 게시판입니다. 다른 학생들에게 도움이 되는 질문들을
          함께 공유해주시면 정말 감사하겠습니다.
        </Text>
      </View>
      <View style={{ flex: 4 }}>
        <RegiButton text="등록하기"></RegiButton>
      </View>
    </AccountBackground>
  );
};

export default DowonTestScreen;
