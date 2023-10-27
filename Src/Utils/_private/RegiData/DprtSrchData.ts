// @jeakyoung 생성
// 학과명 데이터의 전체 형식을 정의하는 DprtSrchData 인터페이스
export interface DprtSrchData {
    RSLT_CD: string; // 결과 코드
    DPRT_NM_INFO: DprtSrchItem[]; // 학과명 아이템 배열
  }
  
  // 학과명 하나의 형식을 정의하는 DprtSrchItem 인터페이스
  export interface DprtSrchItem {
    SCH_CD: number; // 대학교 코드
    SCH_NM: string; // 대학교 이름
    DPRT_CD: string; // 학과 코드
    DPRT_NM: string; // 학과 이름
  }
  
  // 서버에서 받아온 데이터를 dprtSrchData 형식으로 파싱하는 함수
  export function parseDprtSrchData(rawData: any): DprtSrchData {
    const dprtsrchdata: DprtSrchData = {
      RSLT_CD: rawData.RSLT_CD || "", // 결과 코드, 없을 경우 빈 문자열
      DPRT_NM_INFO: [], // 학과명 아이템 배열 초기화
    };
  
    if (Array.isArray(rawData.DPRT_NM_INFO)) {
      dprtsrchdata.DPRT_NM_INFO = rawData.DPRT_NM_INFO.map((item: any) => {
        const dprtsrchItem: DprtSrchItem = {
          SCH_CD: typeof item.SCH_CD === "number" ? item.SCH_CD : 0, // 대학교 코드가 숫자인지 검사
          SCH_NM: typeof item.SCH_NM === "string" ? item.SCH_NM : "", // 대학교 이름이 문자열인지 검사
          DPRT_CD: typeof item.DPRT_CD === "number" ? item.DPRT_CD : 0, // 학과 코드가 숫자인지 검사
          DPRT_NM: typeof item.DPRT_NM === "string" ? item.DPRT_NM : "", // 학과 이름이 문자열인지 검사
        };
  
        return dprtsrchItem;
      });
    }
  
    return dprtsrchdata;
  }
  