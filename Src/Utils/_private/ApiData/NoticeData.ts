// 공지사항 데이터의 전체 형식을 정의하는 NoticeData 인터페이스
export interface NoticeData {
  RSLT_CD?: string; // 결과 코드
  OPEN_BUB: NoticeItem[]; // 공지사항 아이템 배열
}

// 공지사항 하나의 형식을 정의하는 NoticeItem 인터페이스
export interface NoticeItem {
  MEMB_ID: string; // 회원 아이디
  MEMB_NM: string; // 회원 이름
  MEMB_SC_CD: string; // 회원 학과 코드
  MEMB_DEP_CD: string; // 회원 학부 코드
  CRE_SEQ: number; // 공지사항 일련번호 (순서)
  TIT: string; // 공지사항 제목
  CONT: string; // 공지사항 내용
  LIKE_CNT: number; // 공지사항 좋아요 수
  CRE_DAT: string;
  MEMB_SC_NM: string;
  MEMB_DEP_NM: string; // 공지사항 작성 일자
  TIT_NM: string; // 공지사항 작성자 직책명
  NICK_NM: string; // 공지사항 작성자 닉네임
  IMAGE_INFO: ImageInfo[]; // 이미지 정보 배열
}

// 이미지 정보를 정의하는 ImageInfo 인터페이스
export interface ImageInfo {
  FILE_PATH: string; // 파일 경로
  IMG_SEQ: string; // 이미지 일련번호
}

// 서버에서 받아온 데이터를 NoticeData 형식으로 파싱하는 함수
export function parseNoticeData(rawData: any): NoticeData {
  const noticeData: NoticeData = {
    RSLT_CD: rawData.RSLT_CD || "", // 결과 코드, 없을 경우 빈 문자열
    OPEN_BUB: [], // 공지사항 아이템 배열 초기화
  };

  if (Array.isArray(rawData.OPEN_BUB)) {
    noticeData.OPEN_BUB = rawData.OPEN_BUB.map((item: any) => {
      const noticeItem: NoticeItem = {
        MEMB_ID: item.MEMB_ID || "", // 회원 아이디, 없을 경우 빈 문자열
        MEMB_NM: item.MEMB_NM || "", // 회원 이름, 없을 경우 빈 문자열
        MEMB_SC_CD: item.MEMB_SC_CD || "", // 회원 학과 코드, 없을 경우 빈 문자열
        MEMB_DEP_CD: item.MEMB_DEP_CD || "", // 회원 학부 코드, 없을 경우 빈 문자열
        CRE_SEQ: typeof item.CRE_SEQ === "number" ? item.CRE_SEQ : 0, // 숫자로 변환, 없을 경우 0
        TIT: item.TIT || "", // 공지사항 제목, 없을 경우 빈 문자열
        CONT: item.CONT || "", // 공지사항 내용, 없을 경우 빈 문자열
        LIKE_CNT: typeof item.LIKE_CNT === "number" ? item.LIKE_CNT : 0, // 숫자로 변환, 없을 경우 0
        CRE_DAT: item.CRE_DAT || "", // 작성 일자, 없을 경우 빈 문자열
        MEMB_SC_NM: item.MEMB_SC_NM || "", // 작성자 학교 이름
        MEMB_DEP_NM: item.MEMB_DEP_NM || "", // 작성자 학과 이름
        TIT_NM: item.TIT_NM || "", // 작성자 직책명, 없을 경우 빈 문자열
        NICK_NM: item.NICK_NM || "", // 작성자 닉네임, 없을 경우 빈 문자열
        IMAGE_INFO: [], // 이미지 정보 배열 초기화
      };

      if (Array.isArray(item.IMAGE_INFO)) {
        noticeItem.IMAGE_INFO = item.IMAGE_INFO.map((image: any) => ({
          FILE_PATH: image.FILE_PATH || "", // 파일 경로, 없을 경우 빈 문자열
          IMG_SEQ: image.IMG_SEQ || "", // 이미지 일련번호, 없을 경우 빈 문자열
        }));
      }

      return noticeItem;
    });
  }

  return noticeData;
}
