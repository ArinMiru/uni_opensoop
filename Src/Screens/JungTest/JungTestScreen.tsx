import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import {
  SchdlTimeButton,
  SchdlRegiDateButtonStyle,
  SchdlSchdldayButton,
  SchdlTodayButton,
  SchdlBefoCliklEditButton,
  SchdlAftrCliklEditButton,
  SchdlBefoClikDelButton,
  SchdlAftrClikDelButton,
  SchdlRegiDateButton,
} from "../../Components/SchdlCompo/SchdlButton";
import {
  SchdlEditDelButton,
  SchdlRegiTimeButton,
} from "../../Components/SchdlCompo/SchdlCommonCompo";
import { SchdlVoteRegiTilteInput } from "../../Components/SchdlCompo/SchdlInput";
import {
  ScdlEditIcon,
  SchldDelButton,
} from "../../Components/IconCompo/ScdlEditDelIcon";

const ListTest = () => {
  return (
    <SafeAreaView style={BackgroundStyle.AccountBackground}>
      <SchdlTimeButton hour="00" minutes="00" />
      <SchdlRegiDateButtonStyle />
      <SchdlSchdldayButton today="15" />
      <SchdlTodayButton event="20" />
      <SchdlBefoCliklEditButton />
      <SchdlAftrCliklEditButton />
      <SchdlBefoClikDelButton />
      <SchdlAftrClikDelButton />
      <SchdlRegiDateButton date="8월 15일 (금)" />
      <SchdlEditDelButton />
      <SchdlRegiTimeButton />
      <SchdlVoteRegiTilteInput text="제목을 입력하세요." />
      <ScdlEditIcon />
      <SchldDelButton />
    </SafeAreaView>
  );
};

export default ListTest;
