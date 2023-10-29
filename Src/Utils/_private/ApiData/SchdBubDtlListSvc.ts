export interface SchdBubDtlListData {
  RSLT_CD: string;
  SCHD_BUB: SCHD_BuB_Item[];
}

export interface SCHD_BuB_Item {
  SRE_SEQ: string;
  TIT: string;
  CONT: string;
  STRT_SCHD_YMD: string;
  END_SCHD_YMD: string;
  CRE_DAT: string;
}

export function parseSchdbubDtlListData(rawData: any): SchdBubDtlListData {
  const SchdBubDtlListData: SchdBubDtlListData = {
    RSLT_CD: rawData.RSLT_CD || "",
    SCHD_BUB: [],
  };

  if (Array.isArray(rawData.SCHD_BUB)) {
    SchdBubDtlListData.SCHD_BUB = rawData.SCHD_BUB.map((item: any) => {
      const SCHD_BuB_Item: SCHD_BuB_Item = {
        SRE_SEQ: item.SRE_SEQ || "",
        TIT: item.TIT || "",
        CONT: item.CONT || "",
        STRT_SCHD_YMD: item.STRT_SCHD_YMD || "",
        END_SCHD_YMD: item.END_SCHD_YMD || "",
        CRE_DAT: item.CRE_DAT || "",
      };
      return SCHD_BuB_Item;
    });
  }
  return SchdBubDtlListData;
}
