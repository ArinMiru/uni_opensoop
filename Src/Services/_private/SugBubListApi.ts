/**
 * 건의게시판
 * API 호출 함수 작성
 * 2023/10/06 장현빈 작성
 */
import { AxiosResponse } from "axios";
import { sendApiData } from "./Api.config";
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import {
  SugBubListData,
  parseSugBubListData,
} from "../../Utils/_private/ApiData/SugBubListData";
// 전역 스코프로 지정

/**
 * 건의게시판 조회 API 호출 함수
 * @param LOGIN_ID
 * @param MEMB_SC_CD
 * @param MEMB_DEP_CD
 * @param TIT_CD
 * @param LIST_UNIT_CNT
 * @param REQ_PAGE
 */

export const SugBubListSvc = async (
  REQ_PAGE: number
): Promise<SugBubListData | null> => {
  const userData = getUserData();
  const endpoint = "/UNI/SugBubListSvc";

  //로그인 사용자의 데이터 가져오기

  if (userData !== null) {
    const LIST_UNIT_CNT = 10; //한 페이지 안에 표시할 게시글 수
    const { LOGIN_ID, MEMB_DEP_CD, MEMB_SC_CD, TIT_CD } = userData;
    const data = {
      LOGIN_ID,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
      LIST_UNIT_CNT,
      REQ_PAGE,
    };

    try {
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        const subgBubListData: SugBubListData = parseSugBubListData(
          result.data
        );
        return subgBubListData;
      } else {
        console.log("건의게시판 데이터 가져오기 실패");
        return null;
      }
    } catch (error) {
      console.error("오류발생: ", error);
      return null;
    }
  } else {
    console.log("데이터를 가져올 수 없습니다.");
    return null;
  }
};

/** 등록 */
export const SugBubListNew = async (
  TIT: string,
  CONT: string,
  SEC_YN: string
): Promise<any | null> => {
  const userData = getUserData();
  const endpoint = "/UNI/SugBubSvc";

  if (userData !== null) {
    const { LOGIN_ID, MEMB_DEP_CD, MEMB_SC_CD, TIT_CD } = userData; // 필요한 속성 추출
    const PROC_TYPE = "01";
    const data = {
      LOGIN_ID,
      MEMB_DEP_CD,
      MEMB_SC_CD,
      TIT_CD,
      TIT,
      CONT,
      PROC_TYPE,
      SEC_YN,
    };

    console.log(data);

    try {
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        const subgBubListData: SugBubListData = parseSugBubListData(
          result.data
        );
        console.log(subgBubListData.RSLT_CD);
        return subgBubListData;
      } else {
        console.log("건의게시판 등록 실패");
        return result;
      }
    } catch (error) {
      console.error("오류발생: ", error);
      return "Error";
    }
  } else {
    console.log("데이터를 가져올 수 없습니다.");
    return "data missing";
  }
};

/** 수정 */
export const SugBubListUp = async (
  CRE_SEQ: number,
  TIT: string,
  CONT: string,
  SEC_YN: string
): Promise<SugBubListData | null> => {
  const userData = getUserData();
  const endpoint = "/UNI/SugBubSvc";

  //로그인 사용자의 데이터 가져오기

  if (userData !== null) {
    const { LOGIN_ID, MEMB_DEP_CD, MEMB_SC_CD, TIT_CD } = userData; // 필요한 속성 추출
    const PROC_TYPE = "02";
    const data = {
      LOGIN_ID,
      PROC_TYPE,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
      CRE_SEQ,
      TIT,
      CONT,
      SEC_YN,
    };

    try {
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        const subgBubListData: SugBubListData = parseSugBubListData(
          result.data
        );
        return subgBubListData;
      } else {
        console.log("건의게시판 등록 실패");
        return null;
      }
    } catch (error) {
      console.error("오류발생: ", error);
      return null;
    }
  } else {
    console.log("데이터를 가져올 수 없습니다.");
    return null;
  }
};

/** 삭제 */
export const SugBubListDel = async (
  CRE_SEQ: number
): Promise<SugBubListData | null> => {
  const userData = getUserData();
  const endpoint = "/UNI/SugBubSvc";

  //로그인 사용자의 데이터 가져오기

  if (userData !== null) {
    const PROC_TYPE = "03";
    const { LOGIN_ID, MEMB_DEP_CD, MEMB_SC_CD } = userData; // 필요한 속성 추출
    const data = {
      CRE_SEQ,
      LOGIN_ID,
      MEMB_DEP_CD,
      MEMB_SC_CD,
      PROC_TYPE,
    };

    try {
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        console.log("삭제 성공");
        return result.data;
      } else {
        return null;
      }
    } catch (error) {
      console.error("오류발생: ", error);
      return null;
    }
  } else {
    console.log("삭제 실패");
    return null;
  }
};
