import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import textStyle from "../../../Styles/TextStyle";
import BackgroundStyle from "../../../Styles/BackgroundStyle";
import { BlackBackIconButton } from "../../../Components/IconCompo/BackIconButton";
import { OnlyAccountInputCompoMarginTop3 } from "../../../Components/AccountCompo/AccoutTextInput";
import { OnlyAccountButton } from "../../../Components/AccountCompo/AccountButton";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { Image } from "react-native";
import { RegiDprtSrchProps } from "../../../Utils/NavigationProp/AccountScrProp";
import { dprtSrch } from "../../../Services/_private/EndPointApiFuntion";

const UniCertiDprtSrch: React.FC<RegiDprtSrchProps> = ({
  navigation,
  route,
}) => {
  const [dprtData, setDprtData] = useState<any[]>([]); // Array to store department data
  const [selectedDprtCode, setSelectedDprtCode] = useState<string>("");
  const { SCH_CD, MEMB_ID } = route.params;
  const [searchText, setSearchText] = useState<string>("");
  const [selectedDprtName, setSelectedDprtName] = useState<string>("");
  const [showScrollView, setShowScrollView] = useState(true);

  const dprtSrchcall = () => {
    dprtSrch(SCH_CD)
      .then((data) => {
        if (data !== null && data.RSLT_CD === "00") {
          setDprtData(data.DPRT_NM_INFO || []);
        } else {
          setDprtData([]);
        }
      })
      .catch((error) => {
        
      });
  };

  const filterDprtData = () => {
    return dprtData.filter((dprt) => dprt.DPRT_NM.includes(searchText));
  };

  useEffect(() => {
    // Call the function to fetch department data when the component mounts
    dprtSrchcall();
  }, []);

  const handleDprtSelect = (dprt: any) => {
    setSelectedDprtCode(dprt.DPRT_CD);
    setSelectedDprtName(dprt.DPRT_NM);
    setShowScrollView(false); // 스크롤 뷰 숨김
  };

  const handleNextButtonPress = () => {
    if (!selectedDprtCode) {
      Alert.alert("오류", "학과를 선택해주세요.");
      return;
    }

    navigation.navigate("UniCertiGrad", {
      MEMB_ID: MEMB_ID,
      MEMB_SC_CD: SCH_CD,
      MEMB_DEP_CD: selectedDprtCode,
    });
  };

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
        <View style={BackgroundStyle.accountButtonFlex}>
          <OnlyAccountInputCompoMarginTop3
            text={"학과/전공"}
            autoCapitalize="none"
            keyboardType="default"
            onChangeText={(text) => {
              setSearchText(text);
              setSelectedDprtName(text);
              setShowScrollView(true); // 텍스트가 변경될 때 스크롤 뷰 표시
              if (text === "") {
                setSelectedDprtCode("");
              }
            }}
            value={selectedDprtName}
          />

          <ScrollView style={{ maxHeight: deviceHeight * 0.19 }}>
            {filterDprtData().map((dprt, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleDprtSelect(dprt)}
                style={{
                  padding: 8,
                  backgroundColor: "#f7f8f9",
                  width: deviceWidth * 0.8,
                  height: deviceHeight * 0.05,
                  alignSelf: "center",
                  marginTop: 10,
                  borderRadius: 10,
                }}
              >
                <Text>{dprt.DPRT_NM}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={{ height: deviceHeight * 0.01 }} />
          <OnlyAccountButton text={"다음"} onPress={handleNextButtonPress} />
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
