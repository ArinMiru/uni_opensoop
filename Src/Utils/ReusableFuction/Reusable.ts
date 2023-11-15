import { useState } from "react";

export const handleItemPress = (creSeq: number) => {
  const [selectedCreSeq, setSelectedCreSeq] = useState(0);

  // 클릭할 때 선택된 CRE_SEQ 값을 상태에 저장합니다.
  setSelectedCreSeq(creSeq);

  console.log(selectedCreSeq); // 선택된 CRE_SEQ를 출력
};

export interface RSLT_TABLE {
  RSLT_CD : string
}
