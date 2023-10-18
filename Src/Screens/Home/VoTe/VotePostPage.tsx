import React from "react";
import { View } from "react-native";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { ViewUnvottedButton } from "../../../Components/VoteCompo/VoteButton";
import { UnVotedListButton } from "../../../Components/VoteCompo/VoteButton";
import { VotedListButton } from "../../../Components/VoteCompo/VoteButton";
import { MenuTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { ScreenProps } from "../../../Navigations/StackNavigator";

/**
 * @ArinMiru(김도원 생성)
 * @ArinMiru(23.10.03 김도원 수정)
 * API -> 투표 조회
 * 투표 조회에 모든 정보들 포함되어있음
 * 투표 버튼 클릭 후 별도 API 호출 필요 ( 실시간 투표 현황 업데이트 위함 )
 * 서비스 URL -> VotBubListSvc
 */

/** const voteData = getvoteData */

const VotePostPage: React.FC<ScreenProps> = ({ navigation }) => {
  const userData = getUserData(); // 현재 사용자 데이터
  return (
    <Background>
      <MenuTopbarStyle
        Title="투표"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPressRegi={() => navigation.navigate("VotePostRegiPage")}
      />
      <View style={[NewBackgroundStyle.OnlyTopRadiusBackgroundStyle]}>
        <View style={{ flexDirection: "row" }}>
          <ViewUnvottedButton />
        </View>
        <View
          style={{
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
              poststatus={"투표 중"}
              posttime={voteData.VOT_EXPR_DATE}
             />)
            ["VF"].includes(VOT_GO_CD || "") && (
              <VotedListButton
               title={voteData.VOT_TITLE}
               poststatus={"투표 종료"}
               posttime={voteData.VOT_EXPR_DATE}
              />)
            }
         */}
          {/**-------------------------------------------------------------- */}
          <UnVotedListButton
            title={"VOT_TITLE"} // 투표 게시물 제목 VOT_TITLE
            poststatus={"투표 중"} // 투표 여부 상태 VOT_GO_CD에 따른 상태 값 고정
            posttime={"VOT_EXPR_DATE"} // 투표 게시물 마감시간 VOT_EXPR_DATE
            onPress={() => navigation.navigate("VotePostDetailPage")}
          />
          <VotedListButton
            title={"VOT_TITLE"} // 투표 게시물 제목 VOT_TITLE
            poststatus={"투표 종료"} // 투표 여부 상태 VOT_GO_CD에 따른 상태 값 고정
            posttime={"VOT_EXPR_DATE"} // 투표 게시물 마감시간 VOT_EXPR_DATE
            onPress={() => navigation.navigate("VotePostDetailPage")}
          />
        </View>
      </View>
    </Background>
  );
};

export default VotePostPage;
