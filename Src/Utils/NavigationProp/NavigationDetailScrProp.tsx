import { StackNavigationProp } from "@react-navigation/stack";
import { Route, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../Navigations/StackNavigator";

type SgsPostDetailRouteProp = RouteProp<
  RootStackParamList,
  "SgsPostDetailPage"
>;
type SgsPostDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SgsPostDetailPage"
>;
export type SgsPostDetailProps = {
  route: SgsPostDetailRouteProp;
  navigation: SgsPostDetailNavigationProp;
};
/* ---------------------------------------------------------------------------------------- */

type FreePostDetailRouteProp = RouteProp<
  RootStackParamList,
  "FrePostDetailPage"
>;
type FreePostDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  "FrePostDetailPage"
>;

export type FreePostDetailProps = {
  route: FreePostDetailRouteProp;
  navigation: FreePostDetailNavigationProp;
};

/* ---------------------------------------------------------------------------------------- */

type NoticeEditRouteProp = RouteProp<RootStackParamList, "NoticeEditPage">;
type NoticeEditNavigationProp = StackNavigationProp<
  RootStackParamList,
  "NoticeEditPage"
>;

export type NoticeEditProps = {
  route: NoticeEditRouteProp;
  navigation: NoticeEditNavigationProp;
};

/* ---------------------------------------------------------------------------------------- */

type VotePostDetailRoutePageProp = RouteProp<RootStackParamList, "VotePostDetailPage">;
type VotePostDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  "VotePostDetailPage"
>;

export type VotePostDetailProp = {
  route: VotePostDetailRoutePageProp;
  navigation: VotePostDetailNavigationProp;
}