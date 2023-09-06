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

//  프로퍼티 타입 정의
interface CommonProps {
  children?: React.ReactNode;
  bigtext: string;
  smalltext: string;
  inputtext: string;
  buttontext: string;
  onPress: () => void;
  navigation: {
    navigate: (screenName: string) => void;
  };
}

export const RegiCommonView: React.FC<CommonProps> = ({
  children,
  bigtext,
  smalltext,
  inputtext,
  buttontext,
  onPress,
}) => {
  // 파스칼 케이스 적용
  return (
    <SafeAreaView style={BackgroundStyle.loginBackground}>
      <View style={BackgroundStyle.uniDprtSrchText}>
        <Text style={textStyle.commonScreenbigText}>{bigtext}</Text>
        <Text style={textStyle.commonScreensmallText}>{smalltext}</Text>
      </View>
      <View style={BackgroundStyle.uniDprtSrchInput}>
        <TextInput
          style={InputStyle.commonInput}
          placeholder={inputtext}
        ></TextInput>
      </View>
      <View style={BackgroundStyle.uniDprtSrchButton}>
        <TouchableOpacity
          style={ButtonStyle.commonButtonStyle}
          onPress={onPress}
        >
          <Text style={textStyle.commonButtonText}>{buttontext}</Text>
        </TouchableOpacity>
      </View>
      {children}
    </SafeAreaView>
  );
};
