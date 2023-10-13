import { useRef, useState, useMemo, useCallback } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const ModalReuableFuction = () => {
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
    snapPoints,
    handleEditPress,
    handleDeletePress,
    handleButtonPress,
    handleCloseModal,
  };
};
