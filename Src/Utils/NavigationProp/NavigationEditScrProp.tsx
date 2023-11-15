import { StackNavigationProp } from "@react-navigation/stack";
import { Route, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../Navigations/StackNavigator";

type FreEditRouteProp = RouteProp<RootStackParamList, "FreEditPostPage">;
type FreEditNavigationProp = StackNavigationProp<
  RootStackParamList,
  "FreEditPostPage"
>;
export type FreEditProps = {
  route: FreEditRouteProp;
  navigation: FreEditNavigationProp;
};
/* ---------------------------------------------------------------------------------------- */
type sgsEditRouteProp = RouteProp<RootStackParamList, "SgsEditPostPage">;
type sgsEditNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SgsEditPostPage"
>;
export type sgsEditProps = {
  route: sgsEditRouteProp;
  navigation: sgsEditNavigationProp;
};
/* ---------------------------------------------------------------------------------------- */
type quesEditRouteProp = RouteProp<RootStackParamList, "QstEditPostPage">;
type quesEditNavigationProp = StackNavigationProp<
  RootStackParamList,
  "QstEditPostPage"
>;
export type quesEditProps = {
  route: quesEditRouteProp;
  navigation: quesEditNavigationProp;
};
/* ---------------------------------------------------------------------------------------- */
