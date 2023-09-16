import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import textStyle from "../../Styles/TextStyle";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import { BlackBackIconButton } from "../AllCompo/BackIconButton";
import { OnlyAccountInputMarginTop3 } from "../AccountCompo/AccoutTextInput";
import { OnlyAccountButton } from "../AccountCompo/AccountButton";
import {
  deviceHeight,
  deviceWidth,
  currentPlatform,
} from "../../Utils/DeviceUtils";

//  프로퍼티 타입 정의
interface CommonProps {
  children?: React.ReactNode;
  bigtext: string;
  smalltext: string;
  buttontext: string;
  inputtext: string;
  onPress: () => void;
  navigation: {
    navigate: (screenName: string) => void;
  };
}
export const RegiCommonView: React.FC<CommonProps> = ({
  children,
  bigtext, //Account Title Text
  smalltext, // Account subheading Text
  buttontext, // Button안에 들어가는 Text
  inputtext, // 내용 작성 창에 들어가는 Text
  onPress,
}) => {
  // 파스칼 케이스 적용
  return (
    <SafeAreaView style={BackgroundStyle.loginBackground}>
      <View style={BackgroundStyle.backIconFlex}>
        <BlackBackIconButton onPress={onPress} />
      </View>
      <View style={BackgroundStyle.titleTextFlex}>
        <Text
          style={[
            textStyle.bold25,
            { color: "#4BB781", marginLeft: deviceWidth * 0.1 },
          ]}
        >
          {bigtext}
        </Text>
        <Text
          style={[
            textStyle.medium20,
            {
              color: "#424C43",
              marginTop: currentPlatform === "ios" ? 0 : deviceHeight * 0.06,
            },
          ]}
        >
          {smalltext}
        </Text>
      </View>
      <View style={BackgroundStyle.accountInputFlex}>
        <OnlyAccountInputMarginTop3 text={inputtext} />
      </View>
      <View style={BackgroundStyle.accountButtonFlex}>
        <OnlyAccountButton text={buttontext} onPress={onPress} />
      </View>
      {children}
    </SafeAreaView>
  );
};