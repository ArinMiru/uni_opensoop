import React from "react";
import { View } from "react-native";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { ViewUnvottedButton } from "../../../Components/VoteCompo/VoteButton";
import { UnVotedListButton } from "../../../Components/VoteCompo/VoteButton";
import { VotedListButton } from "../../../Components/VoteCompo/VoteButton";
import { MenuTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native"; // DrawerActions 추가
import { ParamListBase } from "@react-navigation/native";

/**
 * @ArinMiru(김도원 생성)
 * @ArinMiru(23.10.03 김도원 수정)
 * API -> 투표 조회
 * 투표 조회에 모든 정보들 포함되어있음
 * 투표 버튼 클릭 후 별도 API 호출 필요 ( 실시간 투표 현황 업데이트 위함 )
 * 서비스 URL -> VotBubListSvc
 */

/** const voteData = getvoteData */

const VotePostPage = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<ParamListBase>;
}) => {
  return (
    <AccountBackground>
      <MenuTopbarStyle
        text="투표"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        onPressRegi={() => navigation.navigate("MVotePostRegiPage")}
      />
      <ViewUnvottedButton />
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {/**-------------------------------------------------------------- */}
        {/** FlatList로 리스트 나열 */}
        {/** 각 항목에 맞게 코드 변경 */}
        {/** poststatus 기준 */}
        {/** UnVotedListButton / VotedListButton  선택 */}
        {/** VB(투표 전), VC(투표 취소) , VF(투표 종료), VG(투표 중) */}
        {/** 
         * {["VG"].includes(VOT_GO_CD || "") && (
             <UnVotedListButton 
              title={voteData.VOT_TITLE} 
              poststatus={"투표중"}
              posttime={voteData.VOT_EXPR_DATE}
             />)
            ["VF"].includes(VOT_GO_CD || "") && (
              <VotedListButton
               title={voteData.VOT_TITLE}
               poststatus={"투표종료"}
               posttime={voteData.VOT_EXPR_DATE}
              />)
            }
         */}
        {/**-------------------------------------------------------------- */}
        <UnVotedListButton
          title={"개강총회 뒷풀이"} // 투표 게시물 제목 VOT_TITLE
          poststatus={"미투표"} // 투표 여부 상태 VOT_GO_CD
          posttime={"마감시간"} // 투표 게시물 마감시간 VOT_EXPR_DATE
        />
        {/**-------------------------------------------------------------- */}
        <VotedListButton
          title={"MT장소"} // 투표 게시물 제목 VOT_TITLE
          poststatus={"투표완료"} // 투표 여부 상태 VOT_GO_CD
          posttime={"마감시간"} // 투표 게시물 마감시간 VOT_EXPR_DATE
        />
      </View>
      {/**-------------------------------------------------------------- */}
      <View
        style={{
          flex: 7,
          width: deviceWidth * 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        //FlatList로 변경
        // 구분선 X
      ></View>
    </AccountBackground>
  );
};

export default VotePostPage;