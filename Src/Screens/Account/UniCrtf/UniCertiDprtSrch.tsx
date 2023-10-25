import React from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import {
  Text,
  View,
  SafeAreaView,
  TextInputProps,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import textStyle from "../../../Styles/TextStyle";
import BackgroundStyle from "../../../Styles/BackgroundStyle";
import { BlackBackIconButton } from "../../../Components/IconCompo/BackIconButton";
import { OnlyAccountInputCompoMarginTop3 } from "../../../Components/AccountCompo/AccoutTextInput";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";

interface CommonProps extends TextInputProps {
  children?: React.ReactNode;
  bigtext?: string;
  smalltext?: string;
  buttontext?: string;
  inputtext?: string;
  disable?: boolean;
  IconPress?: () => void;
  onPress?: () => void;
  navigation?: {
    navigate: (screenName: string) => void;
  };
}

const UniCertiDprtSrch: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={BackgroundStyle.AccountBackground}>
        <View style={BackgroundStyle.backIconFlex}>
          <BlackBackIconButton />
        </View>
        <View style={BackgroundStyle.titleTextFlex}>
          <Text
            style={[
              textStyle.bold25,
              {
                color: "#4BB781",
                marginLeft: deviceWidth * 0.1,
                lineHeight: deviceWidth * 0.09,
              },
            ]}
          >
            {"학과/전공"}
          </Text>
          <Text
            style={[
              textStyle.medium20,
              {
                color: "#424C43",
                lineHeight: deviceHeight * 0.0459,
                marginLeft: deviceWidth * 0.01,
              },
            ]}
          >
            {"선택하기"}
          </Text>
        </View>
        <View style={BackgroundStyle.accountInputFlex}>
          <OnlyAccountInputCompoMarginTop3
            text={"학과/전공"}
            autoCapitalize="none"
            keyboardType="default"
          />
        </View>
        <View style={BackgroundStyle.accountButtonFlex}>
          <OnlyAccountButton text={"검색"} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default UniCertiDprtSrch;
