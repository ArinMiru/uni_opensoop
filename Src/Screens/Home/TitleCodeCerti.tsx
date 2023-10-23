import React from "react";
import { View, Text } from "react-native";
import TextStyle from "../../Styles/TextStyle";
import { deviceWidth } from "../../Utils/DeviceUtils";
import { ScreenProps } from "../../Navigations/StackNavigator";
import { Background } from "../../Components/AllCompo/Background";
import { BackIconTopbarStyle } from "../../Components/AllCompo/TopbarCompo";
import ProfilePageStyles from "../../Styles/MainPageStyles/ProfilePageStyles";

/** device 기기 이름 조건 별로 텍스트 크기 조절 함수 개발 예정 @ArinMiru */
/** @ts7752 expo-device 라이브러리 설치 요청 완료 (2023-10-23) */

const TitleCodeCerti: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <Background>
      <View style={{ justifyContent: "center" }}>
        <BackIconTopbarStyle
          Title="학회장, 부학회장 인증"
          MEMB_SC_NM=""
          MEMB_DEP_NM=""
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            marginLeft: deviceWidth * 0.085,
            marginTop: deviceWidth * 0.001,
            marginBottom: deviceWidth * 0.02,
          }}
        >
          <Text style={[TextStyle.semibold15, { color: "#181D27" }]}>
            {"제출 서류 이메일 양식"}
          </Text>
        </View>
        <View
          style={{ alignItems: "center", flex: 4, justifyContent: "center" }}
        >
          <View
            style={[
              ProfilePageStyles.MembInfoBoxStyle,
              { justifyContent: "space-between" },
            ]}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={[
                  TextStyle.bold12,
                  { color: "#F66565" },
                  { paddingTop: deviceWidth * 0.03 },
                ]}
              >
                {"[ 제출 이메일 : myp.uni.ptu@gmail.com ]"}
              </Text>
            </View>
            <Text
              style={[
                TextStyle.bold12,
                { color: "#303038" },
                { paddingLeft: deviceWidth * 0.08 },
                { paddingTop: deviceWidth * 0.025 },
              ]}
            >
              {"이름 : 홍길동"}
            </Text>
            <Text
              style={[
                TextStyle.bold12,
                { color: "#303038" },
                { paddingLeft: deviceWidth * 0.08 },
                { paddingTop: deviceWidth * 0.025 },
              ]}
            >
              {"학교 : 대학교 전체 이름"}
            </Text>
            <Text
              style={[
                TextStyle.bold12,
                { color: "#303038" },
                { paddingLeft: deviceWidth * 0.08 },
                { paddingTop: deviceWidth * 0.025 },
              ]}
            >
              {"학번 : 123456789(숫자)"}
            </Text>
            <Text
              style={[
                TextStyle.bold12,
                { color: "#303038" },
                { paddingLeft: deviceWidth * 0.08 },
              ]}
            >
              {"학과 : OOOO학과"}
            </Text>
            <Text
              style={[
                TextStyle.bold12,
                { color: "#303038" },
                { paddingLeft: deviceWidth * 0.08 },
                { paddingTop: deviceWidth * 0.025 },
              ]}
            >
              {"전화번호 : 010-0000-0000"}
            </Text>
            <Text
              style={[
                TextStyle.bold12,
                { color: "#303038" },
                { paddingLeft: deviceWidth * 0.08 },
                { paddingTop: deviceWidth * 0.025 },
              ]}
            >
              {"제출 서류 필수 첨부"}
            </Text>
            <Text
              style={[
                TextStyle.bold12,
                { color: "#F66565" },
                { paddingLeft: deviceWidth * 0.08 },
                { paddingBottom: deviceWidth * 0.03 },
              ]}
            >
              {"(첨부 서류 없을 시 검토 불가)"}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: deviceWidth * 0.085,
            marginTop: deviceWidth * 0.04,
            marginBottom: deviceWidth * 0.02,
          }}
        >
          <Text style={[TextStyle.semibold15, { color: "#181D27" }]}>
            {"인증대상 및 제출서류"}
          </Text>
        </View>
        <View style={{ alignItems: "center", flex: 2.2 }}>
          <View
            style={[
              ProfilePageStyles.OntherBoxStyle,
              { justifyContent: "space-between" },
            ]}
          >
            <Text
              style={[
                TextStyle.bold12,
                { color: "#303038" },
                { paddingLeft: deviceWidth * 0.05 },
                { paddingTop: deviceWidth * 0.07 },
              ]}
            >
              {"인증 대상 : 학회장, 부학회장"}
            </Text>
            <Text
              style={[
                TextStyle.bold12,
                { color: "#303038" },
                { paddingLeft: deviceWidth * 0.05 },
                { paddingBottom: deviceWidth * 0.07 },
              ]}
            >
              {"학회장, 부학회장 임명서 제출"}
              {"\n"}
              {"또는 학회장, 부학회장임을 인증할 수 있는 서류"}
              <Text style={[TextStyle.bold12, { color: "#F66565" }]}>
                {"\n"}
                {"(학과장 인증을 받은 증명서만 인정)"}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default TitleCodeCerti;
