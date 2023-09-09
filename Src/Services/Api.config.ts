import axios, { AxiosResponse } from "axios";
import { UserData } from "../Utils/ApiData/UserData";
import { setUserData } from "../Utils/ApiData/UserData";

const SERVER_URL = "http://138.2.50.90:9000"; // 서버 API 주소

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000, // 요청 제한 시간 (5초)
});

export const sendLoginCredentials = async (
  LOGIN_ID: string,
  LOGIN_PASS: string
): Promise<UserData | null> => {
  try {
    const response: AxiosResponse<UserData> = await axiosInstance.post(
      "/UNI/LoginSvc",
      {
        LOGIN_ID,
        LOGIN_PASS,
      }
    );

    if (response.status === 200) {
      // 서버에서 받은 JSON 데이터를 UserData 타입으로 파싱
      const userData: UserData = response.data;

      if (userData.RSLT_CD === "00") {
        // RSLT_CD가 "00"이면 UserData.ts 파일에 저장
        setUserData(userData);
        return userData;
      } else {
        // RSLT_CD가 "00"이 아니면 데이터를 파싱하지 않고 null 반환
        return null;
      }
    } else {
      return null; // 또는 에러 처리 방법에 따라 다른 값 반환
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return null; // 또는 에러 처리 방법에 따라 다른 값 반환
    } else if (axios.isAxiosError(error)) {
      return null; // 또는 에러 처리 방법에 따라 다른 값 반환
    } else {
      return null; // 또는 에러 처리 방법에 따라 다른 값 반환
    }
  }
};
