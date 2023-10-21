import React from "react";
import { View, Text } from "react-native";
import { MainOpenBub } from "../../Components/MainPageCompo/MainPageCompo";
import { Background } from "../../Components/AllCompo/Background";
import NewBackgroundStyle from "../../Styles/NewBackgroundStyle";
import { TopbarEditButton } from "../../Components/AllCompo/TopbarEditDelRegiButton";
import {
  MainPageTopbarStyle,
  MenuTopbarStyle,
} from "../../Components/AllCompo/TopbarCompo";
import {
  MainVoteBub,
  MainSchdBub,
} from "../../Components/MainPageCompo/MainPageCompo";
import { deviceHeight, deviceWidth } from "../../Utils/DeviceUtils";
import { BackIconTopbarStyle } from "../../Components/AllCompo/TopbarCompo";
import ProfilePageStyles from "../../Styles/MainPageStyles/ProfilePageStyles";
import TextStyle from "../../Styles/TextStyle";
import { Image } from "react-native";

interface inputProps {
  children?: React.ReactNode;
  navigation?: { navigate: (screenName: string) => void };
  PROF_IMG_PATH: string;
  MEMB_NM: string;
  MEMB_SC_NM: string;
  MEMB_DEP_NM: string;
  NICK_NUM: string;
  MEMB_EM: string;
  MEMB_CD: string;
  MEMB_GRA: string;
  TIT_NM: string;
}

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  navigation?: { navigate: (screenName: string) => void };
  onPressTITCERT?: () => void;
  onPressLOGOUT?: () => void;
}

export const ProfilePageUserInfo: React.FC<inputProps> = ({
  PROF_IMG_PATH,
  MEMB_NM,
  MEMB_SC_NM,
  MEMB_DEP_NM,
  NICK_NUM,
  MEMB_EM,
  MEMB_CD,
  MEMB_GRA,
  TIT_NM,
}) => {
  return (
    <View style={[ProfilePageStyles.MembInfoBoxStyle]}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 0.5,
          marginRight: "8%",
          marginLeft: "8%",
          marginTop: deviceWidth * 0.02,
          borderBottomColor: "#4BB781",
        }}
      >
        <Image
          style={{
            resizeMode: "contain",
            width: deviceWidth * 0.099,
          }}
          source={require("../../Assets/Images/profileimage.png")}
        />
        <View style={{ paddingLeft: deviceWidth * 0.03 }}>
          <Text style={[TextStyle.semibold10, { color: "#151515" }]}>
            {MEMB_NM}
          </Text>
        </View>
        <View
          style={{
            paddingLeft: deviceWidth * 0.01,
          }}
        >
          <Text style={[TextStyle.semibold08, { color: "#919191" }]}>
            {MEMB_SC_NM}
          </Text>
        </View>
        <View style={{ paddingLeft: deviceWidth * 0.005 }}>
          <Text style={[TextStyle.semibold08, { color: "#919191" }]}>
            {MEMB_DEP_NM}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginLeft: deviceWidth * 0.06 }}>
          <Text style={[TextStyle.semibold11, { color: "#919191" }]}>
            {"닉네임"}
          </Text>
        </View>
        <View style={{ marginRight: deviceWidth * 0.06 }}>
          <Text style={[TextStyle.semibold13, { color: "#151515" }]}>
            {NICK_NUM}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginLeft: deviceWidth * 0.06 }}>
          <Text style={[TextStyle.semibold11, { color: "#919191" }]}>
            {"이메일"}
          </Text>
        </View>
        <View style={{ marginRight: deviceWidth * 0.06 }}>
          <Text style={[TextStyle.semibold13, { color: "#151515" }]}>
            {MEMB_EM}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginLeft: deviceWidth * 0.06 }}>
          <Text style={[TextStyle.semibold11, { color: "#919191" }]}>
            {"학번"}
          </Text>
        </View>
        <View style={{ marginRight: deviceWidth * 0.06 }}>
          <Text style={[TextStyle.semibold13, { color: "#151515" }]}>
            {MEMB_CD}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginLeft: deviceWidth * 0.06 }}>
          <Text style={[TextStyle.semibold11, { color: "#919191" }]}>
            {"학년"}
          </Text>
        </View>
        <View style={{ marginRight: deviceWidth * 0.06 }}>
          <Text style={[TextStyle.semibold13, { color: "#151515" }]}>
            {MEMB_GRA}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginLeft: deviceWidth * 0.06 }}>
          <Text style={[TextStyle.semibold11, { color: "#919191" }]}>
            {"직함"}
          </Text>
        </View>
        <View style={{ marginRight: deviceWidth * 0.06 }}>
          <Text style={[TextStyle.semibold13, { color: "#151515" }]}>
            {TIT_NM}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const CertLogoutBox: React.FC<ButtonProps> = ({
  text,
  onPressTITCERT,
  onPressLOGOUT,
}) => {
  return <View style={[ProfilePageStyles.OntherBoxStyle]}></View>;
};
