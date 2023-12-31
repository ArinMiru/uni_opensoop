import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { VoteItem } from "../Utils/_private/ApiData/VoteData";
import { StackNavigationProp } from "@react-navigation/stack";
import LoadingScreen from "../Screens/Loading/LoadingPage";
import HomePageScreen from "../Screens/Home/HomePage";
import AccountLogin from "../Screens/Account/SignIn/AccountLogin";
import AccountLoginRegi from "../Screens/Account/SignIn/AccountLoginRegi";
import RegiId from "../Screens/Account/SignUp/RegiId";
import RegiNmNic from "../Screens/Account/SignUp/RegiNmNic";
import RegiPass from "../Screens/Account/SignUp/RegiPass";
import RegiChk from "../Screens/Account/SignUp/RegiChk";
import UniCertiDprtSrch from "../Screens/Account/UniCrtf/UniCertiDprtSrch";
import UniCertiEcode from "../Screens/Account/UniCrtf/UniCertiEcode";
import UniCertiEmail from "../Screens/Account/UniCrtf/UniCertiEmail";
import UniCertiStudNum from "../Screens/Account/UniCrtf/UniCertiStudNum";
import UniCertiChk from "../Screens/Account/UniCrtf/UniCertiChk";
import UniCertiSchSrch from "../Screens/Account/UniCrtf/UniCertiSchSrch";
import UniCertiGrad from "../Screens/Account/UniCrtf/UniCertGard";
import PassFindEcode from "../Screens/Account/PassFind/PassFindEcode";
import PassFindForEmail from "../Screens/Account/PassFind/PassFindForEmail";
import PassFindForId from "../Screens/Account/PassFind/PassFindForId";
import PassFindNewPass from "../Screens/Account/PassFind/PassFindNewPass";
import PassFindChk from "../Screens/Account/PassFind/PassFindChk";
import IdFindEmail from "../Screens/Account/IdFind/IdFindEmail";
import IdFindOut from "../Screens/Account/IdFind/IdFindOut";
import NoticePage from "../Screens/Home/NoTice/NoticePage";
import NoticePostRegi from "../Screens/Home/NoTice/NoticePostRegiPage";
import ListPostPage from "../Screens/Community/ListPostPage";
import NoticePostRegiPage from "../Screens/Home/NoTice/NoticePostRegiPage";
import QstPostRegiPage from "../Screens/Community/QuesTion/QstPostRegi";
import SgsPostRegiPage from "../Screens/Community/SuggeStion/SgsPostRegiPage";
import SgsPostDetailPage from "../Screens/Community/SuggeStion/SgsPostDetailPage";
import FrePostRegiPage from "../Screens/Community/Free/FrePostRegiPage";
import VotePostPage from "../Screens/Home/VoTe/VotePostPage";
import VotePostRegiPage from "../Screens/Home/VoTe/VotePostRegiPage";
import VotePostDetailPage from "../Screens/Home/VoTe/VotePostDetailPage";
import VotePostStatusPage from "../Screens/Home/VoTe/VotePostStatusPage";
import SchedulePage from "../Screens/Home/ScheDule/SchedulePage";
import SchedulePostRegiPage from "../Screens/Home/ScheDule/ScheduleRegiPage";
import SchdEditPostPage from "../Screens/Home/ScheDule/SchdEditPostPage";
import BottomTabNavigations from "./BottomTabNavigations";
import ProfilePage from "../Screens/Home/ProfilePage";
import TitleCodeCerti from "../Screens/Home/TitleCodeCerti";
import NoticeEditPage from "../Screens/Home/NoTice/NoticeEditPage";
import FrePostDetailLawPage from "../Screens/Community/Free/FrePostDetailLawPage";
import FreePostDetailPage from "../Screens/Community/Free/FrePostDetailPage";
import FreEditPostPage from "../Screens/Community/Free/FreEditPostPage";
import QstEditPostPage from "../Screens/Community/QuesTion/QstEditPostPage";
import SgsEditPostPage from "../Screens/Community/SuggeStion/SgsEditPostPage";
import QstPostDetailPage from "../Screens/Community/QuesTion/QstPostDetailPage";

/**----------------------------------------------------------------------------*/
/**----------------------------------------------------------------------------*/

export type RootStackParamList = {
  //파라미터 전달 값 없음
  LoadingScreen: undefined;
  AccountLoginRegi: undefined;
  AccountLogin: undefined;
  HomePageScreen: undefined;
  RegiId: undefined;
  RegiNmNic: { MEMB_ID: string };
  RegiPass: { MEMB_ID: string; MEMB_NM: string; NICK_NM: string };
  RegiChk: { MEMB_ID: string };
  UniCertiDprtSrch: { MEMB_ID: string; SCH_CD: string };
  UniCertiEcode: {
    CERT_SEQ: string;
    MEMB_ID: string;
  };
  UniCertiEmail: {
    MEMB_ID: string;
    MEMB_SC_CD: string;
    MEMB_DEP_CD: string;
    MEMB_NUM: string;
    MEMB_GRA: string;
  };
  UniCertiStudNum: {
    MEMB_ID: string;
    MEMB_SC_CD: string;
    MEMB_DEP_CD: string;
    MEMB_GRA: string;
  };
  UniCertiGrad: {
    MEMB_ID: string;
    MEMB_SC_CD: string;
    MEMB_DEP_CD: string;
  };
  UniCertiChk: undefined;
  UniCertiSchSrch: { MEMB_ID: string };
  PassFindEcode: {
    MEMB_ID: string;
    CERT_SEQ: string;
  };
  PassFindForEmail: undefined;
  PassFindForId: undefined;
  PassFindNewPass: undefined;
  PassFindChk: undefined;
  IdFindEmail: undefined;
  IdFindOut: { memberId: string };
  NoticePage: { newPageload: boolean };
  DrawerNavigator: undefined;
  NoticePostRegi: undefined;
  ListPostPage: {
    selectedCategory: string;
    newPageload?: boolean;
  };
  NoticePostRegiPage: undefined;
  QstPostRegiPage: undefined;
  SgsPostRegiPage: undefined;
  SgsPostDetailPage: {
    CRE_SEQ: number;
    CONT: string;
    TIT: string;
    NICK_NM: string;
    CRE_DAT: string;
    AnsFree: {
      ANS_MEMB_ID: string;
      ANS_SEQ: number;
      CONT: string;
      CRE_DAT: string;
      SEC_YN: string;
    }[];
  };
  FrePostRegiPage: undefined;
  FrePostDetailLawPage: undefined;
  FrePostDetailPage: {
    CRE_SEQ: number;
    CONT: string;
    TIT: string;
    NICK_NM: string;
    LIKE_CNT: number;
    CRE_DAT: string;
    AnsFree: {
      ANS_MEMB_ID: string;
      ANS_SEQ: number;
      CONT: string;
      CRE_DAT: string;
    }[];
  };
  VotePostPage: undefined;
  VotePostRegiPage: undefined;
  VotePostDetailPage: {
    VOT_TITLE: string;
    VOT_EXPR_DATE: string;
    VOT_DESC: string;
    VOT_INFO: string;
    VOT_TYPE_CD: string;
    VOT_SEL_SEQ: string;
    CRE_SEQ: number;
  };
  VotePostStatusPage: {
    VOT_TITLE: string;
    VOT_DESC: string;
    VOT_INFO: string;
    VOT_EXPR_DATE: string;
    CRE_SEQ: number;
    VOT_TYPE_CD: string;
    VOT_SEL_SEQ: string;
  };
  SchedulPage: undefined;
  SchedulePostRegiPage: undefined;
  SchdEditPostPage: {
    TIT: string;
    STRT_SCHD_YMD: string;
    END_SCHD_YMD: string;
    CRE_SEQ: number;
  };
  BottomTabNavigations: undefined;
  ProfilePage: undefined;
  TitleCodeCerti: undefined;
  NoticeEditPage: {
    CRE_SEQ: number;
    CONT: string;
    TIT: string;
    ImageInfo: {
      FILE_BASE64: string;
      FILE_NM: string;
      IMG_SEQ: number;
    }[];
  };

  /**----------------------------------------------------------------------------*/
  FreEditPostPage: {
    CRE_SEQ: number;
    CONT: string;
    TIT: string;
  };
  QstEditPostPage: {
    CRE_SEQ: number;
    TIT: string;
  };
  SgsEditPostPage: {
    CRE_SEQ: number;
    CONT: string;
    TIT: string;
  };

  QstPostDetailPage: {
    CRE_SEQ: number;
    CONT: string;
    TIT: string;
    NICK_NM: string;
    LIKE_CNT: number;
    CRE_DAT: string;
    AnsFree: {
      ANS_MEMB_ID: string;
      ANS_SEQ: number;
      CONT: string;
      CRE_DAT: string;
    }[];
  };

  /**----------------------------------------------------------------------------*/
};

export type ScreenProps = {
  route: any;
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountLoginRegi"
        component={AccountLoginRegi}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HomePageScreen"
        component={HomePageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountLogin"
        component={AccountLogin}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="TitleCodeCerti"
        component={TitleCodeCerti}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RegiId"
        component={RegiId}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegiNmNic"
        component={RegiNmNic}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegiPass"
        component={RegiPass}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegiChk"
        component={RegiChk}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="UniCertiEcode"
        component={UniCertiEcode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniCertiSchSrch"
        component={UniCertiSchSrch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniCertiDprtSrch"
        component={UniCertiDprtSrch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniCertiEmail"
        component={UniCertiEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniCertiStudNum"
        component={UniCertiStudNum}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniCertiGrad"
        component={UniCertiGrad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UniCertiChk"
        component={UniCertiChk}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassFindEcode"
        component={PassFindEcode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassFindForEmail"
        component={PassFindForEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassFindForId"
        component={PassFindForId}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassFindNewPass"
        component={PassFindNewPass}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PassFindChk"
        component={PassFindChk}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IdFindEmail"
        component={IdFindEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IdFindOut"
        component={IdFindOut}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NoticePage"
        component={NoticePage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NoticePostRegi"
        component={NoticePostRegi}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ListPostPage"
        component={ListPostPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NoticePostRegiPage"
        component={NoticePostRegiPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QstPostRegiPage"
        component={QstPostRegiPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SgsPostRegiPage"
        component={SgsPostRegiPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SgsPostDetailPage"
        component={SgsPostDetailPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FrePostRegiPage"
        component={FrePostRegiPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FrePostDetailLawPage"
        component={FrePostDetailLawPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FrePostDetailPage"
        component={FreePostDetailPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VotePostPage"
        component={VotePostPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="VotePostRegiPage"
        component={VotePostRegiPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="VotePostDetailPage"
        component={VotePostDetailPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="VotePostStatusPage"
        component={VotePostStatusPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SchedulPage"
        component={SchedulePage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SchedulePostRegiPage"
        component={SchedulePostRegiPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SchdEditPostPage"
        component={SchdEditPostPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BottomTabNavigations"
        component={BottomTabNavigations}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NoticeEditPage"
        component={NoticeEditPage}
        options={{ headerShown: false }}
      />

      {/**-------------------------------------------------------------------------------*/}
      <Stack.Screen
        name="FreEditPostPage"
        component={FreEditPostPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QstEditPostPage"
        component={QstEditPostPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SgsEditPostPage"
        component={SgsEditPostPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QstPostDetailPage"
        component={QstPostDetailPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
