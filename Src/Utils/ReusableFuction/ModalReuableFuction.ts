// ModalReuableFuction.js
import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const ModalReuableFuction = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleEditPress = useCallback(() => {
    console.log("Edit button pressed");
  }, []);

  const handleDeletePress = useCallback(() => {
    console.log("닫기");
  }, []);

  const handleButtonPress = useCallback(() => {
    console.log("Button pressed");
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
    handleEditPress,
    handleDeletePress,
    handleButtonPress,
    handleCloseModal,
  };
};
