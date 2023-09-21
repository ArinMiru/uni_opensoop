import { View, Text } from "react-native";
import React, { useState } from "react";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { BlackBackIconButton } from "../../../Components/IconCompo/BackIconButton";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import BackgroundStyle from "../../../Styles/BackgroundStyle";
import textStyle from "../../../Styles/TextStyle";
import { deviceHeight } from "../../../Utils/DeviceUtils";
import { Image } from "react-native";
import { RegiDupleFlex3 } from "../../../Components/AccountCompo/AccountCustomCompo";
import { SchlSrchCall } from "../../../Services/_private/EndPointApiFuntion";

const UniCertiSchSrch: React.FC<ScreenProps> = ({ navigation }) => {
  const [userSchSrch, setUserSchSrch] = useState<string>("");

  const SrchCheck = async () => {
    const result = await SchlSrchCall(userSchSrch);
  };

  return (
    <AccountBackground>
      <View
        style={{
          flex: 1,
          width: deviceWidth * 1,
        }}
      >
        <BlackBackIconButton
          text=""
          onPress={() => navigation.navigate("RegiChk")}
          navigation={navigation}
        ></BlackBackIconButton>
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
          대학교
        </Text>
        <Text
          style={[
            textStyle.medium20,
            {
              color: "#424C43",
              marginLeft: deviceWidth * 0.01,
              lineHeight: deviceHeight * 0.0459,
            },
          ]}
        >
          찾기
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <RegiDupleFlex3
          inputText="학교"
          text="검색"
          value={userSchSrch}
          onChangeText={(text) => setUserSchSrch(text)}
          onPress={SrchCheck}
        ></RegiDupleFlex3>
      </View>
      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <OnlyAccountButton
          text="다음"
          onPress={() => navigation.navigate("UniCertiDprtSrch")}
        />
      </View>
    </AccountBackground>
  );
};

export default UniCertiSchSrch;
