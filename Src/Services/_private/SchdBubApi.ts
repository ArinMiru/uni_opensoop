import { AxiosResponse } from "axios";
import {
  SchdBubData,
  parseSchdBubData,
} from "../../Utils/_private/ApiData/SchdBubData";
import { UserData, getUserData } from "../../Utils/_private/ApiData/UserData";
import { sendApiData } from "./Api.config";
import {
  SchdBubDtlListData,
  parseSchdbubDtlListData,
} from "../../Utils/_private/ApiData/SchdBubDtlListSvc";
import { RSLT_TABLE } from "../../Utils/ReusableFuction/Reusable";

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
     
        return null;
      }
    } catch (error) {
   
      return null;
    }
  } else {
 
    return null;
  }
};

export const SchdBubDtlListSvc = async (
  SEARCH_DATE: string
): Promise<SchdBubDtlListData | null> => {
  const endpoint = "/UNI/SchdBubDtlListSvc";
  const userData = getUserData();

  if (userData !== null) {
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

      if (result !== null && result.data.RSLT_CD === "00") {
        const SchdBubDtlListData: SchdBubDtlListData = parseSchdbubDtlListData(
          result.data
        );
  
        return SchdBubDtlListData;
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

export const schdBubSvcNew = async (
  TIT: string,
  STRT_SCHD_YMD: string,
  END_SCHD_YMD: string
) => {
  const userData = getUserData();
  const endpoint = "/UNI/SchdBubSvc";
  if (userData !== null) {
    const PROC_TYPE = "01";
    const CONT = "";
    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;
    const data = {
      TIT,
      STRT_SCHD_YMD,
      END_SCHD_YMD,
      CONT,
      LOGIN_ID,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
      PROC_TYPE,
    };

    const result: AxiosResponse<UserData, any> | null = await sendApiData(
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

export const schdBubSvcUp = async (
  TIT: string,
  STRT_SCHD_YMD: string,
  END_SCHD_YMD: string,
  CRE_SEQ: number
) => {
  const userData = getUserData();
  const endpoint = "/UNI/SchdBubSvc";
  if (userData !== null) {
    const PROC_TYPE = "02";
    const CONT = "";
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
      STRT_SCHD_YMD,
      END_SCHD_YMD,
    };
  
    const result: AxiosResponse<UserData, any> | null = await sendApiData(
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
