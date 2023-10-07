import { sendLoginCredentials } from "../../../Services/_private/Api.config";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { AxiosResponse } from 'axios';

/**
 * 질문게시판 
 * 데이터 형식, 파싱 함수, API 호출 함수 개발
 * 23/10/4 22:55 최서은 @holly1017 생성
 */

// 질문게시판 데이터 전체 형식 
export interface QuestData {
    RSLT_CD: String;
    QUES_BUB: QuestItem[];  //질문게시물 정보 배열
}

// 질문게시판 게시물 하나의 데이터 형식 
export interface QuestItem {
    MEMB_SC_NM: String;                                 //학교명
    MEMB_DEP_NM: String;                                //학과명
    TIT_NM: String;                                     //직함명
    NICK_NM: String;                                    //닉네임
    MEMB_ID: String;                                    //게시자ID
    CRE_SEQ: String;                                    //게시일련번호
    TIT: String;                                        //제목
    CONT: String;                                       //내용
    LIKE_CNT: String;                                   //좋아요건수
    CRE_DAT: String;                                    //게시일시
    ANS_FREE: AnsFree[];                                //답변 정보 배열
}

// 질문게시판 게시물 답변 데이터 형식 
export interface AnsFree {
    ANS_MEMB_ID: String;                                //답변자ID
    ANS_SEQ: String;                                    //답변일련번호
    CONT: String;                                       //답변내용
    CRE_DAT: String;                                    //답변일시
}

// 서버에서 받아온 데이터를 QuestData 형식으로 파싱하는 함수
export function parseQuestData(rawData: any): QuestData {
    const questData: QuestData = {
        RSLT_CD: rawData.RSLT_CD || '',                 //결과 코드, 없을 시 빈 문자열
        QUES_BUB: [],                                   //질문게시글 정보 배열 초기화
    };

    if(Array.isArray(rawData.QUES_BUB)) {
        questData.QUES_BUB = rawData.QUES_BUB.map((item: any) => {
            const questItem: QuestItem = {
                MEMB_SC_NM: item.MEMB_SC_NM || '',      //학교 명, 없을 시 빈 문자열
                MEMB_DEP_NM: item.MEMB_DEP_NM || '',    //학과 명, 없을 시 빈 문자열
                TIT_NM: item.TIT_NM || '',              //직함 명, 없을 시 빈 문자열
                NICK_NM: item.NICK_NM || '',            //닉네임, 없을 시 빈 문자열
                MEMB_ID: item.MEMB_ID || '',            //게시자ID, 없을 시 빈 문자열
                CRE_SEQ: typeof item.CRE_SEQ === 'number' ? item.CRE_SEQ : 0,        //게시일련번호, 숫자로 변환, 없을 시 빈 문자열
                TIT: item.TIT || '',                    //제목, 없을 시 빈 문자열
                CONT: item.CONT || '',                  //내용, 없을 시 빈 문자열
                LIKE_CNT: typeof item.LIKE_CNT === 'number' ? item.LIKE_CNT : 0,       //좋아요건수, 숫자로 변환, 없을 시 빈 문자열
                CRE_DAT: item.CRE_DAT || '',            //게시일시, 없을 시 빈 문자열
                ANS_FREE: [],                           //답변 정보 배열 초기화
        };
        if(Array.isArray(rawData.ANS_FREE)) {
            questItem.ANS_FREE = item.ANS_FREE.map((ans: any) => ({
                ANS_MEMB_ID: ans.ANS_MEMB_ID || '',     //답변자ID, 없을 시 빈 문자열
                ANS_SEQ: ans.ANS_SEQ || '',             //답변일련번호, 없을 시 빈 문자열
                CONT: ans.CONT || '',                   //답변내용, 없을 시 빈 문자열
                CRE_DAT: ans.CRE_DAT || '',             //답변일시, 없을 시 빈 문자열
            }));
        }
        return questItem;
    });
}
return questData;
}

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