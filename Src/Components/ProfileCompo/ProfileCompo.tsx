import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { deviceWidth } from "../../Utils/DeviceUtils";
import ProfilePageStyles from "../../Styles/MainPageStyles/ProfilePageStyles";
import TextStyle from "../../Styles/TextStyle";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
          marginRight: "7%",
          marginLeft: "7%",
          marginTop: deviceWidth * 0.02,
          borderBottomColor: "#B4B4B4",
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
          <Text style={[TextStyle.semibold10, { color: "#303038" }]}>
            {MEMB_NM}
          </Text>
        </View>
        <View
          style={{
            paddingLeft: deviceWidth * 0.01,
            marginTop: "1%",
          }}
        >
          <Text style={[TextStyle.semibold08, { color: "#919191" }]}>
            {MEMB_SC_NM}
          </Text>
        </View>
        <View style={{ paddingLeft: deviceWidth * 0.005, marginTop: "1%" }}>
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
          <Text style={[TextStyle.semibold11, { color: "#303038" }]}>
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
          <Text style={[TextStyle.semibold11, { color: "#303038" }]}>
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
          <Text style={[TextStyle.semibold11, { color: "#303038" }]}>
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
          <Text style={[TextStyle.semibold11, { color: "#303038" }]}>
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
          <Text style={[TextStyle.semibold11, { color: "#303038" }]}>
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
  return (
    <View
      style={[ProfilePageStyles.OntherBoxStyle, { flexDirection: "column" }]}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        onPress={onPressTITCERT}
      >
        <Image
          style={{
            resizeMode: "contain",
            width: deviceWidth * 0.0999,
            marginLeft: deviceWidth * 0.06,
          }}
          source={require("../../Assets/Images/CerticonImage.png")}
        />
        <View
          style={{
            paddingLeft: deviceWidth * 0.06,
          }}
        >
          <Text style={[TextStyle.medium10, { color: "#303038" }]}>
            {"학회장, 부학회장 인증"}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
            paddingRight: deviceWidth * 0.06,
          }}
        >
          <Ionicons
            name="chevron-forward"
            size={deviceWidth * 0.045}
            color="#37424D"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        onPress={onPressLOGOUT}
      >
        <Image
          style={{
            resizeMode: "contain",
            width: deviceWidth * 0.0999,
            marginLeft: deviceWidth * 0.06,
          }}
          source={require("../../Assets/Images/LogOuticonImage.png")}
        />
        <View
          style={{
            paddingLeft: deviceWidth * 0.06,
          }}
        >
          <Text style={[TextStyle.semibold10, { color: "#F66565" }]}>
            {"로그아웃"}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
            paddingRight: deviceWidth * 0.06,
          }}
        >
          <Ionicons
            name="chevron-forward"
            size={deviceWidth * 0.045}
            color="#37424D"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
