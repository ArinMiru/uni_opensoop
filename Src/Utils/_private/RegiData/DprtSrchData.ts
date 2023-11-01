export interface DprtData {
  SCH_CD: string;
  SCH_NM: string;
  DPRT_CD: string;
  DPRT_NM: string;
  RSLT_CD: string;
  DPRT_NM_INFO: DprtItem[];
}
interface DprtItem {
  SCH_CD: number;
  SCH_NM: string;
  DPRT_CD: string;
  DPRT_NM: string;
}

export function parseDprtSrchData(rawData: any): DprtData {
  const dprtData: DprtData = {
    RSLT_CD: rawData.RSLT_CD || "",
    SCH_CD: rawData.SCH_CD || 0,
    SCH_NM: rawData.SCH_NM || "",
    DPRT_CD: rawData.DPRT_CD || "",
    DPRT_NM: rawData.DPRT_NM || "",
    DPRT_NM_INFO: [],
  };

  if (Array.isArray(rawData.DPRT_NM_INFO)) {
    dprtData.DPRT_NM_INFO = rawData.DPRT_NM_INFO.map((item: any) => {
      const dprtItem: DprtItem = {
        SCH_CD: typeof item.SCH_CD === "number" ? item.SCH_CD : 0,
        SCH_NM: typeof item.SCH_NM === "string" ? item.SCH_NM : "",
        DPRT_CD: typeof item.DPRT_CD === "string" ? item.DPRT_CD : "", // Fix variable name here
        DPRT_NM: typeof item.DPRT_NM === "string" ? item.DPRT_NM : "", // Fix variable name here
      };

      return dprtItem;
    });
  }

  return dprtData;
}
