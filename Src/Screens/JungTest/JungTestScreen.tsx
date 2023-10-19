import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import {
  VoteSlctButton,
  VoteUnSlctButton,
  VoteStatusPageButton,
  VoteStatusButton,
  VoteRegiButton,
  AddVoteOptionButton,
  ViewUnvottedButton,
  ViewDupleVoteButton,
  ViewAnnymButton,
  UnVotedListButton,
  VotedListButton,
} from "../../Components/VoteCompo/VoteButton";
import { VoteInput } from "../../Components/VoteCompo/VoteTextInput";

const ListTest = () => {
  return (
    <SafeAreaView style={BackgroundStyle.AccountBackground}>
      <VoteSlctButton text="투표 클릭 후" />
      <VoteUnSlctButton text="투표 클릭 전" />
      <VoteStatusPageButton text="투표 인원" votestatusnum="3" />
      <VoteStatusButton />
      <VoteRegiButton />
      <AddVoteOptionButton />
      <ViewUnvottedButton />
      <ViewDupleVoteButton />
      <ViewAnnymButton />
      <UnVotedListButton
        title="김도원 살인투표"
        posttime="내일까지"
        poststatus="투표중"
      />
      <VotedListButton
        title="김도원 살인투표"
        posttime="내일까지"
        poststatus="투표종료"
      />
      <VoteInput text="내용을 입력하세요" />
    </SafeAreaView>
  );
};

export default ListTest;
