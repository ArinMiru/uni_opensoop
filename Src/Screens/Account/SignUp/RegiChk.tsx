import { View, Text } from "react-native";
import React from "react";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { GreenCheckIcon } from "../../../Components/IconCompo/CheckIcon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import textStyle from "../../../Styles/TextStyle";
import { Image } from "react-native";
import { RegiChkProps } from "../../../Utils/NavigationProp/AccountScrProp";

const RegiChk: React.FC<RegiChkProps> = ({ navigation, route }) => {
  const { MEMB_ID } = route.params;
  return (
    <AccountBackground>
      <View style={{ flex: 3, justifyContent: "flex-end" }}>
        <GreenCheckIcon />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text style={[textStyle.bold25]}>회원가입 완료</Text>
      </View>
      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <OnlyAccountButton
          text="다음"
          onPress={() => navigation.navigate("UniCertiSchSrch", { MEMB_ID })}
          navigation={navigation}
        />
      </View>
    </AccountBackground>
  );
};

export default RegiChk;
