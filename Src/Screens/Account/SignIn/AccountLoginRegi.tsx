import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import {
  OnlyAccountButton,
  OnlyAccountRegiButton,
  SrchDupleButton,
} from "../../../Components/AccountCompo/AccountButton";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import { Image } from "react-native";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import TextStyle from "../../../Styles/TextStyle";

const AccountLoginRegi: React.FC<ScreenProps> = ({ navigation }) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const snapPoints = useMemo(() => ["25%", "25%"], []);

  const handleEditPress = useCallback(() => {
    console.log("Edit button pressed");
  }, []);

  const handleDeletePress = useCallback(() => {
    console.log("Delete button pressed");
  }, []);

  const handleButtonPress = useCallback(() => {
    setModalVisible(true);
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <AccountBackground>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onDismiss={handleCloseModal}
        >
          <View style={ModalStyle.contentContainer}>
            <TouchableOpacity
              style={ModalStyle.editArea}
              onPress={handleEditPress}
            >
              <Text style={[TextStyle.medium14, { color: "#00A653" }]}>
                수정
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ModalStyle.delArea}
              onPress={handleDeletePress}
            >
              <Text style={[TextStyle.medium14, { color: "#F05151" }]}>
                삭제
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ModalStyle.closeArea}
              onPress={handleCloseModal}
            >
              <Text style={[TextStyle.medium14, { color: "#505050" }]}>
                닫기
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>

        <View
          style={{ flex: 5, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{
              resizeMode: "contain",
              width: deviceWidth * 0.5,
              marginTop: deviceHeight * 0.1,
            }}
            source={require("../../../Assets/Images/LoginRegiImage.png")}
          ></Image>
        </View>
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <OnlyAccountButton
            onPress={() => navigation.navigate("AccountLogin")}
            navigation={navigation}
            text="로그인"
          />
          <OnlyAccountRegiButton
            onPress={() => navigation.navigate("RegiId")}
            navigation={navigation}
            text="회원가입"
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <SrchDupleButton
              text="김도원"
              onPress={() => navigation.navigate("DowonTestScreen")}
            />
            <SrchDupleButton text="정은유" onPress={handleButtonPress} />
            <SrchDupleButton
              text="류채현"
              onPress={() => navigation.navigate("RyuTestScreen")}
            />
          </View>
        </View>
        {modalVisible && (
          <TouchableWithoutFeedback onPress={handleCloseModal}>
            <View style={ModalStyle.overlay} />
          </TouchableWithoutFeedback>
        )}
      </BottomSheetModalProvider>
    </AccountBackground>
  );
};

const ModalStyle = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  editArea: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#DEDEDE",
  },
  delArea: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#DEDEDE",
  },
  closeArea: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // 모달 바깥 영역을 덮도록 설정
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default AccountLoginRegi;
