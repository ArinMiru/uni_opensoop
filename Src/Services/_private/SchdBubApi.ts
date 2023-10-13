import { AxiosResponse } from "axios";
import {
  SchdBubData,
  parseSchdBubData,
} from "../../Utils/_private/ApiData/SchdBubData";
import { getUserData } from "../../Utils/_private/ApiData/UserData";
import { sendLoginCredentials } from "./Api.config";

const userData = getUserData();

export const SchdBubListSvc = async (
  LOGIN_ID: string,
  MEMB_SC_CD: string,
  MEMB_DEP_CD: string,
  TIT_CD: string
): Promise<SchdBubData | null> => {
  const endpoint = "/UNI/SchdBubListSvc";

  if (userData !== null) {
    const data = {
      LOGIN_ID,
      MEMB_SC_CD,
      MEMB_DEP_CD,
      TIT_CD,
    };
    try {
      const result: AxiosResponse<any, any> | null = await sendLoginCredentials(
        endpoint,
        data
      );

      if (result !== null && result.data.RSLT_CD === "00") {
        const SchdBubData: SchdBubData = parseSchdBubData(result.data);
        console.log(SchdBubData);
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
