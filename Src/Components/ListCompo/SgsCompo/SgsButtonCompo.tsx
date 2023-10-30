import { View, Text } from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import { SgsListButton, SgsTimeBox } from "./SgsCompo";
import { SgsListLockIcon, SgsListUnLockIcon } from "../../IconCompo/SgsIcon";
import textStyle from "../../../Styles/TextStyle";
import { OpenProfileIcon } from "../../IconCompo/ProfileIcon";

interface ButtonProps {
  children?: React.ReactNode;
  title?: string;
  poststatus?: string;
  sgsposttime?: string;
  anonynick?: string;
  postUserId?: string; // 게시물 작성자 ID
  currentUserId?: string; // 현재 로그인한 사용자 ID
  TIT_CD?: string;
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * @Dowon(김도원 생성)
 * SgsListContentButton
 * 건의게시판의 게시글의 내용을 보여주는 버튼입니다.
 * 게시글의 제목, 비공개 게시물 표시, 게시글의 내용을 보여줍니다.
 */
export const SgsListContentButton: React.FC<ButtonProps> = ({
  onPress,
  title,
  sgsposttime,
  anonynick,
  poststatus,
  postUserId,
  currentUserId,
  TIT_CD,
}) => {
  return (
    <SgsListButton onPress={onPress}>
      <View
        style={[
          {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <View style={{ marginLeft: deviceWidth * 0.034 }}>
          {postUserId === currentUserId ||
          (TIT_CD && ["02", "03", "05"].includes(TIT_CD)) ? (
            <SgsListUnLockIcon />
          ) : (
            <SgsListLockIcon />
          )}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            height: "100%",
            marginLeft: deviceHeight * 0.011,
          }}
        >
          <Text
            style={[
              textStyle.semibold10,
              {
                color: "#969996",
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </View>

      {/* 두번 쨰 뷰 */}

      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 5,
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ marginLeft: deviceWidth * 0.034 }}>
            <OpenProfileIcon />
          </View>
          <View
            style={{
              alignItems: "flex-start",
              marginLeft: deviceWidth * 0.02,
            }}
          >
            <Text style={[textStyle.semibold08, { color: "#151515" }]}>
              {anonynick}
            </Text>
          </View>
          <View
            style={{
              height: "100%",
              marginLeft: deviceWidth * 0.01,
              alignItems: "center",
            }}
          >
            <Text
              style={[
                textStyle.semibold06,
                {
                  color: "#919191",
                },
              ]}
            >
              {sgsposttime}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1.5,
            flexDirection: "row",
            height: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            marginRight: deviceWidth * 0.034,
          }}
        >
          <View>
            <Text
              style={[
                textStyle.semibold07,
                { color: "#D55582", marginLeft: deviceWidth * 0.018 },
              ]}
            >
              {poststatus}
            </Text>
          </View>
        </View>
      </View>
    </SgsListButton>
  );
};
