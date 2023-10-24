import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
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
