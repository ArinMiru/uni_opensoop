import { sendLoginCredentials } from "./Api.config";
import { setUserData } from "../../Utils/_private/ApiData/UserData";
import { AxiosResponse } from "axios";
import { UserData } from "../../Utils/_private/ApiData/UserData";
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import {
  parseNoticeData,
  NoticeData,
} from "../../Utils/_private/ApiData/.NoticeData"; // NoticeData 파일 경로를 수정하세요.
import { RegiDataType } from "../../Utils/_private/RegiData/RegiUserData";

/**
 * 로그인 서비스 함수
 * @param LOGIN_ID 사용자 아이디
 * @param LOGIN_PASS 사용자 비밀번호
 */
export const loginUser = async (LOGIN_ID: string, LOGIN_PASS: string) => {
  const endpoint = "/UNI/LoginSvc"; // 로그인 엔드포인트 URL
  const data = {
    LOGIN_ID, // 로그인 사용자 아이디
    LOGIN_PASS, // 로그인 사용자 비밀번호
  };
  const result: AxiosResponse<UserData, any> | null =
    await sendLoginCredentials(endpoint, data); // 로그인 시도 및 서버 응답 저장

  if (result !== null && result.data.RSLT_CD === "00") {
    // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
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
export const registerUser = async (data: RegiDataType) => {
  const endpoint = "/UNI/MembRegSvc"; // 회원가입 엔드포인트 URL

  const result = await sendLoginCredentials(endpoint, data); // 회원가입 시도 및 서버 응답 저장

  // 서버 응답(result)에 대한 처리
  return result; // 서버 응답을 반환합니다.
};

export const idCheckpoint = async (MEMB_ID: string) => {
  const endpoint = "/UNI/MembIdChkSvc";
  const data = {
    MEMB_ID,
  };
  const result: AxiosResponse<UserData, any> | null =
    await sendLoginCredentials(endpoint, data);
  if (result !== null && result.data.RSLT_CD === "00") {
    // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
    console.log("사용할 수 있는 아이디 입니다.");
  } else {
    console.log("중복된 아이디 입니다.");
  }
};

export const nickCheckpoint = async (NICK_NM: string) => {
  const endpoint = "/UNI/MembNicChkSvc";
  const data = {
    NICK_NM,
  };
  const result: AxiosResponse<UserData, any> | null =
    await sendLoginCredentials(endpoint, data);
  if (result !== null && result.data.RSLT_CD == "00") {
    console.log("사용할 수 있는 닉네임 입니다.");
  } else {
    console.log("중복된 닉네임 입니다.");
  }
};

export const noticeCall = async (
  LOGIN_ID: string,
  MEMB_SC_CD: string,
  MEMB_DEP_CD: string,
  TIT_CD: string
) => {
  const endpoint = "/UNI/OpenBubListSvc";

  // 로그인한 사용자의 데이터 가져오기
  const userData = getUserData();

  if (userData !== null) {
    // userData가 null이 아닌 경우에만 요청 보내기

    // 고정된 값으로 설정
    const LIST_UNIT_CNT = 10;
    const REQ_PAGE = 1;

    const data = {
      LOGIN_ID,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
      LIST_UNIT_CNT,
      REQ_PAGE,
    };

    try {
      const result: AxiosResponse<any, any> | null = await sendLoginCredentials(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        // 데이터 파싱
        const noticeData: NoticeData = parseNoticeData(result.data);
        console.log(noticeData.OPEN_BUB);
      } else {
        console.log("실패");
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  } else {
    console.log("데이터를 가져올 수 없습니다.");
  }
};
