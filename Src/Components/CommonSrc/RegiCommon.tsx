import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import textStyle from "../../Styles/TextStyle";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import ButtonStyle from "../../Styles/ButtonStyle";
import InputStyle from "../../Styles/TextInputStyle";
import { BlackBackIconButton } from "../AllCompo/BackIconButton";
import { OnlyAccountInput } from "../AccountCompo/AccoutTextInput";
import { TextInputProps, ButtonProps } from "react-native";
import { OnlyAccountButton } from "../AccountCompo/AccountButton";
import { deviceWidth } from "../../Utils/DeviceUtils";

//  프로퍼티 타입 정의
interface CommonProps {
  children?: React.ReactNode;
  bigtext: string;
  smalltext: string;
  buttontext: string;
  inputtexttext: string;
  onPress: () => void;
  navigation: {
    navigate: (screenName: string) => void;
  };
}
export const RegiCommonView: React.FC<CommonProps> = ({
  children,
  bigtext,
  smalltext,
  buttontext,
  inputtexttext,
  onPress,
}) => {
  // 파스칼 케이스 적용
  return (
    <SafeAreaView style={BackgroundStyle.loginBackground}>
      <View style={BackgroundStyle.backIconFlex}>
        <BlackBackIconButton />
      </View>
      <View style={BackgroundStyle.titleTextFlex}>
        <Text
          style={[
            textStyle.bold25,
            { color: "#4BB781", marginLeft: deviceWidth * 0.111 },
          ]}
        >
          {bigtext}
        </Text>
        <Text style={[textStyle.medium20, { color: "#424C43" }]}>
          {smalltext}
        </Text>
      </View>
      <View style={BackgroundStyle.accountInputFlex}>
        <OnlyAccountInput inputtext={inputtexttext} />
      </View>
      <View style={BackgroundStyle.accountButtonFlex}>
        <OnlyAccountButton text={buttontext} />
      </View>
      {children}
    </SafeAreaView>
  );
};
