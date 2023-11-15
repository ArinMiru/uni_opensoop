import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../Navigations/StackNavigator";

/* ---------------------------------------------------------------------------------------- */

type RegiNmNicRouteProp = RouteProp<RootStackParamList, "RegiNmNic">;
type RegiNmNicNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RegiNmNic"
>;

export type RegiRegiNmNicProps = {
  route: RegiNmNicRouteProp;
  navigation: RegiNmNicNavigationProp;
};

/* ---------------------------------------------------------------------------------------- */

type RegiPassRouteProp = RouteProp<RootStackParamList, "RegiPass">;
type RegiPassNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RegiPass"
>;

export type RegiPassProps = {
  route: RegiPassRouteProp;
  navigation: RegiPassNavigationProp;
};
/* ---------------------------------------------------------------------------------------- */

type RegiChkRouteProp = RouteProp<RootStackParamList, "RegiChk">;
type RegiChkNavigationProp = StackNavigationProp<RootStackParamList, "RegiChk">;

export type RegiChkProps = {
  route: RegiChkRouteProp;
  navigation: RegiChkNavigationProp;
};
/* ---------------------------------------------------------------------------------------- */

type RegiSchlSrchRouteProp = RouteProp<RootStackParamList, "UniCertiSchSrch">;
type RegiSchlSrchNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UniCertiSchSrch"
>;

export type RegiSchlSrchProps = {
  route: RegiSchlSrchRouteProp;
  navigation: RegiSchlSrchNavigationProp;
};
/* ---------------------------------------------------------------------------------------- */

type RegiDportSrchRouteProp = RouteProp<RootStackParamList, "UniCertiDprtSrch">;
type RegiDportSrchNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UniCertiDprtSrch"
>;

export type RegiDprtSrchProps = {
  route: RegiDportSrchRouteProp;
  navigation: RegiDportSrchNavigationProp;
};
/* ---------------------------------------------------------------------------------------- */

type RegiCertiGradRouteProp = RouteProp<RootStackParamList, "UniCertiGrad">;
type RegiCertiGradNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UniCertiGrad"
>;

export type RegiCertiGradProps = {
  route: RegiCertiGradRouteProp;
  navigation: RegiCertiGradNavigationProp;
};
/* ---------------------------------------------------------------------------------------- */

type RegiCertiStudNumRouteProp = RouteProp<
  RootStackParamList,
  "UniCertiStudNum"
>;
type RegiCertiStudNumNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UniCertiStudNum"
>;

export type RegiCertiStudNumProps = {
  route: RegiCertiStudNumRouteProp;
  navigation: RegiCertiStudNumNavigationProp;
};
/* ---------------------------------------------------------------------------------------- */

type RegiCertEmailRouteProp = RouteProp<RootStackParamList, "UniCertiEmail">;
type RegiCertEmailNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UniCertiEmail"
>;

export type RegiCertEmailProps = {
  route: RegiCertEmailRouteProp;
  navigation: RegiCertEmailNavigationProp;
};
/* ---------------------------------------------------------------------------------------- */

type RegiCertEcodeRouteProp = RouteProp<RootStackParamList, "UniCertiEcode">;
type RegiCertEcodeNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UniCertiEcode"
>;

export type RegiCertEcodeProps = {
  route: RegiCertEcodeRouteProp;
  navigation: RegiCertEcodeNavigationProp;
};
/* ---------------------------------------------------------------------------------------- */

type PassEcodeRouteProp = RouteProp<RootStackParamList, "PassFindEcode">;
type PassEcodeNavigationProp = StackNavigationProp<
  RootStackParamList,
  "PassFindEcode"
>;

export type PassEcodeProps = {
  route: PassEcodeRouteProp;
  navigation: PassEcodeNavigationProp;
};