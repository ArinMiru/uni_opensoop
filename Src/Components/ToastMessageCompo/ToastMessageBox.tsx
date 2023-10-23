import React from "react";
import { Text, View } from "react-native";
import textStyle from "../../Styles/TextStyle";
import ToastMessageStyle from "../../Styles/ToastMessageStyles/ToastMessageStyle";

/** 삭제, 수정, 등록 toast message 컴포넌트 개발 완료 @ArinMiru(2023-10-24 00:08) */
/** @ts7752 확인 바람 */

export const DelToastMessageBox = ({}) => {
  return (
    <View style={[ToastMessageStyle.ToastMessageBoxStyle]}>
      <Text style={[textStyle.bold09, { color: "#FFFFFF" }]}>
        {"삭제되었습니다."}
      </Text>
    </View>
  );
};

export const EdtToastMessageBox = ({}) => {
  return (
    <View style={[ToastMessageStyle.ToastMessageBoxStyle]}>
      <Text style={[textStyle.bold09, { color: "#FFFFFF" }]}>
        {"수정되었습니다."}
      </Text>
    </View>
  );
};

export const RegiToastMessageBox = ({}) => {
  return (
    <View style={[ToastMessageStyle.ToastMessageBoxStyle]}>
      <Text style={[textStyle.bold09, { color: "#FFFFFF" }]}>
        {"등록되었습니다."}
      </Text>
    </View>
  );
};
