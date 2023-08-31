import { Platform, Dimensions } from "react-native";        // Platform , Dimensions 사용 위해 선언

const { width, height } = Dimensions.get("window");         // 기기의 해상도 정보를 가져옴

export const currentPlatform: string = Platform.OS;         // 플랫폼 정보 가져오기
export const deviceWidth: number = width;                   // 기기의 가로 길이 가져오기
export const deviceHeight: number = height;                 // 기기의 세로 길이 가져오기
