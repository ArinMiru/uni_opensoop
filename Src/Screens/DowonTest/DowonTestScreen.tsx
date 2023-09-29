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
import {
  BackIconRegiTopbarStyle,
  BackIocnTopbarStyle,
} from "../../Components/AllCompo/TopbarCompo";
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
import { ViewUnvottedButton } from "../../Components/VoteCompo/VoteButton";
import { UnVotedListButton } from "../../Components/VoteCompo/VoteButton";
import { VoteStatusPageButton } from "../../Components/VoteCompo/VoteButton";
import { VotedListButton } from "../../Components/VoteCompo/VoteButton";
/**
 * @Dowon(김도원 생성)
 * DowonTestScreen
 */

const DowonTestScreen = () => {
  return (
    <AccountBackground>
      <BackIocnTopbarStyle text="투표" />
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <ViewUnvottedButton />
      </View>
      <View
        style={{
          flex: 7,
          width: deviceWidth * 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        //FlatList로 변경
      >
        <UnVotedListButton />
        <View
          style={{
            flex: 1,
            width: deviceWidth * 1,
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <VoteStatusPageButton text="한라산" votestatusnum="12명" />
          <VotedListButton />
        </View>
      </View>
    </AccountBackground>
  );
};

export default DowonTestScreen;
