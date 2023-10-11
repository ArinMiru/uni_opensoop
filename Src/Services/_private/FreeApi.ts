import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { sendLoginCredentials } from "./Api.config";
import { AxiosResponse } from "axios";
import { 
    parseFreeData, 
    FreeData, 
} from "../../Utils/_private/ApiData/FreeData";
import { UserData } from "../../Utils/_private/ApiData/UserData";

/* ------------------------------------------------------------------------------- */

/**
 * @jeakyoung 생성
 * 자유게시판 데이터 호출 서비스 함수
 * @param LOGIN_ID 사용자 아이디
 * @param MEMB_SC_CD 사용자 학과 코드
 * @param MEMB_DEP_CD 사용자 학부 코드
 * @param TIT_CD 사용자 직책 코드
 * @param LIST_UNIT_CNT 리스트 단위건수
 * @param REQ_PAGE 요청페이지정보
 * @returns Promise<FreeData | null>
 */
export const FreeBubListCall = async (
    LOGIN_ID: string,
    MEMB_SC_CD: string,
    MEMB_DEP_CD: string,
    TIT_CD: string
  ): Promise<FreeData | null> => {
    const endpoint = "/UNI/FreeBubListSvc";
  
    // 로그인한 사용자의 데이터 가져오기
    const userData = getUserData();
  
    if (userData !== null) {
      // userData가 null이 아닌 경우에만 요청 보내기
  
      // 고정된 값으로 설정
      const LIST_UNIT_CNT = 10; // 한 페이지에 표시할 게시글 수
      const REQ_PAGE = 1; // 요청할 페이지 번호
  
      const data = {
        LOGIN_ID, // 사용자 아이디
        MEMB_SC_CD, // 사용자 학과 코드
        MEMB_DEP_CD, // 사용자 학부 코드
        TIT_CD, // 사용자 직책 코드
        LIST_UNIT_CNT, // 한 페이지에 표시할 게시글 수
        REQ_PAGE, // 요청할 페이지 번호
      };
  
      try {
        // 서버에 자유게시판 데이터 요청을 보내고 응답을 기다립니다.
        const result: AxiosResponse<any, any> | null = await sendLoginCredentials(
          endpoint,
          data
        );
  
        if (result !== null && result.data.RSLT_CD === "00") {
          // 서버 응답이 성공적이면 데이터를 파싱합니다.
          const freeData: FreeData = parseFreeData(result.data);
          return freeData; // 파싱된 데이터를 반환합니다.
        } else {
          console.log("자유게시판 데이터 가져오기 실패");
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

/* ------------------------------------------------------------------------------- */

/**
 * @jeakyoung 생성
 * 자유게시판 데이터 등록 서비스 함수
 */
  export const freeBubSvc = async (
    userData: UserData, // userData 객체를 전달받도록 수정
    CRE_SEQ: string,
    PROC_TYPE: string,
    TIT: string,
    CONT: string,
  ) => {
    const endpoint = "/UNI/FreeBubSvc";
    const data = {
      LOGIN_ID: userData.LOGIN_ID, // userData 객체에서 필요한 값을 가져와 사용
      PROC_TYPE,
      CRE_SEQ,
      MEMB_DEP_CD: userData.MEMB_DEP_CD,
      MEMB_SC_CD: userData.MEMB_SC_CD,
      TIT_CD: userData.TIT_CD,
      TIT,
      CONT,
    };
    const result: AxiosResponse<UserData, any> | null =
      await sendLoginCredentials(endpoint, data);
  
    if (result !== null && result.data.RSLT_CD === "00") {
      console.log("성공");
    } else {
      console.log("실패");
    }
  };
  