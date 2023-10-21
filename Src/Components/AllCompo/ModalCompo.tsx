import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TextStyle from "../../Styles/TextStyle";
import EditDelCloseModalStyle from "../../Styles/ModalStyles/EditDelCloseModalStyles";
import { FreQstComment } from "../ListCompo/FreCompo/FreCompo";
import { ScrollView } from "react-native-gesture-handler";

interface ButtonProps {
  EditonPress?: () => void;
  DelonPress?: () => void;
  CloseonPress?: () => void;
}

export const EditModalCompo: React.FC<ButtonProps> = ({ EditonPress }) => {
  return (
    <TouchableOpacity
      style={EditDelCloseModalStyle.editArea}
      onPress={EditonPress}
    >
      <Text style={[TextStyle.medium14, { color: "#00A653" }]}>수정</Text>
    </TouchableOpacity>
  );
};

export const DelModalCompo: React.FC<ButtonProps> = ({ DelonPress }) => {
  return (
    <TouchableOpacity
      style={EditDelCloseModalStyle.editArea}
      onPress={DelonPress}
    >
      <Text style={[TextStyle.medium14, { color: "#F05151" }]}>삭제</Text>
    </TouchableOpacity>
  );
};

export const CloseModalCompo: React.FC<ButtonProps> = ({ CloseonPress }) => {
  return (
    <TouchableOpacity
      style={EditDelCloseModalStyle.editArea}
      onPress={CloseonPress}
    >
      <Text style={[TextStyle.medium14, { color: "#505050" }]}>닫기</Text>
    </TouchableOpacity>
  );
};

export const QstModalCompo: React.FC<ButtonProps> = ({}) => {
  return (
    <View style={EditDelCloseModalStyle.qstArea}>
      <View style={EditDelCloseModalStyle.ansArea}>
        <Text style={[TextStyle.semibold10, { color: "#333333" }]}>댓글</Text>
      </View>
      <ScrollView style={{ flex: 6 }}>
        <FreQstComment
          freqstansnick="익명이"
          freqstanstit="화장실은 죽어서 가십시오~~ 응가 뿌직뿌직 랄랄라"
          freqstanstime="10년전"
        />
      </ScrollView>
    </View>
  );
};
