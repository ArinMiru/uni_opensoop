import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainerWrapper } from "./Src/Navigations/NavigationContainer";
import { loadCustomFonts } from "./Src/Utils/FontLoader";
import { checkStoredJWTToken } from "./Src/Utils/_private/.secure/.autoLogin"; // JWT 생성 테스트 위함
import { hashUserPassword } from "./Src/Utils/_private/.secure/.PassBcryHasing"; // 해싱 테스트 위함

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false); // 폰트 로딩 상태를 저장할 상태 변수

  useEffect(() => {
    // 앱 초기화 함수
    async function initializeApp() {
      await loadCustomFonts(); // 커스텀 폰트 로딩
      setIsFontLoaded(true); // 폰트 로딩 완료 상태로 설정
      checkStoredJWTToken(); // JWT 생성 테스트 위함
    }
    initializeApp(); // 앱 초기화 함수 호출
  }, []); // useEffect를 한 번만 실행하도록 설정 (빈 배열을 의미)

  return <NavigationContainerWrapper />;
}
