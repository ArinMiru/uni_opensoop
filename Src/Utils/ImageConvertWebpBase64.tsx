import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';

async function convertToWebPAndEncode(imageUri: string) {
  try {
    // 이미지를 WebP 형식으로 변환합니다.
    const manipResult = await ImageManipulator.manipulateAsync(
      imageUri,
      [],
      {
        compress: 0.8,
        format: ImageManipulator.SaveFormat.WEBP
      }
    );

    const webpUri = manipResult.uri;

    // WebP 이미지를 Base64로 인코딩합니다.
    const base64Data = await FileSystem.readAsStringAsync(webpUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // 서버로 전송하거나 저장할 수 있습니다.
    console.log("Base64 Encoded WebP:", base64Data);
    return base64Data;

  } catch (error) {
    console.error("Error during image manipulation:", error);
  }
}

// 사용 예시
const imageUri = "file:///path/to/your/image.jpg"; // 이 경로는 실제 이미지 경로로 대체해야 합니다.
convertToWebPAndEncode(imageUri).then((base64WebP) => {
  // 서버로 base64WebP를 전송하거나 다른 작업을 수행합니다.
});
