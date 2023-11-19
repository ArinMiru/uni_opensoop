import React, { useEffect, useState } from "react";
import { View, KeyboardAvoidingView, Text, Alert } from "react-native";
import { BackIconRegiTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import {
  OpenFreSgsTitInputBox,
  OpenFreSgsContInputBox,
} from "../../../Components/ListCompo/ListCommonCompo/ListCommonInput";
import {
  OpenPhotoButton,
  OpenPhotoComboBox,
} from "../../../Components/ListCompo/OpenCompo/OpenButton";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { openBubSvcUpdate } from "../../../Services/_private/NoticeApi";
import { Background } from "../../../Components/AllCompo/Background";

import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import ListInputBoxStyle from "../../../Styles/ListStyles/ListInputBoxStyle";
import TextStyle from "../../../Styles/TextStyle";
import { NoticeEditProps } from "../../../Utils/NavigationProp/NavigationDetailScrProp";
import { CommonActions } from "@react-navigation/native";

/** [02, 03, 05] TIT_CD에 해당하는 사용자만 접근 가능 페이지 */

const NoticeEditPage: React.FC<NoticeEditProps> = ({ navigation, route }) => {
  const { CRE_SEQ, TIT, CONT, ImageInfo } = route.params;
  const [photoButtonClicked, setphotoButtonClicked] = React.useState(false);
  const userData = getUserData();
  const [cont, setCont] = useState<string>(CONT);
  const [tit, setTit] = useState<string>(TIT);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [imageUris, setImageUris] = useState<string[]>([]);



  useEffect(() => {
    if (ImageInfo && ImageInfo.length > 0) {
      const initialImageUris = ImageInfo.map((image) => image.FILE_BASE64);
      setImageUris(initialImageUris);
    }
  }, []);

  const encodeImageToBase64 = async (imageUri: string) => {
    try {
      if (!imageUri) {
        return null;
      }

      const response = await fetch(imageUri);
      const blob = await response.blob();

      const base64Data: string = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
      });

      return base64Data;
    } catch (error) {
     
      return null;
    }
  };

  const handleRegiButtonPress = async () => {
    try {
      if (!userData) {
      
        return;
      }

      const TIT = tit;
      const CONT = cont;

      const IMAGE_INFO: ImageInfo[] = [];

      for (let i = 0; i < imageUris.length; i++) {
        const imageUri = imageUris[i];
        if (imageUri) {
          const imageBase64 = await encodeImageToBase64(imageUri);
          if (imageBase64 !== null) {
            IMAGE_INFO.push({
              FILE_BASE64: imageBase64,
              FILE_NM: "image.webp",
              IMG_SEQ: 0,
            });
          }
        }
      }

      const result = await openBubSvcUpdate(TIT, CONT, IMAGE_INFO, CRE_SEQ);
      if (result && result.RSLT_CD === "00") {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "BottomTabNavigations",
                state: {
                  routes: [
                    {
                      name: "NoticePage",
                      params: { newPageload: true },
                    },
                  ],
                },
              },
            ],
          })
        );
        Alert.alert("성공", "공지사항 수정 성공");
      }
    } catch (error) {
     
    }
  };

  const uploadImage = async () => {
    if (imageUris.length >= 4) {
      Alert.alert("경고", "이미지는 최대 4개까지 가능 합니다.");
      return;
    }
    if (!status?.granted) {
      const permissions = await requestPermission();
      if (!permissions.granted) {
        return null;
      }
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
    });
    if (result.canceled) {
      return null;
    }

    const resizedImage = await ImageManipulator.manipulateAsync(
      result.assets[0].uri,
      [],
      { format: ImageManipulator.SaveFormat.JPEG }
    );

    setImageUris((prevImageUris) => [...prevImageUris, resizedImage.uri]);
  };

  const deleteImage = (index: number) => {
    const newImageUris = [...imageUris];
    newImageUris.splice(index, 1);
    setImageUris(newImageUris);
  };

  return (
    <Background>
      <BackIconRegiTopbarStyle
        Title="공지사항 수정"
        MEMB_SC_NM={userData?.MEMB_SC_NM || ""}
        MEMB_DEP_NM={userData?.MEMB_DEP_NM || ""}
        onPress={() => navigation.goBack()}
        onPressRegi={handleRegiButtonPress}
      />
      <View style={[NewBackgroundStyle.OnlyTopRadiusBackgroundStyle]}>
        {/* 첫 번째 뷰 */}
        <View
          style={{
            flex: 1.5,
            width: deviceWidth * 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={ListInputBoxStyle.FreQstOpenTitInputBoxStyle}>
            <OpenFreSgsTitInputBox
              text="제목을 입력하세요"
              value={tit}
              onChangeText={(text) => setTit(text)}
            ></OpenFreSgsTitInputBox>
            <Text
              style={[
                TextStyle.semibold08,
                { color: "#919191", alignSelf: "flex-end", paddingTop: "2%" },
              ]}
            >
              최소 5자 / 최대 30자
            </Text>
          </View>
        </View>

        {/* 두 번째 뷰 */}
        <KeyboardAvoidingView
          style={{
            flex: 1.7,
            width: deviceWidth * 1,
            height: "auto",
            alignItems: "center",
          }}
          behavior="padding"
          enabled
        >
          <View style={ListInputBoxStyle.FreQstOpenContInputBoxStyle}>
            <OpenFreSgsContInputBox
              text="텍스트를 입력해주세요."
              value={cont}
              onChangeText={(text) => setCont(text)}
            ></OpenFreSgsContInputBox>
            <Text
              style={[
                TextStyle.semibold08,
                { color: "#919191", alignSelf: "flex-end", paddingTop: "2%" },
              ]}
            >
              최소 10자
            </Text>
          </View>
        </KeyboardAvoidingView>

        {/* 세 번째 뷰 */}
        <View
          style={{
            flex: 1.5,
            width: deviceWidth * 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {photoButtonClicked ? (
            <OpenPhotoComboBox
              onPress={() => {
                uploadImage();
              }}
              selectedImage={imageUris}
              onPressDelPhoto={(index) => deleteImage(index)}
            />
          ) : (
            <View
              style={{
                flex: 1.5,
                width: deviceWidth * 1,
                justifyContent: "flex-start",
                alignItems: "flex-end",
              }}
            >
              <OpenPhotoButton
                onPress={() => setphotoButtonClicked(!photoButtonClicked)}
              />
            </View>
          )}
        </View>

        {/* 네 번째 뷰 */}
        <View style={{ flex: 2 }}></View>
      </View>
    </Background>
  );
};

export default NoticeEditPage;
