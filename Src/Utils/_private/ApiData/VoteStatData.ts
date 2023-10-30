export interface VoteStatData {
  RSLT_CD: string;
  VOT_BUB: VoteStatItem[];
}

export interface VoteStatItem {
  RSLT_CD: string;
  VOT_TOT: number;
  VOT_SEQ: number;
  VOT_SUB_TOT: number;
  PRCT: number;
}

export function parseVoteStatData(rawData: any): VoteStatData {
  console.log("원본 rawData:", rawData); // 여기에 추가
  const voteData: VoteStatData = {
    RSLT_CD: rawData.RSLT_CD || "",
    VOT_BUB: [],
  };

  if (Array.isArray(rawData.VOT_BUB)) {
    voteData.VOT_BUB = rawData.VOT_BUB.map((item: any) => {
      const voteItem: VoteStatItem = {
        RSLT_CD: item.RSLT_CD || "",
        VOT_TOT: item.VOT_TOT || 0,
        VOT_SEQ: item.VOT_SEQ || 0,
        VOT_SUB_TOT: item.VOT_SUB_TOT || 0,
        PRCT: item.PRCT || 0,
      };
      return voteItem;
    });
  }
  return voteData;
}
