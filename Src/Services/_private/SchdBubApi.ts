import { AxiosResponse } from "axios";
import {
  SchdBubData,
  parseSchdBubData,
} from "../../Utils/_private/ApiData/SchdBubData";
import { UserData, getUserData } from "../../Utils/_private/ApiData/UserData";
import { sendApiData } from "./Api.config";
import { SchdBubDtlListData, parseSchdbubDtlListData } from "../../Utils/_private/ApiData/SchdBubDtlListSvc";

export const SchdBubListSvc = async (): Promise<SchdBubData | null> => {
  const endpoint = "/UNI/SchdBubListSvc";
  const userData = getUserData();

  if (userData !== null) {
    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;
    const data = {
      LOGIN_ID,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
    };
    try {
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        const SchdBubData: SchdBubData = parseSchdBubData(result.data);
        return SchdBubData;
      } else {
        console.log("일정 데이터 가져오기 실패");
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

export const SchdBubDtlListSvc = async ( SEARCH_DATE : string ) : Promise<SchdBubDtlListData | null> => {
  const endpoint = "/UNI/SchdBubDtlListSvc";
  const userData = getUserData();

  if (userData !== null ) {
    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;
    const data = {
      LOGIN_ID,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
      SEARCH_DATE,
    };
    try {
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00" ) {
        const SchdBubDtlListData: SchdBubDtlListData = parseSchdbubDtlListData(result.data);
        return SchdBubDtlListData;
      } else {
        console.log("일정 상세 데이터 가져오기 실패");
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

export const schdBubSvcNew = async (TIT: string, CONT: string) => {
  const userData = getUserData();
  const endpoint = "/UNI/SchdBubSvc";
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
    const result: AxiosResponse<UserData, any> | null = await sendApiData(
      endpoint,
      data
    );
    if (result !== null && result.data.RSLT_CD === "00") {
      console.log("등록 성공");
    } else{
      console.log("등록 실패");
    }
  }
};

export const schdBubSvcUp = async (
  CRE_SEQ: number,
  TIT: string,
  CONT: string
) => {
  const userData = getUserData();
  const endpoint = "/UNI/SchdBubSvc";
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
    const result: AxiosResponse<UserData, any> | null = await sendApiData(
      endpoint,
      data
    );
    if (result !== null && result.data.RSLT_CD === "00") {
      console.log("수정 성공");
    } else {
      console.log("수정 실패");
    }
  }
};

export const schdBubSvcDel = async (CRE_SEQ: number) => {
  const userData = getUserData();
  const endpoint = "/UNI/SchdBubSvc";
  if (userData !== null) {
    const PROC_TYPE = "03";
    const { LOGIN_ID } = userData;
    const data = {
      CRE_SEQ,
      LOGIN_ID,
      PROC_TYPE,
    };
    console.log(data);
    const result: AxiosResponse<UserData, any> | null = await sendApiData(
      endpoint,
      data
    );
    if (result !== null && result.data.RSLT_CD === "00") {
      console.log("삭제 성공");
    } else {
      console.log("삭제 실패");
    }
  }
};