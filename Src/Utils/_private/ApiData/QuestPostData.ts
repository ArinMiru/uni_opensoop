import { sendLoginCredentials } from "../../../Services/_private/Api.config";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { AxiosResponse } from 'axios';
import { QuestData, parseQuestData } from "../ApiData/QuestData";

/**
 * 질문게시판 
 * API 호출 함수 파일 이동
 * 23/10/9 14:31 최서은 @holly1017 생성
 */

/**
 * 질문게시판 조회 API 호출 함수
 * @param MEMB_ID 
 * @param MEMB_SC_CD 
 * @param MEMB_DEP_CD
 * @param TIT_CD
 * @param LIST_UNIT_CNT
 * @param REQ_PAGE
 */
export const QuesBubListSvc = async (
    MEMB_ID: string, 
    MEMB_SC_CD: string,
    MEMB_DEP_CD: string,
    TIT_CD: string,
    LIST_UNIT_CNT: number,
    REQ_PAGE: number,
    ):Promise<QuestData | null> => {
    const endpoint = "/UNI/QuesBubListSvc";
    const data = {
        MEMB_ID,
        MEMB_SC_CD,
        MEMB_DEP_CD,
        TIT_CD,
        LIST_UNIT_CNT,
        REQ_PAGE,
      };

    //로그인 사용자의 데이터 가져오기
    const userData = getUserData();

    if (userData !== null) {
      // userData가 null이 아닌 경우에만 요청 보내기
  
      // 고정된 값으로 설정
      const LIST_UNIT_CNT = 10; // 한 페이지에 표시할 게시글 수
      const REQ_PAGE = 1; // 요청할 페이지 번호

    try {
        // 서버에 공지사항 데이터 요청을 보내고 응답을 기다립니다.
        const result: AxiosResponse<any, any> | null = await sendLoginCredentials(
          endpoint,
          data
        );
  
        if (result !== null && result.data.RSLT_CD === "00") {
          // 서버 응답이 성공적이면 데이터를 파싱합니다.
          const questData: QuestData = parseQuestData(result.data);
          return questData; // 파싱된 데이터를 반환합니다.
        } else {
          console.log("질문게시판 조회 성공");
          return null;
        }
      } catch (error) {
        console.error("질문게시판 조회 중 오류 발생:", error);
        return null;
      }
    } else {
        console.log("질문게시판 조회 실패");
        return null;
    }
};