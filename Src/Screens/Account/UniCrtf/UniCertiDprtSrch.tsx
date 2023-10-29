import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import textStyle from "../../../Styles/TextStyle";
import BackgroundStyle from "../../../Styles/BackgroundStyle";
import { BlackBackIconButton } from "../../../Components/IconCompo/BackIconButton";
import { OnlyAccountInputCompoMarginTop3 } from "../../../Components/AccountCompo/AccoutTextInput";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { Image } from "react-native";
import { RegiDprtSrchProps } from "../../../Utils/NavigationProp/AccountScrProp";
import { DprtData } from "../../../Utils/_private/RegiData/DprtSrchData";
import { DprtSrch } from "../../../Services/_private/EndPointApiFuntion";

const UniCertiDprtSrch: React.FC<RegiDprtSrchProps> = ({
  navigation,
  route,
}) => {
  const [dprtData, setDprtData] = useState<DprtData | null>(null); // 서버에서 넘어온 데이터 기본
  const [dprtDetailData, setDprtDetailData] = useState<
    DprtData["DPRT_NM_INFO"] //서버에서 넘어온 학과명 데이터 상세
  >([]);
  const { SCH_CD, MEMB_ID } = route.params;
  console.log(SCH_CD, MEMB_ID);

  useEffect(() => {
    DprtSrch(SCH_CD)
      .then((data) => {
        if (data !== null && data.RSLT_CD === "00") {
          setDprtData(data);
          if (Array.isArray(data.DPRT_NM_INFO)) {
            setDprtDetailData(data.DPRT_NM_INFO);
          } else {
            setDprtDetailData([]);
          }
        }
      })
      .catch((error) => {
        console.error("데이터 가져오기 오류:", error);
      });
  }, [SCH_CD]);

  useEffect(() => {
    console.log(dprtData);
  }, [dprtDetailData]); // dprtDetailData가 업데이트 될 때 로그 출력

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={BackgroundStyle.AccountBackground}>
        <View style={BackgroundStyle.backIconFlex}>
          <BlackBackIconButton onPress={() => navigation.goBack()} />
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default UniCertiDprtSrch;
