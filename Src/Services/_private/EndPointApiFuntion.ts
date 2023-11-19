import { sendApiData } from "./Api.config";
import {
  setUserData,
  getUserData,
} from "../../Utils/_private/ApiData/UserData";
import { AxiosResponse } from "axios";
import { UserData } from "../../Utils/_private/ApiData/UserData";
import {
  SchlSrchData,
  parseSchlSrchData,
} from "../../Utils/_private/RegiData/SchlSrchData";
import {
  DprtData,
  parseDprtSrchData,
} from "../../Utils/_private/RegiData/DprtSrchData";
import { jwtTokenSave } from "../../Utils/_private/.secure/.autoLogin";
import {
  EmailEcodeTable,
  EmailEcodeParse,
} from "../../Utils/_private/RegiData/EmailCerti";
/* ------------------------------------------------------------------------------- */

/**
 * 로그인 서비스 함수
 * @param LOGIN_ID 사용자 아이디
 * @param LOGIN_PASS 사용자 비밀번호
 */
export const loginUser = async (LOGIN_ID: string, LOGIN_PASS: string) => {
  const endpoint = "/UNI/LoginSvc";
  const data = {
    LOGIN_ID,
    LOGIN_PASS,
  };

  const result: AxiosResponse<UserData, any> | null = await sendApiData(
    endpoint,
    data
  );

  if (result !== null) {
    const userData = result.data;
    if (userData.RSLT_CD === "00") {
      setUserData(result.data);
      if (userData.TOKEN_ID !== null) {
        jwtTokenSave(userData.TOKEN_ID);
      } else {
      }
      return userData.RSLT_CD;
    } else {
      return result.data.RSLT_CD;
    }
  } else {
    return null;
  }
};

export const autoLogin = async (TOKEN_ID: any) => {
  const endpoint = "/UNI/LoginSvc";

  const data = {
    TOKEN_ID,
  };

  const result: AxiosResponse<UserData, any> | null = await sendApiData(
    endpoint,
    data
  );
 
  if (result !== null && result.data.RSLT_CD === "00") {
    setUserData(result.data);
    return result.data.RSLT_CD;
  } else {
    return null;
  }
};

/**
 * 로그아웃 서비스 함수
 * @param TOKEN_ID 토큰 아이디
 * @param TYPE 로그아웃 타입 "D" 고정
 * @ArinMiru (23.11.11 생성)
 */
export const loginOut = async (TOKEN_ID: string) => {
  const endpoint = "/UNI/TokenSvc";
  const data = {
    TOKEN_ID,
    TYPE: "D",
  };
  const result: AxiosResponse<UserData, any> | null = await sendApiData(
    endpoint,
    data
  );

  if (result !== null) {
    if (result.data.RSLT_CD === "00") {
      setUserData(result.data);
      return "00"; // 로그아웃 성공 및 토큰 만료 성공
    } else {
      return result.data.RSLT_CD; // 로그아웃 성공
    }
  } else {
  
    return null;
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
export const registerUser = async (
  MEMB_ID: string,
  PASS: string,
  MEMB_NM: string,
  NICK_NM: string
): Promise<boolean> => {
  return new Promise(async (resolve) => {
    const endpoint = "/UNI/MembRegSvc"; // 회원가입 엔드포인트 URL
    const data = {
      MEMB_ID,
      MEMB_NM,
      PASS,
      NICK_NM,
    };
   
    const result: AxiosResponse<UserData, any> | null = await sendApiData(
      endpoint,
      data
    );

    if (result !== null && result.data.RSLT_CD === "00") {
     
      resolve(true);
    } else {
  
      resolve(false);
    }
  });
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
  const result: AxiosResponse<UserData, any> | null = await sendApiData(
    endpoint,
    data
  );

  if (result !== null && result.data.RSLT_CD === "00") {
    return true;
  }
  return false;
};

/* ------------------------------------------------------------------------------- */

/**
 * @jeakyoung 생성
 * 닉네임 중복체크 API 호출 함수
 * @param NICK_NM
 */
export const nickCheckpoint = async (NICK_NM: string): Promise<boolean> => {
  const endpoint = "/UNI/MembNicChkSvc";
  const data = {
    NICK_NM,
  };
  const result: AxiosResponse<UserData, any> | null = await sendApiData(
    endpoint,
    data
  );
  console.log(data);
  if (result !== null && result.data.RSLT_CD == "00") {
    return true;
  }
  return false;
};

/**
 * 이메일로 아이디 찾기 API 호출 함수
 * @param MEMB_EM
 */
export const MembIdFndSvc = async (MEMB_EM: string) => {
  const endpoint = "/UNI/MembIdFndSvc";
  const data = { MEMB_EM };
  const result: AxiosResponse<any, any> | null = await sendApiData(
    endpoint,
    data
  );
  if (result !== null && result.data.RSLT_CD === "00") {
    return result.data; // 전체 데이터 반환
  } else {
    return null;
  }
};

/**
 * 비밀번호 찾기 API 호출 함수
 * @param MEMB_ID
 * @param MEMB_EM
 */
export const MembPassFndSvc = async (MEMB_ID: string, MEMB_EM: string) => {
  const endpoint = "/UNI/MembPassFndSvc";
  const data = {
    MEMB_ID,
    MEMB_EM,
  };
  const result: AxiosResponse<EmailEcodeTable, any> | null = await sendApiData(
    endpoint,
    data
  );
  if (result !== null && result.data.RSLT_CD === "00") {
    return result.data;
  } else {
    return null;
  }
};

/**
 * 인증번호 API 호출 함수
 * @param MEMB_ID
 * @param CERT_SEQ
 */
export const chkAndCertSvc = async (
  MEMB_ID: string,
  CERT_SEQ: string,
  INPUT_CD: string
) => {
  const endpoint = "/UNI/ChkAndCertSvc";
  const data = {
    MEMB_ID,
    CERT_SEQ,
    INPUT_CD,
  };
  console.log(data);
  const result: AxiosResponse<UserData, any> | null = await sendApiData(
    endpoint,
    data
  );
  if (result !== null && result.data.RSLT_CD === "00") {
    // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
    return result.data;
  } else {
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
  SCH_NM: string
): Promise<SchlSrchData | null> => {
  const endpoint = "/UNI/SchlSrch";

  const data = {
    SCH_NM, // 대학교 이름
  };

  try {
    // 서버에 대학교명 데이터 요청을 보내고 응답을 기다립니다.
    const result: AxiosResponse<any, any> | null = await sendApiData(
      endpoint,
      data
    );

    if (result !== null && result.data.RSLT_CD === "00") {
      // 서버 응답이 성공적이면 데이터를 파싱합니다.
      const schlsrchdata: SchlSrchData = parseSchlSrchData(result.data);
  
      return schlsrchdata; // 파싱된 데이터를 반환합니다.
    } else {
    
      return null;
    }
  } catch (error) {
   
    return null;
  }
};

/* ------------------------------------------------------------------------------- */

/**
 * @jeakyoung 생성
 * 대학교 인증 API 호출 함수
 * @param CERT_SEQ
 */
export const membUniCertUpd = async (
  MEMB_ID: string,
  MEMB_SC_CD: string,
  MEMB_DEP_CD: string,
  MEMB_NUM: string,
  MEMB_EM: string,
  MEMB_GRA: string
) => {
  const endpoint = "/UNI/MembUniCertUpdSvc";
  const data = {
    MEMB_ID,
    MEMB_SC_CD,
    MEMB_DEP_CD,
    MEMB_NUM,
    MEMB_EM,
    MEMB_GRA,
  };

  const result: AxiosResponse<EmailEcodeTable, any> | null = await sendApiData(
    endpoint,
    data
  );

  if (
    result !== null &&
    result.data.CERT_SEQ !== null &&
    result.data.RSLT_CD == "00"
  ) {
    const emailEcode: EmailEcodeTable = EmailEcodeParse(result.data);

    return emailEcode;
  } else {
    return null;
  }
};

/* ------------------------------------------------------------------------------- */

/**
 * @jhbinny 생성
 * @ArinMiru 패치 충돌 해결(23.10.03)
 *비밀번호 변경 서비스 호출 함수
 * @param MEMB_ID 사용자 아이디
 * @param PASS 변경할 비밀번호
 */

export const MembPassUpdSvc = async (MEMB_ID: string, PASS: string) => {
  const endpoint = "/MembPassUpdSvc"; //비밀번호변경 엔드포인트 URL
  const data = {
    MEMB_ID, //변경자 사용 아이디
    PASS, //새로운 비밀번호
  };

  const result: AxiosResponse<any, any> | null = await sendApiData(
    endpoint,
    data
  );
  //새로운 비밀번호가 맞는지 서버 응답을 기다립니다.

  if (result !== null && result.data.RSLT_CD === "00") {
    //result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 00인 경우
    //비밀번호 변경 시의 처리
    //userData 객체의 데이터 저장
 
  } else {

  }
};

/* ------------------------------------------------------------------------------- */

export const dprtSrch = async (SCH_CD: string): Promise<DprtData | null> => {
  const endpoint = "/UNI/DprtSrch";
  const data = {
    SCH_CD,
  };

  try {
    // 서버에 공지사항 데이터 요청을 보내고 응답을 기다립니다.
    const result: AxiosResponse<any, any> | null = await sendApiData(
      endpoint,
      data
    );

    if (result !== null && result.data.RSLT_CD === "00") {
      // 서버 응답이 성공적이면 데이터를 파싱합니다.
      const dprtData: DprtData = parseDprtSrchData(result.data);
      return dprtData; // 파싱된 데이터를 반환합니다.
    } else {

      return null;
    }
  } catch (error) {

    return null;
  }
};

/**
 * 좋아요 누적 공통 API 호출 함수
 * @param LOGIN_ID
 * @param PROC_TYPE
 * @param CRE_SEQ
 * @param MEMB_SC_CD
 * @param MEMB_DEP_CD
 * @param TIT_CD
 */
export const MembLikeUpdSvc = async (CRE_SEQ: number) => {
  const endpoint = "/UNI/MembLikeUpdSvc";
  const userData = getUserData();

  if (userData != null) {
    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;
    const PROC_TYPE = "01"; // 공지게시판 고정
    const data = {
      LOGIN_ID,
      PROC_TYPE,
      CRE_SEQ,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
    };

    const result: AxiosResponse<UserData, any> | null = await sendApiData(
      endpoint,
      data
    );
    if (result !== null && result.data.RSLT_CD === "00") {
      // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우

      return result.data;
    } else {

      return null;
    }
  }
};

/**
 * 좋아요 누적 공통 API 호출 함수
 * @param LOGIN_ID
 * @param PROC_TYPE
 * @param CRE_SEQ
 * @param MEMB_SC_CD
 * @param MEMB_DEP_CD
 * @param TIT_CD
 */
export const MembLikeMinusUpdSvc = async (CRE_SEQ: number) => {
  const endpoint = "/UNI/MembLikeMinusUpdSvc";
  const userData = getUserData();

  if (userData != null) {
    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;
    const PROC_TYPE = "01"; // 공지게시판 고정
    const data = {
      LOGIN_ID,
      PROC_TYPE,
      CRE_SEQ,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
    };

    const result: AxiosResponse<UserData, any> | null = await sendApiData(
      endpoint,
      data
    );
    if (result !== null && result.data.RSLT_CD === "00") {
      // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
   
      return result.data;
    } else {
  
      return null;
    }
  }
};

/* ------------------------------------------------------------------------------- */

/**
 * @jeakyoung 생성
 * 알림정보수정 API 호출 함수
 * @param MEMB_ID
 * @param APP_NOTICE_YN
 * @param DEP_NOTICE_YN
 */
export const MembAlmInfoUpd = async (
  MEMB_ID: string,
  APP_NOTICE_YN: string,
  DEP_NOTICE_YN: string
) => {
  const endpoint = "/UNI/MembAlmInfoUpd";
  const data = {
    MEMB_ID,
    APP_NOTICE_YN,
    DEP_NOTICE_YN,
  };
  const result: AxiosResponse<UserData, any> | null = await sendApiData(
    endpoint,
    data
  );
  if (result !== null && result.data.RSLT_CD === "00") {
    // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
    console.log("등록 성공");
  } else {
    console.log("등록실패");
  }
};

/* ------------------------------------------------------------------------------- */
