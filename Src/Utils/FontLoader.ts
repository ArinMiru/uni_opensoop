import * as Font from "expo-font";

export async function loadCustomFonts() {
  await Font.loadAsync({
    NotoSans: require("../Assets/Fonts/NotoSans.ttf"),
  });
}
