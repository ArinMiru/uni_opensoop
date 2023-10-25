// UserData 인터페이스 정의
export interface UserData {
  MEMB_ID: any;
  RSLT_CD: string; // 로그인 처리에 대한 서버 응답 결과 코드
  LOGIN_ID: string; // 사용자의 로그인 아이디
  MEMB_NM: string; // 사용자의 이름
  MEMB_SC_CD: string; // 사용자의 학생 코드
  MEMB_DEP_CD: string; // 사용자의 학과 코드
  MEMB_NUM: string; // 사용자의 학번
  MEMB_SC_NM: string; // 사용자의 학생 구분 이름
  MEMB_DEP_NM: string; // 사용자의 학과 이름
  TIT_CD: string; // 사용자의 직책 코드
  TIT_NM: string; // 사용자의 직책 이름
  NICK_NM: string; // 사용자의 닉네임
  MEMB_GRA: string; // 사용자의 학년
  MEMB_EM: string; // 사용자의 이메일
  PROF_IMG_PATH: string; // 사용자의 프로필 이미지 경로
  COLL_CERT_IND: string; // 대학생 인증 여부
  LIST_UNIT_CNT: number; // LIST_UNIT_CNT 추가
  REQ_PAGE: number; // REQ_PAGE 추가
}

let userData: UserData | null = {
  MEMB_ID: null, // 또는 기본값을 지정하십시오.
  RSLT_CD: "",
  LOGIN_ID: "",
  MEMB_NM: "",
  MEMB_SC_CD: "",
  MEMB_DEP_CD: "",
  MEMB_NUM: "",
  MEMB_SC_NM: "",
  MEMB_DEP_NM: "",
  TIT_CD: "",
  TIT_NM: "",
  NICK_NM: "",
  MEMB_GRA: "",
  MEMB_EM: "",
  PROF_IMG_PATH: "",
  COLL_CERT_IND: "",
  LIST_UNIT_CNT: 10, // 항상 고정된 값
  REQ_PAGE: 1, // 항상 고정된 값
};

export function setUserData(data: UserData | null): void {
  // userData 설정 함수: 서버에서 받은 데이터로 userData를 설정
  userData = data;
}

export function getUserData(): UserData | null {
  // userData 가져오는 함수: 현재 저장된 userData 반환, 없으면 null 반환
  return userData;
}

export function createUserData(data: UserData): void {
  // 객체를 생성하여 데이터를 관리하는 함수
  userData = {
    ...data,
    LIST_UNIT_CNT: data.LIST_UNIT_CNT || 10, // 만약 data에 값이 없다면 10으로 설정
    REQ_PAGE: data.REQ_PAGE || 1, // 만약 data에 값이 없다면 1로 설정
  };
}
