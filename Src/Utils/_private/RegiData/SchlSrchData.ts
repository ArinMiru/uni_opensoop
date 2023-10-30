// 대학교명 데이터의 전체 형식을 정의하는 SchlSrchData 인터페이스
export interface SchlSrchData {
  RSLT_CD: string; // 결과 코드
  SCH_NM_INFO: SchlSrchItem[]; // 대학교명 아이템 배열
}

// 대학교명 하나의 형식을 정의하는 SchlSrchItem 인터페이스
export interface SchlSrchItem {
  SCH_CD: number; // 대학교 코드
  SCH_NM: string; // 대학교 이름
}

// 서버에서 받아온 데이터를 SchlSrchData 형식으로 파싱하는 함수
export function parseSchlSrchData(rawData: any): SchlSrchData {
  const schlsrchdata: SchlSrchData = {
    RSLT_CD: rawData.RSLT_CD || "", // 결과 코드, 없을 경우 빈 문자열
    SCH_NM_INFO: [], // 대학교명 아이템 배열 초기화
  };

  if (Array.isArray(rawData.SCH_NM_INFO)) {
    schlsrchdata.SCH_NM_INFO = rawData.SCH_NM_INFO.map((item: any) => {
      const schlsrchItem: SchlSrchItem = {
        SCH_CD: typeof item.SCH_CD === "number" ? item.SCH_CD : 0, // 대학교 코드가 숫자인지 검사
        SCH_NM: typeof item.SCH_NM === "string" ? item.SCH_NM : "", // 대학교 이름이 문자열인지 검사
      };

      return schlsrchItem;
    });
  }

  return schlsrchdata;
}
