import React from "react";
import { MainOpenBub } from "../../Components/MainPageCompo/MainPageCompo";
import { Background } from "../../Components/AllCompo/Background";
import { MainPageTopbarStyle } from "../../Components/AllCompo/TopbarCompo";

const HomePageScreen = ({}) => {
  return (
    <Background>
      <MainPageTopbarStyle MEMB_SC_NM="평택대학교" MEMB_DEP_NM="정보통신학과" />
      <MainOpenBub
        Title="공지사항 제목"
        MEMB_NM="안재경"
        MEMB_DEP_NM="정보통신학과"
        TIT_NM="학회장"
      />
    </Background>
  );
};

export default HomePageScreen;
