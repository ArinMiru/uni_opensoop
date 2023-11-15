import { StackNavigationProp } from "@react-navigation/stack";
import { Route, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../Navigations/StackNavigator";

type NoticeRouteProp = RouteProp<RootStackParamList, "NoticePage">;
type NoticeNavigationProp = StackNavigationProp<
  RootStackParamList,
  "NoticePage"
>;
export type NoticeProps = {
  route: NoticeRouteProp;
  navigation: NoticeNavigationProp;
};