export interface VoteData {
  RSLT_CD: string;
  VOTE_BUB: VoteItem[];
}

export interface VoteItem {
  MEMB_SC_NM: string;
  MEMB_DEP_NM: string;
  TIT_NM: string;
  NICK_NM: string;
  MEMB_ID: string;
  CRE_SEQ: number;
  VOTE_TITLE: string;
  VOTE_TYPE_CD: string;
  VOT_GO_CD: string;
  VOT_EXPR_DATE: string;
  VOT_DESC: string;
  VOT_INFO: string;
  VOT_SEL_SEQ: string;
}

export function parseVoteData(rawData: any): VoteData {
  const voteData: VoteData = {
    RSLT_CD: rawData.RSLT_CD || "",
    VOTE_BUB: [],
  };

  if (Array.isArray(rawData.VOT_BUB)) {
    voteData.VOTE_BUB = rawData.VOT_BUB.sort((a: any, b: any) => {
      // 여기서 a와 b는 VOT_BUB 배열의 항목입니다.
      // a와 b의 VOT_GO_CD 값을 비교하여 정렬합니다.
      const voteStatusA = a.VOT_GO_CD;
      const voteStatusB = b.VOT_GO_CD;
      return voteStatusA.localeCompare(voteStatusB);
    }).map((item: any) => {
      const voteItem: VoteItem = {
        MEMB_SC_NM: item.MEMB_SC_NM || "",
        MEMB_DEP_NM: item.MEMB_DEP_NM || "",
        TIT_NM: item.TIT_NM || "",
        NICK_NM: item.NICK_NM || "",
        MEMB_ID: item.MEMB_ID || "",
        CRE_SEQ: item.CRE_SEQ || "",
        VOTE_TITLE: item.VOT_TITLE || "",
        VOTE_TYPE_CD: item.VOTE_TYPE_CD || "",
        VOT_GO_CD: item.VOT_GO_CD || "",
        VOT_DESC: item.VOT_DESC || "",
        VOT_EXPR_DATE: item.VOT_EXPR_DATE || "",
        VOT_SEL_SEQ: item.VOT_SEL_SEQ || "",
        VOT_INFO: item.VOT_INFO || "",
      };
      return voteItem;
    });
  }
  return voteData;
}
