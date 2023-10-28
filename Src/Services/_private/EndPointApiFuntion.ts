import { sendApiData } from "./Api.config";
import { setUserData } from "../../Utils/_private/ApiData/UserData";
import { AxiosResponse } from "axios";
import { UserData } from "../../Utils/_private/ApiData/UserData";
import { RegiDataType } from "../../Utils/_private/RegiData/RegiUserData";
import {
  SchlSrchData,
  parseSchlSrchData,
} from "../../Utils/_private/RegiData/SchlSrchData";
import {
  DprtSrchData,
  parseDprtSrchData,
} from "../../Utils/_private/RegiData/DprtSrchData";

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
    if (result.data.RSLT_CD === "00") {
      setUserData(result.data);
      return "00"; // 로그인 성공
    } else {
      return result.data.RSLT_CD; // 로그인 실패
    }
  } else {
    console.log("로그인 실패");
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
export const registerUser = async (data: RegiDataType) => {
  const endpoint = "/UNI/MembRegSvc"; // 회원가입 엔드포인트 URL

  const result = await sendApiData(endpoint, data); // 회원가입 시도 및 서버 응답 저장

  // 서버 응답(result)에 대한 처리
  return result; // 서버 응답을 반환합니다.
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
    // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
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
  const result: AxiosResponse<UserData, any> | null = await sendApiData(
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
  const result: AxiosResponse<UserData, any> | null = await sendApiData(
    endpoint,
    data
  );
  if (result !== null && result.data.RSLT_CD === "00") {
    // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
    console.log("인증번호를 발송합니다.");
  } else {
    console.log("등록되지 않은 정보입니다.");
  }
};

/**
 * 비밀번호 찾기 인증번호 API 호출 함수
 */
export const ChkAndCertSvc = async (MEMB_ID: string, CERT_SEQ: string) => {
  const endpoint = "/UNI/ChkAndCertSvc";
  const data = {
    MEMB_ID,
    CERT_SEQ,
  };
  const result: AxiosResponse<UserData, any> | null = await sendApiData(
    endpoint,
    data
  );
  if (result !== null && result.data.RSLT_CD === "00") {
    // result가 null이 아니고 서버 응답 데이터의 RSLT_CD가 "00"인 경우
    console.log("인증번호 일치.");
  } else {
    console.log("인증번호 불일치.");
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
      console.log(result.data);
      return schlsrchdata; // 파싱된 데이터를 반환합니다.
    } else {
      console.log("대학교명이 존재하지 않습니다.");
      return null;
    }
  } catch (error) {
    console.error("오류 발생:", error);
    return null;
  }
};

/* ------------------------------------------------------------------------------- */

/**
 * 학과명 데이터 호출 서비스 함수
 * @param SCH_CD 대학교 코드
 * @param SCH_NM 대학교 이름
 * @param DPRT_CD 학과 코드
 * @param DPRT_NM 학과 이름
 * @returns Promise<DprtSrchData | null>
 */
export const DprtSrchCall = async (
  SCH_NM: string,
  DPRT_NM: string
): Promise<DprtSrchData | null> => {
  const endpoint = "/UNI/DprtSrch";

  const data = {
    SCH_NM, // 대학교 이름
    DPRT_NM, // 학과 이름
  };

  try {
    // 서버에 학과명 데이터 요청을 보내고 응답을 기다립니다.
    const result: AxiosResponse<any, any> | null = await sendApiData(
      endpoint,
      data
    );

    if (result !== null && result.data.RSLT_CD === "00") {
      // 서버 응답이 성공적이면 데이터를 파싱합니다.
      const dprtsrchdata: DprtSrchData = parseDprtSrchData(result.data);
      console.log(result.data);
      return dprtsrchdata; // 파싱된 데이터를 반환합니다.
    } else {
      console.log("학과명이 존재하지 않습니다.");
      return null;
    }
  } catch (error) {
    console.error("오류 발생:", error);
    return null;
  }
};

/* ------------------------------------------------------------------------------- */

/**
 * @jeakyoung 생성
 * 대학교 인증 API 호출 함수
 * @param CERT_SEQ
 */
export const MembCertUpd = async (CERT_SEQ: string) => {
  const endpoint = "/UNI/MembUniCertUpdSvc";
  const data = {
    CERT_SEQ,
  };
  const result: AxiosResponse<UserData, any> | null = await sendApiData(
    endpoint,
    data
  );
  if (result !== null && result.data.RSLT_CD == "00") {
    console.log("통신 성공");
  } else {
    console.log("통신 실패");
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
    console.log("비밀번호가 변경되었습니다.");
  } else {
    console.log("다른 새로운 비밀번호를 입력해주세요.");
  }
};
