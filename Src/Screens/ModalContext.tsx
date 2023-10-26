import React, { createContext, useState, useContext, ReactNode } from "react";

type ModalContextType = {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isTabBarVisible: boolean;
  setTabBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultModalContext: ModalContextType = {
  isModalVisible: false,
  setIsModalVisible: () => {},
  isTabBarVisible: true,
  setTabBarVisible: () => {},
};

// Modal Context 생성
export const ModalContext =
  createContext<ModalContextType>(defaultModalContext);

type ModalProviderProps = {
  children: ReactNode;
};

// Provider 컴포넌트 생성
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTabBarVisible, setTabBarVisible] = useState(true);

  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        isTabBarVisible,
        setTabBarVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Custom Hook 생성
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
