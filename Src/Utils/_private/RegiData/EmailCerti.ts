export interface EmailEcodeTable {
  RSLT_CD?: string;
  CERT_SEQ?: string;
}

export function EmailEcodeParse(rawData: any): EmailEcodeTable {
  const emailparse: EmailEcodeTable = {
    RSLT_CD: rawData.RSLT_CD,
    CERT_SEQ: rawData.CERT_SEQ,
  };
  return emailparse;
}
