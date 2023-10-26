import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import TextStyle from "../../Styles/TextStyle";
import EditDelCloseModalStyle from "../../Styles/ModalStyles/EditDelCloseModalStyles";
import { FreQstComment } from "../ListCompo/FreCompo/FreCompo";
import { ScrollView } from "react-native-gesture-handler";
import { ListAnsTextInput } from "../AllCompo/ListAnsTextInputCompo";
import DateSltModalStyle from "../../Styles/ModalStyles/DateSltModalStyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={EditDelCloseModalStyle.qstArea}>
        <View style={EditDelCloseModalStyle.ansArea}>
          <Text
            style={[
              TextStyle.semibold11,
              { color: "#333333" },
              { marginTop: "2%" },
              { marginBottom: "2%" },
            ]}
          >
            댓글
          </Text>
        </View>
        <KeyboardAwareScrollView>
          <FreQstComment
            freqstansnick="익명이"
            freqstanstit="화장실은 죽어서 가십시오~~ 응가 뿌직뿌직 랄랄라"
            freqstanstime="2023-10-16"
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export const DateSltModlCompo: React.FC<ButtonProps> = ({}) => {
  return (
    <View style={DateSltModalStyle.dateArea}>
      <View style={{ flex: 2 }}></View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={DateSltModalStyle.button}>
          <Text style={TextStyle.regular13}>확인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};