import React from "react";
import { View, Text, ScrollView } from "react-native";
import TextStyle from "../../../Styles/TextStyle";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { Background } from "../../../Components/AllCompo/Background";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";

const FrePostDetailLawPage: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <Background>
      <View style={{ justifyContent: "center" }}>
        <BackIconTopbarStyle
          Title="커뮤니티 이용규칙"
          MEMB_SC_NM=""
          MEMB_DEP_NM=""
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1 }}>
          <Text style={TextStyle.bold20}>커뮤니티 이용규칙</Text>

          <Text style={[TextStyle.regular14, { marginTop: 20 }]}>
            1. 기본 원칙{"\n"}- 회원은 서로를 존중하고 이해하는 자세로 게시판을
            이용해야 합니다.{"\n"}- 토론은 건전하게, 서로의 의견을 존중하는
            방식으로 진행되어야 합니다.
          </Text>

          <Text style={[TextStyle.regular14, { marginTop: 20 }]}>
            2. 금지사항{"\n"}- 비방, 인신공격, 욕설 및 허위 사실 유포는 엄격히
            금지됩니다.{"\n"}- 스팸이나 광고, 상업적 홍보 게시글은 허용되지
            않습니다.{"\n"}- 18세 미만 접근이 금지된 내용, 불법적인 내용의
            게시물 및 링크는 금지됩니다.{"\n"}- 타인의 개인정보나 저작권을
            침해하는 내용은 게시할 수 없습니다.
          </Text>

          <Text style={[TextStyle.regular14, { marginTop: 20 }]}>
            3. 게시물 관련{"\n"}- 주제와 관련 없는 게시물은 삭제될 수 있습니다.
            {"\n"}- 중복되는 내용의 게시글은 관리자의 판단 하에 삭제될 수
            있습니다.
          </Text>

          <Text style={[TextStyle.regular14, { marginTop: 20 }]}>
            4. 처벌 방침{"\n"}- 이용규칙을 위반할 경우, 경고, 게시물 삭제, 회원
            계정 제한 등의 조치가 취해질 수 있습니다.{"\n"}- 규칙을 반복적으로
            위반하는 회원은 영구히 이용이 제한될 수 있습니다.
          </Text>

          <Text style={[TextStyle.regular14, { marginTop: 20 }]}>
            5. 법적 책임{"\n"}- 본 규칙을 준수하지 않을 경우 발생하는 법적 분쟁,
            손해배상 책임 등은 해당 회원에게 있습니다.{"\n"}- 이용규칙 위반으로
            인해 제3자와의 분쟁이 발생할 경우, 해당 회원은 자신의 비용과
            책임으로 문제를 해결하여야 합니다.
          </Text>

          <Text style={[TextStyle.regular14, { marginTop: 20 }]}>
            6. 기타{"\n"}- 이 규칙은 시간이 지나면서 변경될 수 있으며, 변경 시
            회원들에게 공지됩니다.{"\n"}- 모든 회원은 이 규칙에 동의한 것으로
            간주됩니다.
          </Text>
        </ScrollView>
      </View>
    </Background>
  );
};

export default FrePostDetailLawPage;
