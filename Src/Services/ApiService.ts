import { serverConnection } from "./Api.config";

export async function fetchData() {                 // fetchDate 함수 생성
  const result = await serverConnection();          // Api.config 내부 호출
  console.log(result);
}

fetchData();
