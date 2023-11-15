import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInputProps,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import textStyle from "../../Styles/TextStyle";
import BackgroundStyle from "../../Styles/BackgroundStyle";
import { BlackBackIconButton } from "../IconCompo/BackIconButton";
import { OnlyAccountInputCompoMarginTop3 } from "../AccountCompo/AccoutTextInput";
import { OnlyAccountButton } from "../AccountCompo/AccountButton";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";
import { Image } from "react-native";
import NewBackgroundStyle from "../../Styles/NewBackgroundStyle";

//  프로퍼티 타입 정의
interface CommonProps extends TextInputProps {
  children?: React.ReactNode;
  bigtext?: string;
  smalltext?: string;
  buttontext?: string;
  inputtext: React.ReactNode;
  disable?: boolean;
  IconPress?: () => void;
  onPress?: () => void;
  count?: string;
  navigation?: {
    navigate: (screenName: string) => void;
  };
}
export const RegiCommonView: React.FC<CommonProps> = ({
  children,
  bigtext, //Account Title Text
  smalltext, // Account subheading Text
  buttontext, // Button안에 들어가는 Text
  inputtext, // 내용 작성 창에 들어가는 Text
  disable,
  onPress,
  IconPress,
  count,
  ...props
}) => {
  // 파스칼 케이스 적용
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={[NewBackgroundStyle.ListDetailBackgroundStyle, { flex: 1 }]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled={true}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <SafeAreaView style={BackgroundStyle.AccountBackground}>
            <View style={BackgroundStyle.backIconFlex}>
              <BlackBackIconButton onPress={IconPress} />
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
                {bigtext}
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
                {smalltext}
              </Text>
            </View>
            <View style={BackgroundStyle.accountInputFlex}>
              <OnlyAccountInputCompoMarginTop3 text={inputtext} {...props} />
            </View>
            <View
              style={{
                position: "absolute",
                paddingTop: deviceHeight * 0.27,
                paddingLeft: deviceWidth * 0.62,
              }}
            >
              <Text
                style={{
                  color: "red",
                  fontSize: 15,
                }}
              >
                {count}
              </Text>
            </View>
            <View style={BackgroundStyle.accountButtonFlex}>
              <OnlyAccountButton
                text={buttontext}
                onPress={onPress}
                disable={disable}
              />
            </View>
            {children}
            <Image
              source={require("../../Assets/Images/LogoImage.png")}
              style={{
                position: "absolute",
                resizeMode: "contain",
                width: deviceWidth * 0.5,
                height: deviceHeight * 0.5,
                bottom: deviceHeight * -0.11,
                right: deviceWidth * -0.08,
              }}
            />
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
