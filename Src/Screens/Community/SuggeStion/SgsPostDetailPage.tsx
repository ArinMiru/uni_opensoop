import { View, Platform, KeyboardAvoidingView } from "react-native";
import React from "react";
import {
  SgsPost,
  SgsComment,
} from "../../../Components/ListCompo/SgsCompo/SgsCompo";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { ScrollView } from "react-native-gesture-handler";
import { SugBubListDel } from "../../../Services/_private/SugBubListApi";
import { SgsPostDetailProps } from "../../../Utils/NavigationProp/NavigationDetailScrProp";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { ListAnsTextInput } from "../../../Components/AllCompo/ListAnsTextInputCompo";
import { deviceHeight } from "../../../Utils/DeviceUtils";

const SgsPostClkToast: React.FC<SgsPostDetailProps> = ({
  navigation,
  route,
}) => {
  const userData = getUserData();
  const { CRE_SEQ, CONT, TIT, NICK_NM, CRE_DAT, AnsFree } = route.params;
  const sgsDel = () => {
    SugBubListDel(CRE_SEQ);
  };
  return (
    <Background>
      <BackIconTopbarStyle
        Title="건의게시판"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView
        style={[NewBackgroundStyle.OnlyTopRadiusBackgroundStyle, { flex: 1 }]}
        behavior={Platform.select({ ios: "padding", android: "height" })}
        keyboardVerticalOffset={Platform.OS === "android" ? -310 : 0} // 이 값을 조절하여 원하는 결과를 얻을 수 있습니다.
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View>
            <SgsPost
              nickname={NICK_NM}
              sgstit={TIT}
              sgscont={CONT}
              sgsposttime={CRE_DAT}
            />
          </View>
          <View
            style={{ alignItems: "center", paddingBottom: deviceHeight * 0.09 }}
          >
            {AnsFree.sort((a, b) => b.ANS_SEQ - a.ANS_SEQ).map((comment) => (
              <SgsComment
                key={comment.ANS_SEQ}
                sgsansnick={comment.ANS_MEMB_ID}
                sgsanstit={comment.CONT}
                sgsanstime={comment.CRE_DAT}
              />
            ))}
          </View>
        </ScrollView>
        <KeyboardAvoidingView>
          <ListAnsTextInput autoCapitalize="none" keyboardType="default" />
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default SgsPostClkToast;
