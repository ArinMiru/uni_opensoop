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
import { Dropdown } from "../../Components/SingleUse/Dropdown";
import { OnlyAccountButton } from "../../Components/AccountCompo/AccountButton";
import { BlackBackIconButton } from "../../Components/IconCompo/BackIconButton";
import textStyle from "../../Styles/TextStyle";
/**
 * @Dowon(김도원 생성)
 * DowonTestScreen
 */

const DowonTestScreen = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<ParamListBase>;
}) => {
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  return (
    <AccountBackground>
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
        }}
      >
        <BlackBackIconButton
          text=""
          onPress={() => navigation.navigate("UniCertiDprtSrch")}
          navigation={navigation}
        ></BlackBackIconButton>
      </View>
      <View style={BackgroundStyle.titleTextFlex}>
        <Text
          style={[
            textStyle.bold25,
            {
              color: "#4BB781",
              marginLeft: deviceWidth * 0.1,
              lineHeight: deviceWidth * 0.09,
            },
          ]}
        >
          학년
        </Text>
        <Text
          style={[
            textStyle.medium20,
            {
              color: "#424C43",
              marginLeft: deviceWidth * 0.01,
              lineHeight: deviceHeight * 0.0459,
            },
          ]}
        >
          선택하기
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <Dropdown onSelected={setSelectedGrade} />
      </View>
      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <OnlyAccountButton
          text="다음"
          onPress={() => navigation.navigate("UniCertiStudNum")}
        />
      </View>
    </AccountBackground>
  );
};

export default DowonTestScreen;
