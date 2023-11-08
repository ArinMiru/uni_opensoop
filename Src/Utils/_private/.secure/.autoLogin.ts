/**
 * 자동로그인
 * 23/11/6 장현빈 @binny 생성
 */

import JWT from "expo-jwt";
import { getRandomBytes } from "expo-crypto";
import AsyncStorage from "@react-native-async-storage/async-storage";

//비밀키 생성
const generateRandomKey = (length : number) : Buffer => {
    return getRandomBytes(length); //오류 발생
};

//JWT 생성
const createJWTToken = (payload : any, secretKey : Buffer, options: jwt.Options) : string => {
    return jwtsign(payload, secretKey, options); //jwtsign 부분에 뭐로 받아줘야하는지 모르겠음
}

const verifyJWTToken = (token : string, secretKey : Buffer) : any => {
    try {
        const decoded = JWT.decode(token, secretKey)
        return decoded;
    } catch (error) {
        return null;
    }
}

const secretKey = generateRandomKey(32);

const user = {}; // {} 안에 뭐가 들어가야하는지 감도 안 옴

const jwtOptions: jwt.Options = { //jwt 네임스페이스를 찾을 수 없다는데 뭔 소린지 해결이 안됌
    expiresIn: "3 months",
  };

const token = createJWTToken(user, secretKey, jwtOptions);

AsyncStorage.setItem("jwtToken", token)
    .then(() => {
        console.log("JWT 토큰이 로컬에 성공적으로 저장되었습니다.")
    })
    .catch((error) => {
        console.error("JWT 토큰 저장 오류: ", error)
    });

const storedToken = await AsyncStorage.getItem("jwtToken");
    if (storedToken) {
      const decodedToken = verifyJWTToken(storedToken, secretKey);
      if (decodedToken) {
        console.log("JWT 토큰 검증 성공:", decodedToken); //토큰이 있는 경우에는 토큰 사용이 가능
      } else {
        console.error("JWT 토큰 검증 실패: 토큰이 유효하지 않습니다."); //토큰이 생성되어있지 않거나 삭제되었을 경우 토큰 사용이 불가능
      }
    }