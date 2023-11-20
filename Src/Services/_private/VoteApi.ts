import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { sendApiData } from "./Api.config";
import {
  VoteData,
  parseVoteData,
  VoteItem,
} from "../../Utils/_private/ApiData/VoteData";
import {
  VoteStatData,
  parseVoteStatData,
} from "../../Utils/_private/ApiData/VoteStatData";
import { AxiosResponse } from "axios";
import { RSLT_TABLE } from "../../Utils/ReusableFuction/Reusable";

export const votBubListCall = async (): Promise<VoteData | null> => {
  const endpoint = "/UNI/VotBubListSvc";
  const userData = getUserData();

  if (userData !== null) {
    // userData가 null이 아닌 경우에만 요청 보내기

    // 고정된 값으로 설정
    const LIST_UNIT_CNT = 10; // 한 페이지에 표시할 수
    const REQ_PAGE = 1; // 요청할 페이지 번호
    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;
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
        const voteData: VoteData = parseVoteData(result.data);

        return voteData; // 파싱된 데이터를 반환합니다.
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
};

export const votBubListDetailupCall = async (
  selectedItems: number[],
  CRE_SEQ: number
): Promise<string | null> => {
  const endpoint = "/UNI/VotVotSvc";
  const userData = getUserData();

  if (userData !== null) {
    const { LOGIN_ID } = userData;
    const data = {
      LOGIN_ID,
      CRE_SEQ,
      VOT_SEQ: selectedItems.join(","),
    };

    try {
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      // 서버 응답 확인을 위한 로그 추가

      if (result !== null && result.data.RSLT_CD === "00") {
        return "정상적으로 투표되었습니다.";
      } else {
        return "투표 데이터가 정상적으로 전송되지 않았습니다.";
      }
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
};

export const votBubStatCall = async (
  CRE_SEQ: number
): Promise<VoteStatData | null> => {
  const endpoint = "/UNI/VotBubStatSvc";
  const data = { CRE_SEQ };

  try {
    const result: AxiosResponse<any, any> | null = await sendApiData(
      endpoint,
      data
    );

    if (result && result.data.RSLT_CD === "00") {
      const voteStatData: VoteStatData = parseVoteStatData(result.data);

      return voteStatData;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

/** PROC_TYPE 01 투표 등록 */
export const votBubRegi = async (
  VOT_TITLE: string,
  VOT_TYPE_CD: string,
  VOT_EXPR_DATE: string,
  VOT_DESC: string,
  VOT_INFO: string[]
) => {
  const endpoint = "/UNI/VotBubSvc";
  const userData = getUserData();

  if (userData !== null) {
    const PROC_TYPE = "01";
    const { LOGIN_ID, MEMB_DEP_CD, MEMB_SC_CD, TIT_CD } = userData;
    const VOT_CRE_DATE = new Date().toISOString().slice(0, 10);
    const data = {
      LOGIN_ID,
      PROC_TYPE,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
      VOT_TITLE,
      VOT_TYPE_CD,
      VOT_CRE_DATE,
      VOT_EXPR_DATE,
      VOT_DESC,
      VOT_INFO,
    };

    const result: AxiosResponse<any, any> | null = await sendApiData(
      endpoint,
      data
    );
    if (result !== null && result.data.RSLT_CD === "00") {
      return result;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

/** PROC_TYPE : 02 수정 */
export const votBubEditCall = async (
  voteItem: VoteItem
): Promise<string | null> => {
  const endpoint = "/UNI/VotBubSvc";
  const userData = getUserData();

  if (userData !== null) {
    const {
      VOTE_TITLE,
      VOT_TYPE_CD,
      VOT_GO_CD,
      VOT_EXPR_DATE,
      VOT_DESC,
      VOT_INFO,
    } = voteItem;
    const data = {
      LOGIN_ID: userData.LOGIN_ID,
      PROC_TYPE: "02",
      MEMB_SC_CD: userData.MEMB_SC_CD,
      MEMB_DEP_CD: userData.MEMB_DEP_CD,
      TIT_CD: userData.TIT_CD,
      VOTE_TITLE,
      VOT_TYPE_CD,
      VOT_GO_CD,
      VOT_CRE_DATE: new Date().toISOString().slice(0, 10),
      VOT_EXPR_DATE,
      VOT_DESC,
      VOT_INFO,
    };

    try {
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        return result.data;
      } else {
        return result?.data;
      }
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
};

/** PROC_TYPE : 03 삭제 */
export const votBubDeleteCall = async (CRE_SEQ: number) => {
  const userData = getUserData();
  const endpoint = "/UNI/VotBubSvc";
  if (userData !== null) {
    const PROC_TYPE = "03";
    const { LOGIN_ID } = userData;
    const data = {
      CRE_SEQ,
      LOGIN_ID,
      PROC_TYPE,
    };

    const result: AxiosResponse<RSLT_TABLE, any> | null = await sendApiData(
      endpoint,
      data
    );
    if (result !== null && result.data.RSLT_CD === "00") {
      return result.data;
    } else {
      return null;
    }
  }
};
