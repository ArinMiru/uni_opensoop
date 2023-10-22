import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { sendApiData } from "../_private/Api.config";
import { AxiosResponse } from "axios";
import { UserData } from "../../Utils/_private/ApiData/UserData";

export const SugAnsBubNew = async (CONT: string, CRE_SEQ: number) => {
  const endpoint = "/UNI/SugAnsBubSvc";
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
      CONT,
      CRE_SEQ,
    };
    console.log(data);

    const result: AxiosResponse<UserData, any> | null =
      await sendApiData(endpoint, data);

    if (result !== null && result.data.RSLT_CD === "00") {
      console.log("성공");
    } else {
      console.log("실패", result?.data);
    }
  }
};

/* ------------------------------------------------------------------------------- */

/**
 * @jeakyoung 생성
 * 자유게시판 데이터 삭제 서비스 함수
 * PROC_TYPE 03
 */
export const SugAnsBubDel = async (CRE_SEQ: number) => {
  const endpoint = "/UNI/SugAnsBubSvc";
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
    const result: AxiosResponse<UserData, any> | null =
      await sendApiData(endpoint, data);
    if (result !== null && result.data.RSLT_CD === "00") {
      console.log("성공");
    } else {
      console.log("실패");
    }
  }
};

/* ------------------------------------------------------------------------------- */

/**
 * @jeakyoung 생성
 * 자유게시판 데이터 수정 서비스 함수
 * PROC_TYPE 02
 */
export const SugAnsBubEd = async (
  CRE_SEQ: string,
  TIT: string,
  CONT: string
) => {
  const endpoint = "/UNI/SugAnsBubSvc";
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
    const result: AxiosResponse<UserData, any> | null =
      await sendApiData(endpoint, data);

    if (result !== null && result.data.RSLT_CD === "00") {
      console.log("성공");
    } else {
      console.log("실패");
    }
  }
};

/* ------------------------------------------------------------------------------- */
