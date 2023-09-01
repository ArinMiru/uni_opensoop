import axios, { AxiosResponse } from "axios";

const SERVER_URL = "http://138.2.50.90:9000";                           // 서버 API 주소
                                                             
const axiosInstance = axios.create({                                    // Axios 인스턴스 생성
  baseURL: SERVER_URL,
  timeout: 5000,                                                        // 요청 제한 시간 (5초)
});

export const serverConnection = async (): Promise<string> => {          // 서버와의 통신 함수 생성
  try {                                                                     
    const response: AxiosResponse = await axiosInstance.get("/");       // 서버에 GET 요청 시도
    if (response.status === 200) {
      return "연결 성공";                                                 // 서버와 연결 성공한 경우
    } else {
      return `Server responded with status: ${response.status}`;        // 서버와 연결 실패한 경우
    }
  } catch (error) {                                                     // ERROR 발생
    if (typeof error === "string") {
      return `Error connecting to the server: ${error}`;                // 문자열 형태의 에러인 경우
    } else {
      return `Error connecting to the server: ${(error as Error).message}`;   //문자열이 아닌 다른 형태의 에러인 경우
    }
  }
};
