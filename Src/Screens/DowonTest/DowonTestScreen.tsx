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
import MNoticePostRegi from "../Home/NoTice/MNoticePostRegiPage";
import { BackIconRegiTopbarStyle } from "../../Components/AllCompo/TopbarCompo";
import { AccountBackground } from "../../Components/AllCompo/Background";
import {
  OpenPhotoButton,
  OpenPhotoPlusBox,
  OpenPhotoDelBox,
  OpenPhotoComboBox,
} from "../../Components/ListCompo/OpenCompo/OpenButton";
import { deviceWidth } from "../../Utils/DeviceUtils";
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
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <VoteRegiButton />
      </View>
      <View
        style={{
          flex: 3,
          width: deviceWidth * 1,
          justifyContent: "flex-start",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <VoteStatusButton />
      </View>
    </AccountBackground>
  );
};

export default DowonTestScreen;
