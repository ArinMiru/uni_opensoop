import axios, { AxiosResponse, AxiosError } from "axios";
import { UserData } from "../Utils/ApiData/UserData";
import { setUserData } from "../Utils/ApiData/UserData";

const SERVER_URL = "http://138.2.50.90:9000"; // 서버 API 주소

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000, // 요청 제한 시간 (5초)
});

/**
 * 로그인 호출 함수
 * @param LOGIN_ID 
 * @param LOGIN_PASS 
 */
export const sendLoginCredentials = async (
  LOGIN_ID: string,                           // 타입 명시
  LOGIN_PASS: string,                         // 타입 명시
): Promise<UserData | null> => {
  try {                                                                   // 1. 서버에 로그인 정보를 보내고 응답을 받습니다.
    const response: AxiosResponse<UserData> = await axiosInstance.post(   // 엔드 포인트 설정 
      "/UNI/LoginSvc",
      {
        LOGIN_ID,
        LOGIN_PASS,
      }
    );

    if (response.status === 200) {                          // 2. 서버에서 받은 JSON 데이터를 UserData 타입으로 파싱
      const userData: UserData = response.data;

      if (userData.RSLT_CD === "00") {                      // 3. RSLT_CD가 "00"이면 UserData.ts 파일에 저장
        setUserData(userData);
        return userData;
      } else {                                              // 4. RSLT_CD가 "00"이 아니면 데이터를 파싱하지 않고 null 반환
        return null;
      }
    } else {                                                // 5. 서버 응답이 200이 아니면 null 반환 또는 에러 처리 방법에 따라 다른 값 반환
      return null;
    }
  } catch (error) {
    // 6. AxiosError 타입을 사용하여 Axios에서 발생한 에러를 처리합니다.
    if (axios.isAxiosError(error)) {
      // 7. 에러가 AxiosError 타입인 경우 null 반환 또는 에러 처리 방법에 따라 다른 값 반환
      return null;
    } else if (axios.isAxiosError(error)) {
      // 8. 에러가 AxiosError 타입인 경우 null 반환 또는 에러 처리 방법에 따라 다른 값 반환
      return null;
    } else {
      // 9. 그 외의 에러 처리 방법에 따라 다른 값 반환
      return null;
    }
  }
};
