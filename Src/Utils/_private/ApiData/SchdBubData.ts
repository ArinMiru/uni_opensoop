export interface SchdBubData {
  RSLT_CD: String;
  YEAR: String;
  MONTH: String;
  SCHD_BUB: SchdBubItem[];
}

export interface SchdBubItem {
  DAY: String;
  DAY_DESC: String;
  THIS_MON_YN: String;
  CNT: Number;
}

export function parseSchdBubData(rawData: any): SchdBubData {
  const SchdBubData: SchdBubData = {
    RSLT_CD: rawData.RSLT_CD || "",
    YEAR: rawData.YEAR || "",
    MONTH: rawData.MONTH || "",
    SCHD_BUB: [],
  };

  if (Array.isArray(rawData.SCHD_BUB)) {
    SchdBubData.SCHD_BUB = rawData.SCHD_BUB.map((item: any) => {
      const schdBubItem: SchdBubItem = {
        DAY: item.DAY || "",
        DAY_DESC: item.DAY_DESC || "",
        THIS_MON_YN: item.THIS_MON_YN || "",
        CNT: typeof item.CNT === "number" ? item.CNT : 0,
      };
      return schdBubItem;
    });
  }
  return SchdBubData;
}
