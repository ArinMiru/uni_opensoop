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
import { ModalReuableFuction } from "../../../Utils/ReusableFuction/ModalReuableFuction";
import { OpenImageDotChk } from "./OpenImageDotchk";
import { Image } from "react-native";
import Swiper from "react-native-swiper";
import SwiperStyle from "../../../Styles/SwiperStyles/SwiperStyle";

interface CommonProps {
  MEMB_NM?: string;
  MEMB_CD?: string;
  MEMB_DEP_CD?: string;
  PostImage?: string[];
  Title?: string;
  PostContent?: string;
  PostingTime?: string;
  postLike?: number;
  onPress?: () => void;
  onLikePress?: () => void;
  onDislikePress?: () => void;
  likePress?: () => void;
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
  onLikePress,
  onDislikePress,
  likePress,
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
  const modalFunctions = ModalReuableFuction();

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
                textStyle.bold11,
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
                  textStyle.semibold10,
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
                  textStyle.semibold10,
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
        <View style={[NoticePostStyles.NoticePostImageBoxStyle]}>
          <Swiper
            showsButtons={false}
            style={SwiperStyle.wrapper}
            dotStyle={SwiperStyle.dotStyle}
            activeDotStyle={SwiperStyle.activeDotStyle}
          >
            {PostImage ? (
              PostImage.map((image, index) => (
                <Image
                  key={index}
                  source={{ uri: image }}
                  resizeMode="stretch"
                  style={[NoticePostStyles.NoticePostImageBoxStyle]}
                />
              ))
            ) : (
              <Image
                source={require("../../../../assets/icon.png")}
                resizeMode="stretch"
                style={[NoticePostStyles.NoticePostImageBoxStyle]}
              />
            )}
          </Swiper>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingTop: "2%",
            paddingBottom: "2%",
          }}
        >
          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "flex-start",
              left: deviceWidth * 0.06,
              height: "100%",
            }}
          >
            <OpenLikeButtton
              onDislikePress={onDislikePress}
              onLikePress={onLikePress}
              postLike={postLike}
            />
          </View>
          <View
            style={{
              flex: 0.5,
              justifyContent: "flex-end",
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
            {!isContentExpanded && (
              <TouchableOpacity onPress={() => setContentExpanded(true)}>
                <Text style={[textStyle.medium10, { color: "#A4A4A4" }]}>
                  ...더보기
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
      {isContentExpanded && (
        <ScrollView>
          <ReadMore
            numberOfLines={0} // 전체 내용 보이도록 설정
            renderTruncatedFooter={() =>
              renderFooter(() => setContentExpanded(false), "간략히")
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
              <Text style={[textStyle.regular10, { color: "#1E232C" }]}>
                {PostContent}
              </Text>
            </View>
          </ReadMore>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default NoticePostBoxView;
