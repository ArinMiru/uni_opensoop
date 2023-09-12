import axios, { AxiosResponse } from "axios";
import { UserData } from "../Utils/ApiData/UserData";

const SERVER_URL = "http://138.2.50.90:9000";                                   // 서버 API 주소

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,                                                                // 요청 제한 시간 (5초)
});

/**
 * 로그인 호출 함수
 * @param endpoint 엔드포인트
 * @param data 로그인 데이터
 */
export const sendLoginCredentials = async (
  endpoint: string,                                                             // API 엔드포인트 URL
  data: any                                                                     // 로그인 데이터. 여기서는 'any'를 사용하여 모든 데이터 유형을 허용하도록 했습니다.
): Promise<AxiosResponse<UserData> | null> => {
  try {                                                                 
    const response: AxiosResponse<UserData> = await axiosInstance.post(         // 서버로 POST 요청을 보냅니다.
      endpoint,                                                                 // 요청 보낼 엔드포인트 URL
      data                                                                      // 요청 데이터
    );

    // 서버 응답 상태 코드가 200이면 성공적으로 응답을 받았습니다.
    if (response.status === 200) {
      return response;                                                          // 성공하든 실패하든 응답을 그대로 반환합니다.
    } else {
      return null;                                                              // 서버 응답 상태 코드가 200이 아니면 null을 반환하여 실패를 나타냅니다.
    }
  } catch (error) {
    return null;                                                                // 요청에 실패하면 null을 반환하여 실패를 나타냅니다.
  }
};
