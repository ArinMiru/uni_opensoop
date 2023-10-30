/**
 * 질문게시판
 * 데이터 형식, 파싱 함수, API 호출 함수 개발
 * 23/10/4 22:55 최서은 @holly1017 생성
 */

// 질문게시판 데이터 전체 형식
export interface QuestData {
  RSLT_CD: string;
  QUES_BUB: QuestItem[]; //질문게시물 정보 배열
}

// 질문게시판 게시물 하나의 데이터 형식
export interface QuestItem {
  MEMB_SC_NM: string; //학교명
  MEMB_DEP_NM: string; //학과명
  TIT_NM: string; //직함명
  NICK_NM: string; //닉네임
  MEMB_ID: string; //게시자ID
  CRE_SEQ: number; //게시일련번호
  TIT: string; //제목
  CONT: string; //내용
  LIKE_CNT: string; //좋아요건수
  CRE_DAT: string; //게시일시
  ANS_FREE: AnsFree[]; //답변 정보 배열
}

// 질문게시판 게시물 답변 데이터 형식
export interface AnsFree {
  ANS_MEMB_ID: string; //답변자ID
  ANS_SEQ: string; //답변일련번호
  CONT: string; //답변내용
  CRE_DAT: string; //답변일시
}

// 서버에서 받아온 데이터를 QuestData 형식으로 파싱하는 함수
export function parseQuestData(rawData: any): QuestData {
  const questData: QuestData = {
    RSLT_CD: rawData.RSLT_CD || "", //결과 코드, 없을 시 빈 문자열
    QUES_BUB: [], //질문게시글 정보 배열 초기화
  };

  if (Array.isArray(rawData.QUES_BUB)) {
    questData.QUES_BUB = rawData.QUES_BUB.map((item: any) => {
      const questItem: QuestItem = {
        MEMB_SC_NM: item.MEMB_SC_NM || "", //학교 명, 없을 시 빈 문자열
        MEMB_DEP_NM: item.MEMB_DEP_NM || "", //학과 명, 없을 시 빈 문자열
        TIT_NM: item.TIT_NM || "", //직함 명, 없을 시 빈 문자열
        NICK_NM: item.NICK_NM || "", //닉네임, 없을 시 빈 문자열
        MEMB_ID: item.MEMB_ID || "", //게시자ID, 없을 시 빈 문자열
        CRE_SEQ: item.CRE_SEQ || "", //게시일련번호, 숫자로 변환, 없을 시 빈 문자열
        TIT: item.TIT || "", //제목, 없을 시 빈 문자열
        CONT: item.CONT || "", //내용, 없을 시 빈 문자열
        LIKE_CNT: item.LIKE_CNT || "", //좋아요건수, 숫자로 변환, 없을 시 빈 문자열
        CRE_DAT: item.CRE_DAT || "", //게시일시, 없을 시 빈 문자열
        ANS_FREE: [], //답변 정보 배열 초기화
      };
      if (Array.isArray(rawData.ANS_FREE)) {
        questItem.ANS_FREE = item.ANS_FREE.map((ans: any) => ({
          ANS_MEMB_ID: ans.ANS_MEMB_ID || "", //답변자ID, 없을 시 빈 문자열
          ANS_SEQ: ans.ANS_SEQ || "", //답변일련번호, 없을 시 빈 문자열
          CONT: ans.CONT || "", //답변내용, 없을 시 빈 문자열
          CRE_DAT: ans.CRE_DAT || "", //답변일시, 없을 시 빈 문자열
        }));
      }
      return questItem;
    });
  }
  return questData;
}
