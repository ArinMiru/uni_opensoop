import { sendLoginCredentials } from "./Api.config";
import { setUserData } from "../../Utils/_private/ApiData/UserData";
import { AxiosResponse } from "axios";
import { UserData } from "../../Utils/_private/ApiData/UserData";
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import {
  parseNoticeData,
  NoticeData,
} from "../../Utils/_private/ApiData/NoticeData";
import { RegiDataType } from "../../Utils/_private/RegiData/RegiUserData";
import { SchlSrchData, parseSchlSrchData } from "../../Utils/_private/RegiData/SchlSrchData";

/* ------------------------------------------------------------------------------- */

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

/* ------------------------------------------------------------------------------- */

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
/**
 * ID 중복체크 API 호출 함수
 * @param MEMB_ID
 */
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

/* ------------------------------------------------------------------------------- */

/**
 * 닉네임 중복체크 API 호출 함수
 * @param NICK_NM
 */
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

/* ------------------------------------------------------------------------------- */

/**
 * 공지사항 데이터 호출 서비스 함수
 * @param LOGIN_ID 사용자 아이디
 * @param MEMB_SC_CD 사용자 학과 코드
 * @param MEMB_DEP_CD 사용자 학부 코드
 * @param TIT_CD 사용자 직책 코드
 * @returns Promise<NoticeData | null>
 */
export const noticeCall = async (
  LOGIN_ID: string,
  MEMB_SC_CD: string,
  MEMB_DEP_CD: string,
  TIT_CD: string
): Promise<NoticeData | null> => {
  const endpoint = "/UNI/OpenBubListSvc";

  // 로그인한 사용자의 데이터 가져오기
  const userData = getUserData();

  if (userData !== null) {
    // userData가 null이 아닌 경우에만 요청 보내기

    // 고정된 값으로 설정
    const LIST_UNIT_CNT = 10; // 한 페이지에 표시할 공지사항 수
    const REQ_PAGE = 1; // 요청할 페이지 번호

    const data = {
      LOGIN_ID, // 사용자 아이디
      MEMB_SC_CD, // 사용자 학과 코드
      MEMB_DEP_CD, // 사용자 학부 코드
      TIT_CD, // 사용자 직책 코드
      LIST_UNIT_CNT, // 한 페이지에 표시할 공지사항 수
      REQ_PAGE, // 요청할 페이지 번호
    };

    try {
      // 서버에 공지사항 데이터 요청을 보내고 응답을 기다립니다.
      const result: AxiosResponse<any, any> | null = await sendLoginCredentials(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        // 서버 응답이 성공적이면 데이터를 파싱합니다.
        const noticeData: NoticeData = parseNoticeData(result.data);
        return noticeData; // 파싱된 데이터를 반환합니다.
      } else {
        console.log("공지사항 데이터 가져오기 실패");
        return null;
      }
    } catch (error) {
      console.error("오류 발생:", error);
      return null;
    }
  } else {
    console.log("데이터를 가져올 수 없습니다.");
    return null;
  }
};

/* ------------------------------------------------------------------------------- */

/**
 * 대학교명 데이터 호출 서비스 함수
 * @param SCH_CD 대학교 코드
 * @param SCH_NM 대학교 이름
 * @returns Promise<SchlSrchData | null>
 */
export const SchlSrchCall = async (
  SCH_NM: string,
): Promise<SchlSrchData | null> => {
  const endpoint = "/UNI/SchlSrch";


    const data = {
      SCH_NM, // 대학교 이름
    };

    try {
      // 서버에 대학교명 데이터 요청을 보내고 응답을 기다립니다.
      const result: AxiosResponse<any, any> | null = await sendLoginCredentials(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        // 서버 응답이 성공적이면 데이터를 파싱합니다.
        const schlsrchdata: SchlSrchData = parseSchlSrchData(result.data);
        console.log(result.data)
        return schlsrchdata; // 파싱된 데이터를 반환합니다.
      } else {
        console.log("대학교명이 존재하지 않습니다.");
        return null;
      }
    } catch (error) {
      console.error("오류 발생:", error);
      return null;
    }
  };

/* ------------------------------------------------------------------------------- */