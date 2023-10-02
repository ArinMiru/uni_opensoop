import React from "react";
import { Text, View, TextInputProps, ButtonProps } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import { TouchableOpacity } from "react-native-gesture-handler";
import NoticePostStyles from "../../../Styles/ListStyles/NoticeStyles/NoticePostStyles";
import { OpenLikeButtton } from "./OpenButton";

//  프로퍼티 타입 정의
interface CommonProps extends TextInputProps {
  children?: React.ReactNode;
  MEMB_NM?: string;
  MEMB_CD?: string;
  MEMB_DEP_CD?: string;
  PostImage?: string;
  Title?: string;
  PostContent?: string;
  PostingTime?: string;
  postLike?: number;
  IconPress?: () => void;
  onPress?: () => void;
  navigation?: {
    navigate: (screenName: string) => void;
  };
}

interface CommonProps extends ButtonProps {
  children?: React.ReactNode;
  postLike?: number;
  IconPress?: () => void;
  onPress?: () => void;
  navigation?: {
    navigate: (screenName: string) => void;
  };
}

export const NoticePostBoxView: React.FC<CommonProps> = ({
  children,
  MEMB_NM, // 공지사항 멤버 이름
  MEMB_CD, // 공지사항 멤버 코드
  MEMB_DEP_CD,
  PostImage, // 공지사항 멤버 학과 코드
  Title, // 공지사항 제목
  PostContent, // 공지사항 내용
  PostingTime, // 공지사항 작성 시간
  postLike, // 공지사항 좋아요 수
  onPress,
  IconPress,
  ...props
}) => {
  // 파스칼 케이스 적용
  return (
    <View style={[NoticePostStyles.NoticePostBoxStyle]}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Text
          style={[
            textStyle.bold12,
            {
              color: "#1E232C",
              left: deviceWidth * 0.06,
            },
          ]}
        >
          안재경{MEMB_NM}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={[
              textStyle.bold11,
              {
                color: "#BDBDBD",
                left: deviceWidth * 0.06,
              },
            ]}
          >
            {MEMB_DEP_CD}
            {"  "}
          </Text>
          <Text
            style={[
              textStyle.bold11,
              {
                color: "#BDBDBD",
                left: deviceWidth * 0.06,
              },
            ]}
          >
            {MEMB_CD}
          </Text>
        </View>
      </View>
      <View
        style={[
          NoticePostStyles.NoticePostImageBoxStyle,
          { backgroundColor: "#999999" },
        ]}
      >
        {PostImage}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={[
              {
                flex: 1,
                flexDirection: "row",
                left: deviceWidth * 0.06,
              },
            ]}
          >
            <Text style={[textStyle.regular10, { color: "#1E232C" }]}>
              {Title}
            </Text>
            <TouchableOpacity>
              <Text style={[textStyle.regular10, { color: "#737373" }]}>
                {"  "}더보기
              </Text>
              {children}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignItems: "flex-start",
            left: deviceWidth * 0.06,
          }}
        >
          <OpenLikeButtton onPress={onPress} postLike={postLike} />
        </View>
        <View
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={[
              textStyle.bold08,
              { color: "#BDBDBD", right: deviceWidth * 0.06 },
            ]}
          >
            {PostingTime}
          </Text>
        </View>
      </View>
    </View>
  );
};
