import { sendLoginCredentials } from "./Api.config"; 
import { setUserData } from "../Utils/ApiData/UserData"; 
import { AxiosResponse } from "axios"; 
import { UserData } from "../Utils/ApiData/UserData"; 

/**
 * 로그인 서비스 함수
 * @param LOGIN_ID 사용자 아이디
 * @param LOGIN_PASS 사용자 비밀번호
 */
export const loginUser = async (LOGIN_ID: string, LOGIN_PASS: string) => {
    const endpoint = "/UNI/LoginSvc";                                       // 로그인 엔드포인트 URL
    const data = {
      LOGIN_ID,                                                             // 로그인 사용자 아이디
      LOGIN_PASS,                                                           // 로그인 사용자 비밀번호
    };
    const result: AxiosResponse<UserData, any> | null = await sendLoginCredentials(endpoint, data); // 로그인 시도 및 서버 응답 저장
  
    if (result !== null && result.data.RSLT_CD === "00") { // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
      // 로그인 성공 시의 처리
      // userData 객체에 데이터 저장
      setUserData(result.data); // 서버에서 받은 데이터로 userData 객체 설정
    } else {
      console.log("로그인 실패");
    }
};

/**
 * 회원가입 서비스 함수
 * @param MEMB_ID 사용자 아이디
 * @param MEMB_PASS 사용자 비밀번호
 * @param MEMB_NM 사용자 이름
 * 아직 완전하게 구현하지 않았음
 */
export const registerUser = async (
  MEMB_ID: string,                                              // 사용자 회원가입 아이디
  MEMB_PASS: string,                                            // 사용자 회원가입 비밀번호
  MEMB_NM: string                                               // 사용자 회원가입 이름
) => {
  const endpoint = "/MembRegSvc";                               // 회원가입 엔드포인트 URL
  const data = {
    MEMB_ID, 
    MEMB_PASS, 
    MEMB_NM, 
  };
  const result = await sendLoginCredentials(endpoint, data); // 회원가입 시도 및 서버 응답 저장

  // 서버 응답(result)에 대한 처리
  return result; // 서버 응답을 반환합니다.
};
