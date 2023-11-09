import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { sendApiData } from "./Api.config";
import { AxiosResponse } from "axios";
import { parseFreeData, FreeData } from "../../Utils/_private/ApiData/FreeData";
import { UserData } from "../../Utils/_private/ApiData/UserData";

/**
 * @jeakyoung 생성
 * 자유게시판 데이터 호출 서비스 함수
 * @param LOGIN_ID 사용자 아이디
 * @param MEMB_SC_CD 사용자 학과 코드
 * @param MEMB_DEP_CD 사용자 학부 코드
 * @param TIT_CD 사용자 직책 코드
 * @param LIST_UNIT_CNT 리스트 단위건수
 * @param REQ_PAGE 요청페이지정보
 * @returns Promise<FreeData | null>
 */
export const FreeBubListCall = async (
  REQ_PAGE: number
): Promise<FreeData | null> => {
  const endpoint = "/UNI/FreeBubListSvc";

  // 로그인한 사용자의 데이터 가져오기
  const userData = getUserData();

  if (userData !== null) {
    // userData가 null이 아닌 경우에만 요청 보내기
    const { LOGIN_ID, MEMB_DEP_CD, MEMB_SC_CD, TIT_CD } = userData;

    // 고정된 값으로 설정
    const LIST_UNIT_CNT = 10; // 한 페이지에 표시할 게시글 수

    const data = {
      LOGIN_ID, // 사용자 아이디
      MEMB_SC_CD, // 사용자 학과 코드
      MEMB_DEP_CD, // 사용자 학부 코드
      TIT_CD, // 사용자 직책 코드
      LIST_UNIT_CNT, // 한 페이지에 표시할 게시글 수
      REQ_PAGE, // 요청할 페이지 번호
    };

    try {
      // 서버에 자유게시판 데이터 요청을 보내고 응답을 기다립니다.
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        // 서버 응답이 성공적이면 데이터를 파싱합니다.
        const freeData: FreeData = parseFreeData(result.data);
        return freeData; // 파싱된 데이터를 반환합니다.
      } else {
        console.log("자유게시판 데이터 가져오기 실패");
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
 * @jeakyoung 생성
 * 자유게시판 답변 등록, 수정 삭제 데이터 호출 서비스 함수
 * @param LOGIN_ID 사용자 아이디
 * @param MEMB_SC_CD 사용자 학과 코드
 * @param MEMB_DEP_CD 사용자 학부 코드
 * @param TIT_CD 사용자 직책 코드
 * @param PROC_TYPE 처리구분
 * @param CRE_SEQ 게시 일련 번호
 * @param ANS_SEQ 답변 일련 번호
 * @param TIT   제목
 * @param CONT  내용
 * @returns Promise<FreeData | null>
 */
export const FreeAnsBubSvc = async (
  LOGIN_ID: string,
  MEMB_SC_CD: string,
  MEMB_DEP_CD: string,
  TIT_CD: string,
  PROC_TYPE: string,
  CRE_SEQ: number,
  ANS_SEQ: number,
  TIT: string,
  CONT: string
): Promise<FreeData | null> => {
  const endpoint = "/UNI/FreeAnsBubSvc";

  // 로그인한 사용자의 데이터 가져오기
  const userData = getUserData();

  if (userData !== null) {
    // userData가 null이 아닌 경우에만 요청 보내기

    const data = {
      LOGIN_ID, // 사용자 아이디
      MEMB_SC_CD, // 사용자 학과 코드
      MEMB_DEP_CD, // 사용자 학부 코드
      TIT_CD, // 사용자 직책 코드
      PROC_TYPE,
      CRE_SEQ,
      ANS_SEQ,
      TIT,
      CONT,
    };

    try {
      // 서버에 자유게시판 데이터 요청을 보내고 응답을 기다립니다.
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        // 서버 응답이 성공적이면 데이터를 파싱합니다.
        const freeData: FreeData = parseFreeData(result.data);
        return freeData; // 파싱된 데이터를 반환합니다.
      } else {
        console.log("자유게시판 답변 데이터 가져오기 실패");
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
 * @jeakyoung 생성
 * 자유게시판 데이터 등록 서비스 함수
 * PROC_TYPE 01
 */
export const FreeBubRegi = async (TIT: string, CONT: string) => {
  const endpoint = "/UNI/FreeBubSvc";
  const userData = getUserData();
  if (userData != null) {
    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;
    const PROC_TYPE = "01";
    const data = {
      LOGIN_ID,
      PROC_TYPE,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
      TIT,
      CONT,
    };

    const result: AxiosResponse<UserData, any> | null = await sendApiData(
      endpoint,
      data
    );

    if (result !== null && result.data.RSLT_CD === "00") {
      console.log("성공");
      return result;
    } else {
      console.log("실패");
      return result;
    }
  }
};

/* ------------------------------------------------------------------------------- */

/**
 * @jeakyoung 생성
 * 자유게시판 데이터 삭제 서비스 함수
 * PROC_TYPE 03
 */
export const FreeBubDel = async (CRE_SEQ: number) => {
  const endpoint = "/UNI/FreeBubSvc";
  const userData = getUserData();

  if (userData != null) {
    const { LOGIN_ID } = userData;
    const PROC_TYPE = "03";
    const data = {
      LOGIN_ID,
      PROC_TYPE,
      CRE_SEQ,
    };
    console.log(data);
    const result: AxiosResponse<UserData, any> | null = await sendApiData(
      endpoint,
      data
    );
    if (result !== null && result.data.RSLT_CD === "00") {
      console.log("성공");
      return result;
    } else {
      console.log("실패");
      return result;
    }
  }
};

/* ------------------------------------------------------------------------------- */

/**
 * @jeakyoung 생성
 * 자유게시판 데이터 수정 서비스 함수
 * PROC_TYPE 02
 */
export const FreeBubEd = async (CRE_SEQ: string, TIT: string, CONT: string) => {
  const endpoint = "/UNI/FreeBubSvc";
  const userData = getUserData();

  if (userData !== null) {
    const { LOGIN_ID, MEMB_DEP_CD, MEMB_SC_CD, TIT_CD } = userData;
    const PROC_TYPE = "02";
    const data = {
      LOGIN_ID,
      PROC_TYPE,
      CRE_SEQ,
      MEMB_DEP_CD,
      MEMB_SC_CD,
      TIT_CD,
      TIT,
      CONT,
    };
    const result: AxiosResponse<UserData, any> | null = await sendApiData(
      endpoint,
      data
    );

    if (result !== null && result.data.RSLT_CD === "00") {
      console.log("성공");
      return result;
    } else {
      console.log("실패");
      return result;
    }
  }
};

/* ------------------------------------------------------------------------------- */
