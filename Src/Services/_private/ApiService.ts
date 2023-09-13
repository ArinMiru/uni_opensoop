import { sendLoginCredentials } from "./Api.config";

/**
 * 데이터를 서버로 전송하고 응답을 처리하는 함수
 * @param LOGIN_ID 데이터를 담아 전달
 * @param LOGIN_PASS 데이터를 담아 전달
 */
export async function fetchData(LOGIN_ID: string, LOGIN_PASS: string) {
  try {
    
    const userData = await sendLoginCredentials(LOGIN_ID, LOGIN_PASS);      // 1. 로그인 정보를 서버로 보내고, 서버로부터 UserData를 받습니다.
    if (userData) {                                                         // 2. UserData가 존재하는 경우, 서버에서 받은 UserData를 콘솔에 출력합니다.     
      console.log("서버에서 받은 UserData:", userData);                        // 3. UserData가 존재하지 않는 경우, 데이터를 가져오지 못했다고 에러를 출력합니다.
    } else {
      console.error("데이터를 가져오지 못했습니다.");
    }
  } catch (error) {                                                         // 4. 오류가 발생한 경우, 데이터 전송 중 오류가 발생했다고 에러를 출력합니다.
    console.error("데이터 전송 중 오류 발생:", error);
  }
}
