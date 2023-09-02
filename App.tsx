import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { fetchData } from "./Src/Services/ApiService";
import { NavigationContainerWrapper } from "./Src/Navigations/NavigationContainer";
import { loadCustomFonts } from "./Src/Utils/FontLoader";

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);                          // 폰트 로딩 상태를 저장할 상태 변수

  useEffect(() => {                                                                 // 앱 초기화 함수
    async function initializeApp() {
      await loadCustomFonts();                                                      // 커스텀 폰트 로딩
      setIsFontLoaded(true);                                                        // 폰트 로딩 완료 상태로 설정
      fetchData();                                                                  // 데이터 가져오기 (폰트 로드와는 별개로 처리)
    }
    initializeApp();                                                                // 앱 초기화 함수 호출
  }, []);                                                                           // useEffect를 한 번만 실행하도록 설정 (빈 배열을 의미)

  
  return isFontLoaded ? (                                                           // 폰트 로딩이 완료되면 내비게이션 컨테이너 컴포넌트를 렌더링
    <NavigationContainerWrapper />
  ) : (
                                                                                    //폰트 로딩 중에는 로딩 텍스트를 표시  
    <View>                                                                       
      <Text>Loading...</Text>                                                     
    </View>
  );
}
