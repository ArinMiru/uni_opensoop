import { NavigationProp } from "@react-navigation/native";

type UserDataField = "MEMB_ID" | "PASS" | "NICK_NM" | "CERT_SEQ"  // 필요한 필드를 여기에 추가

export interface RegiDataType {
  MEMB_ID: string;
  PASS: string;
  NICK_NM: string;
  CERT_SEQ: string;
  // 다른 필드 정의
}

export const RegiUserData: RegiDataType = {
  MEMB_ID: "",
  PASS: "",
  NICK_NM: "",
  CERT_SEQ: "",
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
  RegiUserData[dataField] = value;
  navigation.navigate(nextScreen);
};

export default RegiUserData;
