import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { sendApiData } from "./Api.config";
import { VoteData, parseVoteData } from "../../Utils/_private/ApiData/VoteData";
import { AxiosResponse } from "axios";

export const votBubListCall = async (): Promise<VoteData | null> => {
  const endpoint = "/UNI/VotBubListSvc";
  const userData = getUserData();

  if (userData !== null) {
    // userData가 null이 아닌 경우에만 요청 보내기

    // 고정된 값으로 설정
    const LIST_UNIT_CNT = 20; // 한 페이지에 표시할 공지사항 수
    const REQ_PAGE = 1; // 요청할 페이지 번호
    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;
    const data = {
      LOGIN_ID, // 사용자 아이디
      MEMB_SC_CD, // 사용자 학과 코드
      MEMB_DEP_CD, // 사용자 학부 코드
      TIT_CD, // 사용자 직책 코드
      LIST_UNIT_CNT, // 한 페이지에 표시할 공지사항 수
      REQ_PAGE, // 요청할 페이지 번호
    };

    try {
      // 서버에 공지사항 데이터 요청을 보내고 응답을 기다립니다.
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        // 서버 응답이 성공적이면 데이터를 파싱합니다.
        const voteData: VoteData = parseVoteData(result.data);
        console.log("성공");
        return voteData; // 파싱된 데이터를 반환합니다.
      } else {
        console.log("공지사항 데이터 가져오기 실패");
        return null;
      }
    } catch (error) {
      console.error("오류 발생:", error);
      return null;
    }
  } else {
    console.log("데이터를 가져올 수 없습니다.");
    return null;
  }
};