// NoticeData.ts

// 공지사항 데이터의 형식을 정의합니다.
export interface NoticeData {
  RSLT_CD: string;
  OPEN_BUB: NoticeItem[]; // OPEN_BUB 속성의 데이터 형식을 변경
}

// 공지사항 아이템의 형식을 정의합니다.
export interface NoticeItem {
  MEMB_ID: string;
  CRE_SEQ: string;
  TIT: string;
  CONT: string;
  LIKE_CNT: string;
  CRE_DAT: string;
  IMAGE_INFO: ImageInfo[];
}

// 이미지 정보의 형식을 정의합니다.
export interface ImageInfo {
  FILE_PATH: string;
  IMG_SEQ: string;
}

// parseNoticeData 함수를 수정합니다.
// NoticeData.ts

// ...

// 2차원 배열 데이터를 파싱하여 NoticeData 형식으로 반환하는 함수
export function parseNoticeData(rawData: any): NoticeData {
  const noticeData: NoticeData = {
    RSLT_CD: rawData.RSLT_CD || '', // RSLT_CD를 문자열로 초기화
    OPEN_BUB: [], // 빈 배열로 초기화
  };

  if (Array.isArray(rawData.OPEN_BUB)) {
    noticeData.OPEN_BUB = rawData.OPEN_BUB.map((item: any) => {
      const noticeItem: NoticeItem = {
        MEMB_ID: item.MEMB_ID || '',
        CRE_SEQ: item.CRE_SEQ || '',
        TIT: item.TIT || '',
        CONT: item.CONT || '',
        LIKE_CNT: item.LIKE_CNT || '',
        CRE_DAT: item.CRE_DAT || '',
        IMAGE_INFO: [],
      };

      if (Array.isArray(item.IMAGE_INFO)) {
        noticeItem.IMAGE_INFO = item.IMAGE_INFO.map((image: any) => ({
          FILE_PATH: image.FILE_PATH || '',
          IMG_SEQ: image.IMG_SEQ || '',
        }));
      }

      return noticeItem;
    });
  }

  return noticeData;
}
