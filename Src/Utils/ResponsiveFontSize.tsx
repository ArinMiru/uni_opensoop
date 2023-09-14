import {
  deviceHeight,
  deviceWidth,
  currentPlatform,
} from "../Utils/DeviceUtils";

export const responsiveFontSize = (fontSize: number): number => {
  const standardScreenHeight = 1334; // iPhone SE 2의 해상도 높이
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};
