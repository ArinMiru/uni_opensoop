export interface NoticePostData{
    PROC_TYPE : string;
    IMAGE_INFO: IMAGE_ITEM[];
}
export interface IMAGE_ITEM{
    FILE_BASE64: string;
    FILE_NM : string;
    IMG_SEQ: string;
}
