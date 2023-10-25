import React from "react";
import { View, Text } from "react-native";
import { Background } from "../../Components/AllCompo/Background";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";
import { BackIconTopbarStyle } from "../../Components/AllCompo/TopbarCompo";
import TextStyle from "../../Styles/TextStyle";
import {
  ProfilePageUserInfo,
  CertLogoutBox,
} from "../../Components/ProfileCompo/ProfileCompo";
import { DelToastMessageBox } from "../../Components/ToastMessageCompo/ToastMessageBox";
import { RegiCommonView } from "../../Components/CommonScreen/RegiCommon";
import {
  SafeAreaView,
  TextInputProps,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import textStyle from "../../Styles/TextStyle";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import { BlackBackIconButton } from "../../Components/IconCompo/BackIconButton";
import { OnlyAccountInputCompoMarginTop3 } from "../../Components/AccountCompo/AccoutTextInput";
import { OnlyAccountButton } from "../../Components/AccountCompo/AccountButton";
import { ListAnsTextInput } from "../../Components/AllCompo/ListAnsTextInputCompo";

interface ScreenProps {
  children?: React.ReactNode;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * @Dowon(김도원 생성)
 * DowonTestScreen
 */

const DowonTestScreen: React.FC<ScreenProps> = ({ navigation }) => {
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
          <OnlyAccountInputCompoMarginTop3 text={"학과/전공"} />
        </View>
        <View style={BackgroundStyle.accountButtonFlex}>
          <OnlyAccountButton text={"검색"} />
          <ListAnsTextInput />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default DowonTestScreen;
