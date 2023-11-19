import * as SecureStore from "expo-secure-store";
import * as Crypto from "expo-crypto";
import jwt from "expo-jwt";

// 비밀 키 생성
const generateRandomKey = async (length: number): Promise<string> => {
  const randomBytes = await Crypto.digestStringAsync(
    // 비밀 키를 생성하는 함수입니다.
    Crypto.CryptoDigestAlgorithm.SHA256, // Math.random().toString()을 해싱하여 랜덤한 문자열을 생성하고 반환합니다.
    Math.random().toString()
  );

  return randomBytes; // 생성된 랜덤 비밀 키를 반환합니다.
};

// JWT 생성 및 저장
export const createAndSaveJWTToken = async () => {
  try {
    const secretKey = await generateRandomKey(32); // 32바이트(256비트) 길이의 랜덤 비밀 키를 생성합니다.

    const user = { userId: "your_user_id" }; // 사용자 데이터를 객체로 정의합니다. 실제 사용자 데이터로 대체하세요.

    const jwtPayload = {
      ...user, // 사용자 데이터를 복사합니다.
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 90, // JWT 토큰의 만료 시간을 설정합니다 (현재 시간 + 3개월).
    };

    // JWT 토큰을 생성합니다. (사용자 데이터와 비밀 키를 사용)
    const token = jwt.encode(jwtPayload, secretKey);
    // JWT 토큰을 SecureStore를 사용하여 안전하게 저장합니다.
    await SecureStore.setItemAsync("jwtToken", token);
  
  } catch (error) {
  
  }
};

export const jwtTokenSave = async (jwtToken: string) => {
  try {
    await SecureStore.setItemAsync("JWTAutoLogin", jwtToken);
  } catch (error) {
    return null;
  }
};

export const checkStoredJWTToken = async () => {
  try {
    const storedToken = await SecureStore.getItemAsync("JWTAutoLogin");
    if (storedToken) {
      return storedToken;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
