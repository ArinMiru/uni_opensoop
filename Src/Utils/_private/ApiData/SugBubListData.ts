/**
 * 건의게시판
 * 데이터 형식, 파싱 함수
 * 2023/10/06 장현빈 작성
 */

//건의게시판 데이터의 전체 형식을 정의하는 SugBubListData 인터페이스
export interface SugBubListData {
  RSLT_CD: string;
  SUG_BUB: SugBubListItem[];
}

//건의게시판 하나의 형식을 정의하는 SugBubListItem 인터페이스
export interface SugBubListItem {
  MEMB_SC_NM: String;
  MEMB_DEP_NM: String;
  TIT_NM: string;
  NICK_NM: string;
  MEMB_ID: string;
  CRE_SEQ: number;
  TIT: string;
  CONT: string;
  LIKE_CNT: string;
  CRE_DAT: string;
  SEC_YN: string;
  ANS_FREE: AnsFree[];
}

export interface AnsFree {
  ANS_MEMB_ID: string;
  ANS_SEQ: number;
  CONT: string;
  CRE_DAT: string;
  SEC_YN: string;
}

//서버에서 받아온 데이터를 SugBubListData 형식으로 파싱하는 함수

export function parseSugBubListData(rawData: any): SugBubListData {
  const sugBubListData: SugBubListData = {
    RSLT_CD: rawData.RSLT_CD || "",
    SUG_BUB: [],
  };

  if (Array.isArray(rawData.SUG_BUB)) {
    sugBubListData.SUG_BUB = rawData.SUG_BUB.map((item: any) => {
      const sugBubListItem: SugBubListItem = {
        MEMB_SC_NM: item.MEMB_SC_NM || "", //학교명, 없을 경우 빈 문자열
        MEMB_DEP_NM: item.MEMB_DEP_NM || "", //학과명, 없을 경우 빈 문자열
        TIT_NM: item.TIT_NM || "", //직함명, 없을 경우 빈 문자열
        NICK_NM: item.NICK_NM || "", //닉네임, 없을 경우 빈 문자열
        MEMB_ID: item.MEMB_ID || "", //게시자 ID, 없을 경우 빈 문자열
        CRE_SEQ: item.CRE_SEQ || "", //게시일련번호, 없을 경우 빈 문자열
        TIT: item.TIT || "", //제목, 없을 경우 빈 문자열
        CONT: item.CONT || "", //내용, 없을 경우 빈 문자열
        LIKE_CNT: item.LIKE_CNT || "", //좋아요 건수, 없을 경우 빈 문자열
        CRE_DAT: item.CRE_DAT || "", //
        SEC_YN: item.SEC_YN || "",
        ANS_FREE: [],
      };

      if (Array.isArray(item.ANS_FREE)) {
        sugBubListItem.ANS_FREE = item.ANS_FREE.map((ans: any) => ({
          ANS_MEMB_ID: ans.ANS_MEMB_ID || "",
          ANS_SEQ: ans.ANS_SEQ || "",
          CONT: ans.CONT || "",
          CRE_DAT: ans.CRE_DAT || "",
        }));
      }

      return sugBubListItem;
    });
  }

  return sugBubListData;
}
