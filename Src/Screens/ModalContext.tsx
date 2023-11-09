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
// useModal 커스텀 훅 안에서 setTabBarVisible 함수를 수정합니다.
export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  // context로부터 가져온 기존의 setTabBarVisible 함수를 래핑(wrapping)하여 로그를 출력하는 기능을 추가합니다.
  const setTabBarVisible = (
    visible: boolean | ((prevState: boolean) => boolean)
  ) => {
    console.log(`Tab Bar is now ${visible ? "visible" : "hidden"}.`); // 로그 출력
    context.setTabBarVisible(visible); // 실제 context의 setTabBarVisible 함수를 호출하여 상태를 업데이트합니다.
  };

  // 수정된 setTabBarVisible 함수와 나머지 context를 반환합니다.
  return {
    ...context,
    setTabBarVisible,
  };
};
