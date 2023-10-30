// ModalReuableFuction.js
import { useRef, useState, useCallback } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const ModalReuableFuction = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleEditPress = useCallback(() => {
    console.log("Edit button pressed");
  }, []);

  const handleDeletePress = useCallback(() => {
    console.log("닫기");
  }, []);

  const handleButtonPress = useCallback((dataToPass: any) => {
    console.log("Button pressed");
    setModalData(dataToPass); // 데이터 설정
    setModalVisible(true);
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
    bottomSheetModalRef.current?.close();
  }, []);

  return {
    bottomSheetModalRef,
    modalVisible,
    modalData, // 데이터 상태를 반환
    handleEditPress,
    handleDeletePress,
    handleButtonPress,
    handleCloseModal,
  };
};
