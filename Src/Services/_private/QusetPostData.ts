import { sendLoginCredentials } from "./Api.config";
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { AxiosResponse } from "axios";
import {
  QuestData,
  parseQuestData,
} from "../../Utils/_private/ApiData/QuestData";
import { UserData } from "../../Utils/_private/ApiData/UserData";

/**
 * 질문게시판
 * API 호출 함수 파일 이동
 * 23/10/9 14:31 최서은 @holly1017 생성
 */

/**
 * 질문게시판 조회 API 호출 함수
 * @param MEMB_ID
 * @param MEMB_SC_CD
 * @param MEMB_DEP_CD
 * @param TIT_CD
 * @param LIST_UNIT_CNT
 * @param REQ_PAGE
 */
export const QuesBubListSvc = async (
  MEMB_ID: string,
  MEMB_SC_CD: string,
  MEMB_DEP_CD: string,
  TIT_CD: string
): Promise<QuestData | null> => {
  const endpoint = "/UNI/QuesBubListSvc";
  // 고정된 값으로 설정
  const LIST_UNIT_CNT = 20; // 한 페이지에 표시할 게시글 수
  const REQ_PAGE = 1; // 요청할 페이지 번호
  const data = {
    MEMB_ID,
    MEMB_SC_CD,
    MEMB_DEP_CD,
    TIT_CD,
    LIST_UNIT_CNT,
    REQ_PAGE,
  };

  //로그인 사용자의 데이터 가져오기
  const userData = getUserData();

  if (userData !== null) {
    // userData가 null이 아닌 경우에만 요청 보내기

    try {
      // 서버에 공지사항 데이터 요청을 보내고 응답을 기다립니다.
      const result: AxiosResponse<any, any> | null = await sendLoginCredentials(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        // 서버 응답이 성공적이면 데이터를 파싱합니다.
        const questData: QuestData = parseQuestData(result.data);
        return questData; // 파싱된 데이터를 반환합니다.
      } else {
        console.log("질문게시판 조회 성공");
        return null;
      }
    } catch (error) {
      console.error("질문게시판 조회 중 오류 발생:", error);
      return null;
    }
  } else {
    console.log("질문게시판 조회 실패");
    return null;
  }
};
export const QuesBubSvcNew = async (TIT: string, CONT: string) => {
  const userData = getUserData();
  const endpoint = "/UNI/QuesBubSvc";
  if (userData !== null) {
    const PROC_TYPE = "01";
    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;
    const data = {
      TIT,
      CONT,
      LOGIN_ID,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
      PROC_TYPE,
    };
    console.log(data);
    const result: AxiosResponse<UserData, any> | null =
      await sendLoginCredentials(endpoint, data);
    if (result !== null && result.data.RSLT_CD === "00") {
      // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
      console.log("등록 성공");
    } else {
      console.log("등록 실패");
    }
  }
};
export const QuesBubSvcUp = async (
  CRE_SEQ: number,
  TIT: string,
  CONT: string
) => {
  const userData = getUserData();
  const endpoint = "/UNI/QuesBubSvc";
  if (userData !== null) {
    const PROC_TYPE = "02";
    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;
    const data = {
      CRE_SEQ,
      TIT,
      CONT,
      LOGIN_ID,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
      PROC_TYPE,
    };
    console.log(data);
    const result: AxiosResponse<UserData, any> | null =
      await sendLoginCredentials(endpoint, data);
    if (result !== null && result.data.RSLT_CD === "00") {
      // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
      console.log("등록 성공");
    } else {
      console.log("등록 실패");
    }
  }
};
export const QuesBubSvcDel = async (CRE_SEQ: number) => {
  const userData = getUserData();
  const endpoint = "/UNI/QuesBubSvc";
  if (userData !== null) {
    const PROC_TYPE = "03";
    const { LOGIN_ID } = userData;
    const data = {
      CRE_SEQ,
      LOGIN_ID,
      PROC_TYPE,
    };
    console.log(data);
    const result: AxiosResponse<UserData, any> | null =
      await sendLoginCredentials(endpoint, data);
    if (result !== null && result.data.RSLT_CD === "00") {
      // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
      console.log("등록 성공");
    } else {
      console.log("등록 실패");
    }
  }
};
