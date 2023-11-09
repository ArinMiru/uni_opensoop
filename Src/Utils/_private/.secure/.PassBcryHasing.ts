import * as Crypto from "expo-crypto";

const globalSalt = "salt"; // 고정된 솔트 (모든 사용자에게 동일) 원래는 이러면 안됌. 랜덤 난수로 생성하여서 진행 하여야 함 생성된 난수는 DB에 저장

// 비밀번호와 고정된 솔트를 받아서 해싱된 비밀번호를 반환하는 함수
async function hashPassword(password: string, salt: string) {
  const digest = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256, // 해싱 알고리즘 선택
    password + salt // 비밀번호와 솔트를 연결하여 해싱
  );

  return digest;
}

// 사용자가 제공한 비밀번호를 해싱화하고 반환하는 함수
async function hashUserPassword(userPassword: string) {
  const hashedPassword = await hashPassword(userPassword, globalSalt);
  return hashedPassword;
}

// 비밀번호를 해싱화할 사용자 비밀번호 (예시)
const userPassword = "user_password";

// 비밀번호를 해싱화하고 결과를 출력
hashUserPassword(userPassword)
  .then((hashedPassword) => {
    console.log("해싱된 비밀번호:", hashedPassword);
  })
  .catch((error) => {
    console.error("비밀번호 해싱 오류:", error);
  });

export { hashUserPassword };
