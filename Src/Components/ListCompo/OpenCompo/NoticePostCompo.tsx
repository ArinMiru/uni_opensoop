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
import ReadMore from "react-native-read-more-text";
import { OpenEdtDltButton } from "../../IconCompo/OpenEdtDltIconButton";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";

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
  MEMB_NM,
  MEMB_CD,
  MEMB_DEP_CD,
  PostImage,
  Title,
  PostContent,
  PostingTime,
  postLike,
  onPress,
  children,
}) => {
  const userData = getUserData();

  const [isContentExpanded, setContentExpanded] = useState(false);

  const renderFooter = (handlePress: () => void, buttonText: string) => (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[textStyle.regular10, { color: "#737373" }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
          }}
        >
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
              {MEMB_NM}
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
                {MEMB_DEP_CD} {"  "}
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
          {["02", "03", "05"].includes(userData?.TIT_CD || "") ? (
            <View style={{ justifyContent: "center" }}>
              <OpenEdtDltButton onPress={onPress} />
            </View>
          ) : (
            <View></View>
          )}
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
            paddingHorizontal: deviceWidth * 0.06,
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
              renderFooter(() => setContentExpanded(true), "...더보기")}
          </View>
        </View>
      </ScrollView>
      {isContentExpanded && (
        <ScrollView>
          <ReadMore
            numberOfLines={0} // 전체 내용 보이도록 설정
            renderTruncatedFooter={
              () => renderFooter(() => setContentExpanded(false), "간략히")
              // @ts7752 : 삭제 요청
            }
            renderRevealedFooter={() =>
              renderFooter(() => setContentExpanded(true), "...더보기")
            }
          >
            <View
              style={{
                paddingHorizontal: deviceWidth * 0.06,
                paddingLeft: deviceWidth * 0.06,
              }}
            >
              <Text
                style={[
                  textStyle.regular10,
                  {
                    color: "#1E232C",
                  },
                ]}
              >
                {PostContent}
              </Text>
            </View>
          </ReadMore>
        </ScrollView>
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
