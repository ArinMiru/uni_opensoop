import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { ListCategorieCompo } from "../../../Components/ListCompo/ListCommonCompo/ListCategorieCompo";
import { BackIconRegiTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { SgsListContentButton } from "../../../Components/ListCompo/SgsCompo/SgsButtonCompo";
/**
 * @Dowon(김도원 생성)
 * SgsPostPage
 * 건의게시판 페이지
 * 게시판 카테고리 선택 후 게시글 목록을 보여주는 페이지
 * 또는 DrawerMenu에서도 넘어올 수 있음
 * 게시글 목록은 FlatList로 구현
 * 게시글 목록에서 게시글을 선택하면 게시글 상세 페이지로 이동
 * 게시글 상세 페이지에서는 게시글의 내용을 보여주고 댓글을 작성할 수 있음
 */

/**
 * 건의게시판 API 생성
 * @jeakyoung(안재경) API 생성 예정
 */

interface ButtonProps {
  color: string;
  onPress: () => void;
}

const SgsPostPage: React.FC<ScreenProps> = ({ navigation }) => {
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
          // 적절한 버튼 클릭 시 함수 생성하여 color props 사용하여 색깔 변경 및 페이지 이동 구현 예정
        />
      </View>
      <View
        style={{
          flex: 7,
          width: deviceWidth * 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        // View 제거 후 FlatList로 변경
      >
        <SgsListContentButton
          title="비공개 게시물입니다."
          poststatus="답변 대기중"
          // 적절한 버튼 클릭 시 함수 생성하여 color props 사용하여 색깔 변경 및 페이지 이동 구현 예정
        />
      </View>
    </AccountBackground>
  );
};

export default SgsPostPage;
