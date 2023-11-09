import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { sendApiData } from "../_private/Api.config";
import { AxiosResponse } from "axios";
import { UserData } from "../../Utils/_private/ApiData/UserData";

export const QuesAnsBubSvcNew = async (
  TIT: string,
  CONT: string,
  CRE_SEQ: number
) => {
  const userData = getUserData();
  const endpoint = "/UNI/QuesAnsBubSvc";
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
      // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
      console.log("등록 성공");
    } else {
      console.log("등록 실패");
    }
  }
};
export const QuesAnsBubSvcUp = async (
  CRE_SEQ: number,
  TIT: string,
  CONT: string
) => {
  const userData = getUserData();
  const endpoint = "/UNI/QuesAnsBubSvc";
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
      // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
      console.log("등록 성공");
    } else {
      console.log("등록 실패");
    }
  }
};
export const QuesAnsBubSvcDel = async (CRE_SEQ: number) => {
  const userData = getUserData();
  const endpoint = "/UNI/QuesAnsBubSvc";
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
      // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
      console.log("등록 성공");
    } else {
      console.log("등록 실패");
    }
  }
};
