import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import { BlackBackIconButton } from "../../../Components/IconCompo/BackIconButton";
import BackgroundStyle from "../../../Styles/BackgroundStyle";
import textStyle from "../../../Styles/TextStyle";
import { RegiDupleFlex3 } from "../../../Components/AccountCompo/AccountCustomCompo";
import { SchlSrchCall } from "../../../Services/_private/EndPointApiFuntion";
import { Image } from "react-native";
import { RegiSchlSrchProps } from "../../../Utils/NavigationProp/AccountScrProp";

const UniCertiSchSrch: React.FC<RegiSchlSrchProps> = ({
  navigation,
  route,
}) => {
  const [userSchSrch, setUserSchSrch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<string>>([]);
  const [isNextButtonActive, setIsNextButtonActive] = useState<boolean>(false);
  const [selectedSchoolCode, setSelectedSchoolCode] = useState<string>("");
  const [searchResultData, setSearchResultData] = useState<any>(null); // 추가

  const { MEMB_ID } = route.params;

  const SrchCheck = async () => {
    if (userSchSrch.length >= 2) {
      const result = await SchlSrchCall(userSchSrch);
      setSearchResultData(result); // 'result' 값을 상태로 저장
      console.log("결과:", result); // 로그를 출력합니다.
      if (result && result.SCH_NM_INFO) {
        const schNames = result.SCH_NM_INFO.map((item) => item.SCH_NM);
        setSearchResults(schNames);
      } else {
        setSearchResults([]);
      }
    }
  };

  const selectSchool = (name: string) => {
    const selectedSchoolInfo = searchResultData.SCH_NM_INFO.find(
      (item: { SCH_CD: number; SCH_NM: string }) => item.SCH_NM === name
    );
    if (selectedSchoolInfo) {
      const SCH_CD = selectedSchoolInfo.SCH_CD;
      setSelectedSchoolCode(SCH_CD);
      setUserSchSrch(name);
      setSearchResults([]);
      setIsNextButtonActive(true);
    }
  };

  const filterInput = (text: string) => {
    const regex = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+$/;
    if (regex.test(text) || text === "") {
      setUserSchSrch(text);
    }
  };

  useEffect(() => {
    setIsNextButtonActive(userSchSrch.length >= 2);
  }, [userSchSrch]);

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
          onChangeText={filterInput}
          onPress={SrchCheck}
          keyboardType="default"
          autoCapitalize="none"
        ></RegiDupleFlex3>
        <ScrollView
          style={{
            maxHeight: deviceHeight * 0.14,
            position: "absolute",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: "17.8%",
          }}
        >
          {searchResults.slice(0, 10).map((name, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => selectSchool(name)}
              style={{
                padding: 10,
                backgroundColor: "#f7f8f9",
                width: deviceWidth * 0.5625,
              }}
            >
              <Text>{name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 6, justifyContent: "flex-start" }}>
        <OnlyAccountButton
          text="다음"
          onPress={() =>
            navigation.navigate("UniCertiDprtSrch", { MEMB_ID: MEMB_ID, SCH_CD: selectedSchoolCode })
          }
          disable={!isNextButtonActive}
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

export default UniCertiSchSrch;
