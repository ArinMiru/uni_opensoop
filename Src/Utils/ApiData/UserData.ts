// 데이터 파싱
export interface UserData {
    RSLT_CD: string;
    LOGIN_ID: string;
    MEMB_NM: string;
    MEMB_SC_CD: string;
    MEMB_DEP_CD: string;
    MEMB_NUM: string;
    MEMB_SC_NM: string;
    MEMB_DEP_NM: string;
    TIT_CD: string;
    TIT_NM: string;
    NICK_NM: string;
    MEMB_EM: string;
    COLL_CERT_IND: string;
  }
  
  let userData: UserData | null = null;
  
  export function setUserData(data: UserData): void {
    userData = data;
  }
  
  export function getUserData(): UserData | null {
    return userData;
  }