import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { sendApiData } from "./Api.config";
import {
  NoticeData,
  parseNoticeData,
} from "../../Utils/_private/ApiData/NoticeData";
import { AxiosResponse } from "axios";
import { UserData } from "../../Utils/_private/ApiData/UserData";

// 로그인한 사용자의 데이터 가져오기

export const openBubListCall = async (
  REQ_PAGE: number
): Promise<NoticeData | null> => {
  const endpoint = "/UNI/OpenBubListSvc";
  const userData = getUserData();
  if (userData !== null) {
    // userData가 null이 아닌 경우에만 요청 보내기
    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;

    // 고정된 값으로 설정
    const LIST_UNIT_CNT = 10; // 한 페이지에 표시할 공지사항 수

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
      const result: AxiosResponse<any, any> | null = await sendApiData(
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
/**
 * 공지사항 게시글 등록 함수
 * @param LOGIN_ID
 * @param MEMB_DEP_CD
 * @param MEMB_SC_CD
 * @param TIT_CD
 * @param TIT
 * @param CONT
 * @param IMAGE_INFO
 * @param CRE_SEQ
 */
export const openBubSvcNew = async (
  TIT: string,
  CONT: string,
  IMAGE_INFO: ImageInfo[]
) => {
  const endpoint = "/UNI/OpenBubSvc";
  const userData = getUserData();
  if (userData !== null) {
    const { LOGIN_ID, MEMB_DEP_CD, MEMB_SC_CD, TIT_CD } = userData;
    const PROC_TYPE = "01";
    const data = {
      LOGIN_ID,
      MEMB_DEP_CD,
      MEMB_SC_CD,
      TIT_CD,
      TIT,
      CONT,
      IMAGE_INFO,
      PROC_TYPE,
    };
    console.log(data);
    const result: AxiosResponse<UserData, any> | null = await sendApiData(
      endpoint,
      data
    );

    if (result !== null && result.data.RSLT_CD === "00") {
      console.log("성공");
    } else {
      console.log("실패");
    }
  }
};
/**
 * 공지사항 수정 함수
 * @param LOGIN_ID
 * @param MEMB_DEP_CD
 * @param MEMB_SC_CD
 * @param TIT_CD
 * @param TIT
 * @param CONT
 * @param IMAGE_INFO
 * @param CRE_SEQ
 */
export const openBubSvcUpdate = async (
  TIT: string,
  CONT: string,
  IMAGE_INFO: ImageInfo[],
  CRE_SEQ: number
) => {
  const userData = getUserData();
  if (userData !== null) {
    const { LOGIN_ID, MEMB_DEP_CD, MEMB_SC_CD, TIT_CD } = userData;
    const endpoint = "/UNI/OpenBubSvc";
    const data = {
      LOGIN_ID,
      MEMB_DEP_CD,
      MEMB_SC_CD,
      TIT_CD,
      TIT,
      CONT,
      IMAGE_INFO,
      CRE_SEQ,
      PROC_TYPE: "02",
    };
    console.log(data);
    const result: AxiosResponse<UserData, any> | null = await sendApiData(
      endpoint,
      data
    );

    if (result !== null && result.data.RSLT_CD === "00") {
      console.log("성공");
    } else {
      console.log("실패");
      console.log(result?.data);
    }
  }
};
/**
 * 공지사항 삭제 함수
 * @param LOGIN_ID
 * @param MEMB_DEP_CD
 * @param MEMB_SC_CD
 * @param CRE_SEQ
 */
export const openBubListDell = async (
  CRE_SEQ: number
): Promise<NoticeData | null> => {
  const endpoint = "/UNI/OpenBubSvc";
  const userData = getUserData();

  if (userData !== null) {
    // userData가 null이 아닌 경우에만 요청 보내기

    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;
    const PROC_TYPE = "03";
    const data = {
      LOGIN_ID, // 사용자 아이디
      MEMB_SC_CD, // 사용자 학과 코드
      MEMB_DEP_CD, // 사용자 학부 코드
      TIT_CD, // 사용자 직책 코드
      PROC_TYPE,
      CRE_SEQ,
    };
    console.log(data);

    try {
      // 서버에 공지사항 데이터 요청을 보내고 응답을 기다립니다.
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        // 서버 응답이 성공적이면 데이터를 파싱합니다.
        const noticeData: NoticeData = parseNoticeData(result.data);
        console.log(noticeData.RSLT_CD);
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
