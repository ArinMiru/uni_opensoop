import React, { useState } from "react";
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
import { FlatList } from "react-native";

interface ButtonProps {
  EditonPress?: () => void;
  DelonPress?: () => void;
  CloseonPress?: () => void;
  modalData?: any;
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

export const QstModalCompo: React.FC<ButtonProps> = ({ modalData }) => {
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
        <View
          style={{
            flex: 7,
            backgroundColor: "#fff",
            width: "100%",
            height: "100%",
          }}
        >
          {modalData && (
            <FlatList
              data={modalData.ANS_FREE}
              keyExtractor={(item) => item.ANS_SEQ.toString()}
              renderItem={({ item }) => (
                <View>
                  <Text>댓글 작성자: {item.ANS_MEMB_ID}</Text>
                  <Text>댓글 내용: {item.CONT}</Text>
                  <Text>댓글 시간: {item.CRE_DAT}</Text>
                  {/* 기타 데이터 표시 */}
                </View>
              )}
            />
          )}
        </View>
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
