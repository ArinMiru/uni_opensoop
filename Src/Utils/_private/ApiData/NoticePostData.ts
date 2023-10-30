interface ImageInfo {
    FILE_BASE64: string;
    FILE_NM: string;
    IMG_SEQ: number;
  }
  
  interface OpenBubSvcData {
    LOGIN_ID: string;
    MEMB_DEP_CD: string;
    MEMB_SC_CD: string;
    TIT_CD: string;
    PROC_TYPE: string;
    TIT: string;
    CONT: string;
    IMAGE_INFO: ImageInfo[];
  }