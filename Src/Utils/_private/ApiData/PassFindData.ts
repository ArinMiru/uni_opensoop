import { NavigationProp } from "@react-navigation/native";

/**
 * 비밀번호 찾기 데이터
 * 최서은 @holly1017 생성
 */

type UserDataField = "MEMB_ID" | "CERT_SEQ" | "MEMB_EM" ; // 필요한 필드를 여기에 추가

export interface PassFindDataType {
  MEMB_ID: string;
  CERT_SEQ: string;
  MEMB_EM: string;
  // 다른 필드 정의
}

export const PassFindData: PassFindDataType = {
  MEMB_ID: "",
  CERT_SEQ: "",
  MEMB_EM: "",
  // 다른 필드 초기화
};
/**
 * 회원가입 각 스크린 별 사용자 입력 데이터 저장 및 네비게이션 이동 공통 함수
 * @param dataField
 * @param value
 * @param navigation
 * @param nextScreen
 */
export const setUserDataAndNavigate = (
  dataField: UserDataField,
  value: string,
  navigation: NavigationProp<any>,
  nextScreen: string
): void => {
  PassFindData[dataField] = value;
  navigation.navigate(nextScreen);
};

export default PassFindData;

/**---------------------------------------------- */

/** @jhbinny 생성 */
/** @ArinMiru 패치 충돌 해결(23.10.03) */
export interface MembPassDataType {
  MEMB_ID: string;
  PASS: string;
} //다른 필드 정의

export const MembPassUpdSvc: MembPassDataType = {
  MEMB_ID: "",
  PASS: "",
}; //다른 필드 초기화

/**---------------------------------------------- */
