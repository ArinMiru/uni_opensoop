import * as Crypto from "expo-crypto";

const globalSalt = "ptu2023@KIMRYUAHNLEEJANGJUNGCHOI"; // 고정된 솔트 (모든 사용자에게 동일) 원래는 이러면 안됌. 랜덤 난수로 생성하여서 진행 하여야 함 생성된 난수는 DB에 저장

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
export { hashUserPassword };

{
  /**
import * as Crypto from 'expo-crypto';
import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid'; // expo에서 제공하는 uuid 라이브러리 설치해야함

async function saveUserSalt(userId: string): Promise<string> {
  const salt = uuidv4();
  await SecureStore.setItemAsync(userId, salt);
  return salt;
}

async function hashPasswordOnSignUp(password: string, userId: string): Promise<string> {
  const salt = await saveUserSalt(userId);
  const digest = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    password + salt
  );
  return digest;
}

async function hashPasswordOnLogin(password: string, userId: string): Promise<string> {
  const salt = await SecureStore.getItemAsync(userId);
  if (!salt) {
    throw new Error('솔트 값이 존재하지 않습니다.');
  }
  const digest = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    password + salt
  );
  return digest;
}

export { hashPasswordOnSignUp, hashPasswordOnLogin };

*/
}
