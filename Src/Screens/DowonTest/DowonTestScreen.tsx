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

/**
 * @Dowon(김도원 생성)
 * DowonTestScreen
 */

const DowonTestScreen = () => {
  return (
    <AccountBackground>
      <BackIconRegiTopbarStyle text="게시판" />
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
      <View
        style={{
          flex: 7,
          width: deviceWidth * 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        //FlatList로 변경
      >
        <QstListButton
          nickname="test"
          postanswer="답변하기"
          postcontent="멤버 로그인 후 라이엇계정"
        />
      </View>
    </AccountBackground>
  );
};

export default DowonTestScreen;
