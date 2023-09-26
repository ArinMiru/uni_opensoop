import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
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

/**
 * @Dowon(김도원 생성)
 * DowonTestScreen
 */

const DowonTestScreen = () => {
  return (
    <SafeAreaView style={BackgroundStyle.AccountBackground}>
      <NoticePostBoxView title={""}></NoticePostBoxView>
    </SafeAreaView>
  );
};

export default DowonTestScreen;
