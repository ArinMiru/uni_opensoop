import { View, Text } from "react-native";
import React, { useState } from "react";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { BlackBackIconButton } from "../../../Components/IconCompo/BackIconButton";
import BackgroundStyle from "../../../Styles/BackgroundStyle";
import textStyle from "../../../Styles/TextStyle";
import { deviceHeight } from "../../../Utils/DeviceUtils";
import { GradeDropdown } from "../../../Components/SingleUse/GradeDropdown";
import { Image } from "react-native";
import { RegiCertiGradProps } from "../../../Utils/NavigationProp/AccountScrProp";

const PassFindNewPass: React.FC<RegiCertiGradProps> = ({
  navigation,
  route,
}) => {
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const { MEMB_SC_CD, MEMB_ID, MEMB_DEP_CD } = route.params;
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
          onPress={() => navigation.goBack()}
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
          학년
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
          선택하기
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <GradeDropdown onSelected={setSelectedGrade} />
      </View>
      <View style={{ flex: 4, justifyContent: "flex-start" }}>
        <OnlyAccountButton
          text="다음"
          onPress={() =>
            navigation.navigate("UniCertiStudNum", {
              MEMB_DEP_CD: MEMB_DEP_CD,
              MEMB_ID: MEMB_ID,
              MEMB_SC_CD: MEMB_SC_CD,
            })
          }
          disable={!selectedGrade} // 학년이 선택되지 않았으면 버튼 비활성화
        />
      </View>
      <Image
        source={require("../../../Assets/Images/LogoImage.png")}
        style={{
          position: "absolute",
          resizeMode: "contain",
          width: deviceWidth * 0.5,
          height: deviceHeight * 0.5,
          bottom: deviceHeight * -0.11,
          right: deviceWidth * -0.08,
        }}
      />
    </AccountBackground>
  );
};

export default PassFindNewPass;
