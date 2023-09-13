import * as Font from "expo-font";

export async function loadCustomFonts() {
  await Font.loadAsync({
    Medium: require("../Assets/Fonts/NotoSansKR-Medium.ttf"),
    SemiBold: require("../Assets/Fonts/NotoSansKR-SemiBold.ttf"),
    Bold: require("../Assets/Fonts/NotoSansKR-Bold.ttf"),
    Regular: require("../Assets/Fonts/NotoSansKR-Regular.ttf"),
  });
}
