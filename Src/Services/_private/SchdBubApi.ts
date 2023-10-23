import { AxiosResponse } from "axios";
import {
  SchdBubData,
  parseSchdBubData,
} from "../../Utils/_private/ApiData/SchdBubData";
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { sendApiData } from "./Api.config";

export const SchdBubListSvc = async (): Promise<SchdBubData | null> => {
  const endpoint = "/UNI/SchdBubListSvc";
  const userData = getUserData();

  if (userData !== null) {
    const { LOGIN_ID, MEMB_SC_CD, MEMB_DEP_CD, TIT_CD } = userData;
    const data = {
      LOGIN_ID,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
    };
    try {
      const result: AxiosResponse<any, any> | null = await sendApiData(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        const SchdBubData: SchdBubData = parseSchdBubData(result.data);
        return SchdBubData;
      } else {
        console.log("일정 데이터 가져오기 실패");
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
