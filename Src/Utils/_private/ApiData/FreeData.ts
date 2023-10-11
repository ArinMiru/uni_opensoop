// @jeakyoung 생성
// 자유게시판 데이터의 전체 형식을 정의하는 FreeData 인터페이스
export interface FreeData {
    RSLT_CD: string;                            // 결과 코드
    FREE_BUB: FreeItem[];                     // 자유게시판 아이템 배열
  }
  
  // 자유게시판 하나의 형식을 정의하는 FreeItem 인터페이스
  export interface FreeItem {
    MEMB_SC_NM: String;                         // 학교 명
    MEMB_DEP_NM: String;                        // 학과 명
    TIT_NM: string;                             // 자유게시글 작성자 직책명
    NICK_NM: string;                            // 자유게시글 작성자 닉네임
    MEMB_ID: string;                            // 회원 아이디
    CRE_SEQ: number;                            // 자유게시글 일련번호 (순서)
    TIT: string;                                // 자유게시글 제목
    CONT: string;                               // 자유게시글 내용
    LIKE_CNT: number;                           // 자유게시글 좋아요 수
    CRE_DAT: string;                            // 자유게시글 작성 일자
    ANS_FREE: AnsFree[];                        // 자유게시판 답변 정보 배열
  }
  
  // 자유게시판 답변 정보를 정의하는 AnsFree 인터페이스
  export interface AnsFree {
    ANS_MEMB_ID: string;                        // 답변 게시자 ID
    ANS_SEQ: string;                            // 답변 일련번호
    CONT: string;                               // 답변 내용
    CRE_DAT: string;                            // 답변 일시
  }
  
  // 서버에서 받아온 데이터를 FreeData 형식으로 파싱하는 함수
  export function parseFreeData(rawData: any): FreeData {
    const freeData: FreeData = {
      RSLT_CD: rawData.RSLT_CD || '',            // 결과 코드, 없을 경우 빈 문자열
      FREE_BUB: [],                              // 자유게시글 아이템 배열 초기화
    };
  
    if (Array.isArray(rawData.FREE_BUB)) {
      freeData.FREE_BUB = rawData.FREE_BUB.map((item: any) => {
        const freeItem: FreeItem = {
          MEMB_SC_NM: item.MEMB_SC_NM || '',
          MEMB_DEP_NM: item.MEMB_DEP_NM || '',
          TIT_NM: item.TIT_NM || '',             // 작성자 직책명, 없을 경우 빈 문자열
          NICK_NM: item.NICK_NM || '',           // 작성자 닉네임, 없을 경우 빈 문자열
          MEMB_ID: item.MEMB_ID || '',           // 회원 아이디, 없을 경우 빈 문자열
          CRE_SEQ: typeof item.CRE_SEQ === 'number' ? item.CRE_SEQ : 0, // 숫자로 변환, 없을 경우 0
          TIT: item.TIT || '',                   // 자유게시글 제목, 없을 경우 빈 문자열
          CONT: item.CONT || '',                 // 자유게시글 내용, 없을 경우 빈 문자열
          LIKE_CNT: typeof item.LIKE_CNT === 'number' ? item.LIKE_CNT : 0, // 숫자로 변환, 없을 경우 0
          CRE_DAT: item.CRE_DAT || '',           // 작성 일자, 없을 경우 빈 문자열
          ANS_FREE: [],                        // 이미지 정보 배열 초기화
        };
  
        if (Array.isArray(item.ANS_FREE)) {
          freeItem.ANS_FREE = item.ANS_FREE.map((ans: any) => ({
            ANS_MEMB_ID: ans.ANS_MEMB_ID || '',    // 자유게시판 답변 게시자 ID, 없을 경우 빈 문자열
            ANS_SEQ: ans.ANS_SEQ || '',        // 자유게시판 답변일련번호, 없을 경우 빈 문자열
            CONT: ans.CONT || '',        // 자유게시판 답변내용, 없을 경우 빈 문자열
            CRE_DAT: ans.CRE_DAT || '',        // 자유게시판 답변 일시, 없을 경우 빈 문자열
          }));
        }
  
        return freeItem;
      });
    }
  
    return freeData;
  }
  