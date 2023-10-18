import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import textStyle from "../../Styles/TextStyle";
import { deviceWidth } from "../../Utils/DeviceUtils";
import MainPageStyles from "../../Styles/MainPageStyles/MainPageStyles";
import { MainOpenLikeStatus } from "../IconCompo/OpenLikeStatus";

interface ButtonProps {
  children?: React.ReactNode;
  Title?: string;
  MEMB_NM?: string;
  MEMB_DEP_NM?: string;
  TIT_NM?: string;
  OpenPostLike?: number;
  morePress?: () => void;
  onPress?: () => void;
  onPressPhoto?: () => void;
  onPressOpenBubTitle?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/*
 * 메인 페이지에서 공지사항 게시물로 넘어갈 수 있고 공지사항을 볼 수 있는 버튼입니다.
 **/
export const MainOpenBub: React.FC<ButtonProps> = ({
  children,
  Title,
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
                    {Title}
                    {/**공지사항 제목 */}
                  </Text>
                </TouchableOpacity>
              </View>
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
                    {MEMB_NM}
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
                      {MEMB_DEP_NM} {TIT_NM}
                      {/**공지사항 작성자 학과, 직책 */}
                    </Text>
                    <MainOpenLikeStatus openpostLike={OpenPostLike} />
                  </View>
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
                    {Title}
                    {/**공지사항 제목 */}
                  </Text>
                </TouchableOpacity>
              </View>
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
                    {MEMB_NM}
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
                      {MEMB_DEP_NM} {TIT_NM}
                      {/**공지사항 작성자 학과, 직책 */}
                    </Text>
                    <MainOpenLikeStatus openpostLike={OpenPostLike} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
