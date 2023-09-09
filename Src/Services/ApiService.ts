import { sendLoginCredentials } from "./Api.config";

export async function fetchData(LOGIN_ID: string, LOGIN_PASS: string) {
  try {
    const userData = await sendLoginCredentials(LOGIN_ID, LOGIN_PASS);

    if (userData) {
      console.log("서버에서 받은 UserData:", userData);
    } else {
      console.error("데이터를 가져오지 못했습니다.");
    }
  } catch (error) {
    console.error("데이터 전송 중 오류 발생:", error);
  }
}