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
      <BackIconTopbarStyle
        text="투표"
        // onPress={}
      />

      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={[
            TextStyle.bold25,
            { marginLeft: deviceWidth * 0.06 },
            { color: "#1E232C" },
          ]}
        >
          {"VOT_TITLE"}
        </Text>
        <Text
          style={[
            TextStyle.medium09,
            { marginRight: deviceWidth * 0.06 },
            { color: "#9E9E9E" },
          ]}
        >
          {"VOT_EXPR_DATE "} {"마감"}
        </Text>
      </View>
      <View
        style={{
          flex: 2,
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
          <VoteStatusPageButton text="VOT_INFO" votestatusnum="5" />
          {/** votestatusnum="VOT_SUB_TOT" */}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: deviceWidth * 1,
          }}
        >
          <VoteStatusPageButton text="VOT_INFO" votestatusnum="5" />
          {/** votestatusnum="VOT_SUB_TOT" */}
        </View>
      </View>
      <View
        style={{
          flex: 5,
          width: deviceWidth * 1,
          justifyContent: "flex-start",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <VoteStatusPageButton text="VOT_INFO" votestatusnum="5" />
        {/** votestatusnum="VOT_SUB_TOT" */}
      </View>
    </AccountBackground>
  );
};

export default DowonTestScreen;
