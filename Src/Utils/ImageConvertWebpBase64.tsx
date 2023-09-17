import { AxiosResponse } from "axios";
import * as ImageManipulator from "expo-image-manipulator";
import * as FileSystem from "expo-file-system";
import { sendLoginCredentials } from "../Services/_private/Api.config";

async function convertToWebPAndEncode(imageUri: string) {
  try {
    // 이미지를 WebP 형식으로 변환합니다.
    const manipResult = await ImageManipulator.manipulateAsync(imageUri, [], {
      compress: 0.8,
      format: ImageManipulator.SaveFormat.WEBP,
    });

    const webpUri = manipResult.uri;

    // WebP 이미지를 Base64로 인코딩합니다.
    const base64Data = await FileSystem.readAsStringAsync(webpUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    /* ------------------------------------------------------------------------------- */

    // 인코딩된 문자열을 서버로 전송합니다.
    const serverResponse = await sendLoginCredentials("/UNI/OpenBubSvc", {
      image: base64Data,
    });

    if (serverResponse) {
      console.log("Server response:", serverResponse.data);
    } else {
      console.log("Failed to upload image to server");
    }

    return serverResponse;
  } catch (error) {
    console.error("Error during image manipulation:", error);
  }
}

/* ------------------------------------------------------------------------------- */

// 사용 예시 (@ArinMiru/김도원)
// 위 파일과 함수를 불러온 후에 아래 코드를 실행합니다.
// imageUri에서는 실제 이미지 경로만을 사용해야 합니다.
// 예를 들어, imageUri = "/image1.webp"와 같이 사용합니다.
//(단! 실제 이미지 경로는 서버에서 제공하는 경로여야 합니다.)
// 예를 들어, imageUri = "https://www.example.com/image1.webp"와 같이 사용하면 안됩니다.
// 이유는 이미 EndPoint가 서버 주소로 설정되어 있기 때문입니다.
// 즉, 이미지 경로를 서버 주소와 함께 사용하면, 서버 주소가 두 번 사용되기 때문에
// 서버 주소가 두 번 중복되어 사용되는 문제가 발생합니다.
// 따라서, 실제 이미지 파일 명만 사용해야 합니다.
// 이 코드는 실제로 실행되지 않습니다.
// 실제로 실행하려면 아래 코드를 복사하여 사용하세요.

const imageUri = "/image1.webp";
// 이 경로는 실제 이미지 파일 명으로 대체해야 합니다.
// 예를 들어, imageUri = "/(UUID-> 서버에서 이미지마다 random 값이 부여됨).webp"와 같이 사용합니다.
convertToWebPAndEncode(imageUri).then((response) => {
  // 서버 응답을 처리합니다.
});

/* ------------------------------------------------------------------------------- */
