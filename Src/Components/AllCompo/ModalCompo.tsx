import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { ModalReuableFuction } from "../../Utils/ReusableFuction/ModalReuableFuction";
import TextStyle from "../../Styles/TextStyle";
import EditDelCloseModalStyle from "../../Styles/ModalStyles/EditDelCloseModalStyles";

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
