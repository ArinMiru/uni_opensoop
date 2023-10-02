import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import textStyle from "../../../Styles/TextStyle";
import { deviceWidth } from "../../../Utils/DeviceUtils";
import NoticePostStyles from "../../../Styles/ListStyles/NoticeStyles/NoticePostStyles";
import { OpenLikeButtton } from "./OpenButton";
// import ReadMore from "react-native-read-more-text"; @jhbinny

//  프로퍼티 타입 정의
interface CommonProps {
  MEMB_NM?: string;
  MEMB_CD?: string;
  MEMB_DEP_CD?: string;
  PostImage?: string;
  Title?: string;
  PostContent?: string;
  PostingTime?: string;
  postLike?: number;
  onPress?: () => void;
  children?: React.ReactNode;
}

export const NoticePostBoxView: React.FC<CommonProps> = ({
  MEMB_NM, // 공지사항 멤버 이름
  MEMB_CD, // 공지사항 멤버 코드
  MEMB_DEP_CD,
  PostImage, // 공지사항 멤버 학과 코드
  Title, // 공지사항 제목
  PostContent, // 공지사항 내용
  PostingTime, // 공지사항 작성 시간
  postLike, // 공지사항 좋아요 수
  onPress,
  children,
}) => {
  /** @jhbinny 추가 코드 */
  const [isContentExpanded, setContentExpanded] = useState(false);

  const renderFooter = (handlePress: () => void, buttonText: string) => (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[textStyle.regular10, { color: "#737373" }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );

  /** @jhbinny 추가 코드 */

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
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
            <Text style={[textStyle.regular10, { color: "#1E232C" }]}>
              {Title}
            </Text>
            {!isContentExpanded &&
              renderFooter(() => setContentExpanded(true), "더보기")}
          </View>
        </View>
      </ScrollView>

      {/*  

      {isContentExpanded && (
       <ScrollView>
          <ReadMore
            numberOfLines={0} // 전체 내용 보이도록 설정
            renderTruncatedFooter={() =>
              renderFooter(() => setContentExpanded(false), "간략히")
            }
            renderRevealedFooter={() =>
              renderFooter(() => setContentExpanded(true), "더보기")
            }
          >
            <Text style={[textStyle.regular10, { color: "#1E232C" }]}>
              {PostContent}
            </Text>
          </ReadMore>
        </ScrollView>

      )}

      */}

      {isContentExpanded && (
        <TouchableOpacity
          style={{ margin: 30, alignSelf: "center" }}
          onPress={() => setContentExpanded(false)}
        >
          <Text style={[textStyle.regular10, { color: "#737373" }]}>
            {"  "}간략히
          </Text>
        </TouchableOpacity>
      )}
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
    </SafeAreaView>
  );
};

export default NoticePostBoxView;
