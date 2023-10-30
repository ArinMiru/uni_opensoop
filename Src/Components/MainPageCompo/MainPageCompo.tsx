import React from "react";
import { useState, useEffect } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import textStyle from "../../Styles/TextStyle";
import { deviceWidth } from "../../Utils/DeviceUtils";
import MainPageStyles from "../../Styles/MainPageStyles/MainPageStyles";
import { MainOpenLikeStatus } from "../IconCompo/OpenLikeStatus";

interface ButtonProps {
  children?: React.ReactNode;
  Title?: string;
  F_Open_Tit?: string;
  S_Open_Tit?: string;
  F_Open_Photo?: string;
  S_Open_Photo?: string;
  F_Open_MEMB_NM?: string;
  F_Open_DEP_NM?: string;
  S_Open_MEMB_NM?: string;
  S_Open_DEP_NM?: string;
  MEMB_NM?: string;
  MEMB_DEP_NM?: string;
  TIT_NM?: string;
  F_TIT_NM?: string;
  S_TIT_NM?: string;
  OpenPostLike?: number;
  F_OpenPostLike?: number;
  S_OpenPostLike?: number;
  F_VOT_TIT?: string;
  S_VOT_TIT?: string;
  VOT_TOT?: number;
  F_VOT_TOT?: number;
  S_VOT_TOT?: number;
  VOT_GO_CD?: string;
  F_VOT_GO_CD?: string;
  S_VOT_GO_CD?: string;
  F_SCHD_TIT?: string;
  S_SCHD_TIT?: string;
  F_STRT_SCHD_YMD?: string;
  F_END_SCHD_YMD?: string;
  S_STRT_SCHD_YMD?: string;
  S_END_SCHD_YMD?: string;
  STRT_SCHD_YMD?: string;
  END_SCHD_YMD?: string;
  morePress?: () => void;
  onPress?: () => void;
  onPressPhoto?: () => void;
  onPressOpenBubTitle?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

export const MainSchdBub: React.FC<ButtonProps> = ({
  navigation,
  onPress,
  Title,
  F_SCHD_TIT,
  S_SCHD_TIT,
  F_STRT_SCHD_YMD,
  F_END_SCHD_YMD,
  S_STRT_SCHD_YMD,
  S_END_SCHD_YMD,
}) => {
  const [firstTextWidth, setFirstTextWidth] = useState(0);
  const [secondTextWidth, setSecondTextWidth] = useState(0);

  const handleFirstTextLayout = (event: any) => {
    const width = event.nativeEvent.layout.width;
    setFirstTextWidth(width);
  };

  const handleSecondTextLayout = (event: any) => {
    const width = event.nativeEvent.layout.width;
    setSecondTextWidth(width);
  };

  const totalWidth = deviceWidth - deviceWidth * 0.05; // 전체 사용 가능한 너비 (양쪽 마진 포함)
  let availableSpace = totalWidth - (firstTextWidth + secondTextWidth); // 두 텍스트 사이의 사용 가능한 공간

  if (F_SCHD_TIT && F_SCHD_TIT.length >= 9) {
    availableSpace -= 35;
  }

  if (S_SCHD_TIT && S_SCHD_TIT.length >= 9) {
    availableSpace -= 35;
  }

  const generateMiddleText = (space: number) => {
    const dashWidth = 6;
    const numOfDashes = Math.floor(space / dashWidth);
    return "-".repeat(numOfDashes);
  };

  const middleText = generateMiddleText(availableSpace);

  useEffect(() => {
    // 상태 업데이트 후 컴포넌트를 다시 렌더링
  }, [firstTextWidth, secondTextWidth]);

  return (
    <View style={[MainPageStyles.MainSchdlContentBox]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: deviceWidth * 0.009,
        }}
      >
        <Text
          style={[
            textStyle.bold16,
            { color: "#333333" },
            { marginLeft: deviceWidth * 0.05 },
          ]}
        >
          {"일정"}
        </Text>
        <View
          style={{
            marginRight: deviceWidth * 0.05,
          }}
        >
          <TouchableOpacity onPress={onPress}>
            <Text style={[textStyle.semibold10, { color: "#4BB781" }]}>
              {"더보기"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.5, flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
          <Text
            onLayout={handleFirstTextLayout}
            style={[
              textStyle.medium10,
              { color: "#151515" },
              { marginLeft: deviceWidth * 0.05 },
            ]}
          >
            {F_STRT_SCHD_YMD}
            {" ~ "}
            {F_END_SCHD_YMD}
          </Text>
          <Text
            style={[
              textStyle.semibold08,
              { color: "#919191" },
              { marginLeft: deviceWidth * 0.09 },
            ]}
          >
            {middleText}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
          <Text
            onLayout={handleSecondTextLayout}
            style={[
              textStyle.semibold08,
              { color: "#424C43" },
              { marginRight: deviceWidth * 0.051 },
            ]}
          >
            {F_SCHD_TIT}
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.5, flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
          <Text
            onLayout={handleFirstTextLayout}
            style={[
              textStyle.medium10,
              { color: "#151515" },
              { marginLeft: deviceWidth * 0.05 },
            ]}
          >
            {S_STRT_SCHD_YMD}
            {" ~ "}
            {S_END_SCHD_YMD}
          </Text>
          <Text
            style={[
              textStyle.semibold08,
              { color: "#919191" },
              { marginLeft: deviceWidth * 0.09 },
            ]}
          >
            {middleText}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
          <Text
            onLayout={handleSecondTextLayout}
            style={[
              textStyle.semibold08,
              { color: "#424C43" },
              { marginRight: deviceWidth * 0.051 },
            ]}
          >
            {S_SCHD_TIT}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const MainSchdNoBox: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <View
      style={[
        MainPageStyles.MainSchdlContentBox,
        { justifyContent: "flex-start" },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: deviceWidth * 0.009,
        }}
      >
        <Text
          style={[
            textStyle.bold16,
            { color: "#333333" },
            { marginLeft: deviceWidth * 0.05 },
          ]}
        >
          {"일정"}
        </Text>
        <View
          style={{
            marginRight: deviceWidth * 0.05,
          }}
        >
          <TouchableOpacity onPress={onPress}>
            <Text style={[textStyle.semibold10, { color: "#4BB781" }]}>
              {"더보기"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 0.8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={[textStyle.semibold11, { color: "#181D27" }]}>
          {"오늘 일정이 없습니다."}
        </Text>
      </View>
    </View>
  );
};

export const MainVoteBub: React.FC<ButtonProps> = ({
  navigation,
  onPress,
  F_VOT_TIT,
  S_VOT_TIT,
  F_VOT_GO_CD,
  S_VOT_GO_CD,
  F_VOT_TOT,
  S_VOT_TOT,
}) => {
  const getVoteStatusStyle = (VOT_GO_CD?: string) => {
    let textStyleResult: any[] = [textStyle.semibold08];
    let textContent: string = ""; // 텍스트 내용을 저장할 변수

    switch (VOT_GO_CD) {
      case "VG":
        textStyleResult.push({ color: "#4BB781" });
        textContent = "투표중";
        break;
      case "VF":
        textStyleResult.push({ color: "#C3C3C3" });
        textContent = "투표종료";
        break;
      default:
        textContent = "오류"; // 만약 VG나 VF가 아닐 경우의 기본 텍스트
        break;
    }

    return { style: textStyleResult, text: textContent };
  };

  const firstVoteStatus = getVoteStatusStyle(F_VOT_GO_CD);
  const secondVoteStatus = getVoteStatusStyle(S_VOT_GO_CD);

  return (
    <View style={[MainPageStyles.MainVotContentsBox]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: deviceWidth * 0.009,
        }}
      >
        <Text
          style={[
            textStyle.bold16,
            { color: "#333333" },
            { marginLeft: deviceWidth * 0.05 },
          ]}
        >
          {"투표"}
        </Text>
        <View
          style={{
            marginRight: deviceWidth * 0.05,
          }}
        >
          <TouchableOpacity onPress={onPress}>
            <Text style={[textStyle.semibold10, { color: "#4BB781" }]}>
              {"더보기"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.5, flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
          <Text
            style={[
              textStyle.medium11,
              { color: "#151515" },
              { marginLeft: deviceWidth * 0.05 },
            ]}
          >
            {F_VOT_TIT}
          </Text>
          <Text
            style={[
              textStyle.semibold08,
              { color: "#919191" },
              { marginLeft: deviceWidth * 0.02 },
            ]}
          >
            {"총 득표 수"} {F_VOT_TOT} {"명"}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
          <Text
            style={[
              ...firstVoteStatus.style,
              { marginRight: deviceWidth * 0.051 },
            ]}
          >
            {firstVoteStatus.text}
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.5, flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
          <Text
            style={[
              textStyle.medium11,
              { color: "#151515" },
              { marginLeft: deviceWidth * 0.05 },
            ]}
          >
            {S_VOT_TIT}
          </Text>
          <Text
            style={[
              textStyle.semibold08,
              { color: "#919191" },
              { marginLeft: deviceWidth * 0.02 },
            ]}
          >
            {"총 득표 수"} {S_VOT_TOT} {"명"}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
          <Text
            style={[
              ...secondVoteStatus.style,
              { marginRight: deviceWidth * 0.051 },
            ]}
          >
            {secondVoteStatus.text}
          </Text>
        </View>
      </View>
    </View>
  );
};

/*
 * 메인 페이지에서 공지사항 게시물로 넘어갈 수 있고 공지사항을 볼 수 있는 버튼입니다.
 **/
export const MainOpenBub: React.FC<ButtonProps> = ({
  children,
  Title,
  F_Open_Tit,
  S_Open_Tit,
  F_Open_Photo,
  S_Open_Photo,
  F_Open_MEMB_NM,
  S_Open_MEMB_NM,
  F_Open_DEP_NM,
  S_Open_DEP_NM,
  F_TIT_NM,
  S_TIT_NM,
  F_OpenPostLike,
  S_OpenPostLike,
  MEMB_NM,
  MEMB_DEP_NM,
  TIT_NM,
  OpenPostLike,
  onPress,
  onPressPhoto,
  onPressOpenBubTitle,
}) => {
  return (
    <View style={[MainPageStyles.MainOpenContentsBox]}>
      <View
        style={{
          flex: 0.4,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={[
            textStyle.bold16,
            { color: "#333333" },
            { marginLeft: deviceWidth * 0.05 },
          ]}
        >
          {"공지사항"}
        </Text>
        <View
          style={{
            marginRight: deviceWidth * 0.05,
          }}
        >
          <TouchableOpacity onPress={onPress}>
            <Text style={[textStyle.semibold10, { color: "#4BB781" }]}>
              {"더보기"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View
            style={[
              MainPageStyles.MainOpenBox,
              { alignItems: "center" },
              { flexDirection: "row" },
            ]}
          >
            <TouchableOpacity onPress={onPressPhoto}>
              <View style={[MainPageStyles.MainOpenPhotoBox]}>
                {F_Open_Photo}
              </View>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  marginLeft: deviceWidth * 0.025,
                }}
              >
                <TouchableOpacity onPress={onPressOpenBubTitle}>
                  <Text style={[textStyle.medium10, { color: "#121212" }]}>
                    {F_Open_Tit}
                    {/**공지사항 제목 */}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <View
                    style={{
                      alignItems: "flex-start",
                      marginLeft: deviceWidth * 0.025,
                    }}
                  >
                    <Text style={[textStyle.bold09, { color: "#121212" }]}>
                      {F_Open_MEMB_NM}
                      {/**공지사항 작성자 */}
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        alignItems: "flex-start",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginLeft: deviceWidth * 0.025,
                      }}
                    >
                      <Text style={[textStyle.bold08, { color: "#919191" }]}>
                        {F_Open_DEP_NM} {F_TIT_NM}
                        {/**공지사항 작성자 학과, 직책 */}
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <MainOpenLikeStatus openpostLike={F_OpenPostLike} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/**----------------------------------------------------------------- */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View
            style={[
              MainPageStyles.MainOpenBox,
              { alignItems: "center" },
              { flexDirection: "row" },
            ]}
          >
            <TouchableOpacity onPress={onPressPhoto}>
              <View style={[MainPageStyles.MainOpenPhotoBox]} />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  marginLeft: deviceWidth * 0.025,
                }}
              >
                <TouchableOpacity onPress={onPressOpenBubTitle}>
                  <Text style={[textStyle.medium10, { color: "#121212" }]}>
                    {S_Open_Tit}
                    {/**공지사항 제목 */}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <View
                    style={{
                      alignItems: "flex-start",
                      marginLeft: deviceWidth * 0.025,
                    }}
                  >
                    <Text style={[textStyle.bold09, { color: "#121212" }]}>
                      {S_Open_MEMB_NM}
                      {/**공지사항 작성자 */}
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        alignItems: "flex-start",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginLeft: deviceWidth * 0.025,
                      }}
                    >
                      <Text style={[textStyle.bold08, { color: "#919191" }]}>
                        {S_Open_MEMB_NM} {S_TIT_NM}
                        {/**공지사항 작성자 학과, 직책 */}
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <MainOpenLikeStatus openpostLike={S_OpenPostLike} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
