import {
  View,
  Platform,
  TextInputProps,
  TouchableOpacity,
  Text,
} from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import {
  FreEditButton,
  FreDelButton,
  FreeListButton,
} from "../../ListCompo/FreCompo/FreButton";
import FreButtonStyles from "../../../Styles/ListStyles/FreStyles/FreButtonStyles";
import { AntDesign } from "@expo/vector-icons";
import textStyle from "../../../Styles/TextStyle";
import { OpenProfileIcon } from "../../IconCompo/ProfileIcon";
import { ChatIcon } from "../../IconCompo/ChatIcon";

interface ButtonProps extends TextInputProps {
  children?: React.ReactNode;
  nickname?: string;
  freposttime?: string;
  fretit?: string;
  frecont?: string;
  grade?: string;
  like?: number;
  onPress?: () => void;
  editOnPress?: () => void;
  deleOnPress?: () => void;
}

/*
 *자유게시판에서 수정 삭제 버튼이 나란히 있는 영역의 컴포넌트 임댜.
 **/
export const FreEditDelButton: React.FC<ButtonProps> = ({
  children,
  editOnPress,
  deleOnPress,
}) => (
  <View
    style={{
      marginTop: deviceHeight * 0.02,
      flexDirection: "row",
    }}
  >
    <FreEditButton onPress={editOnPress} />
    <View style={{ marginLeft: deviceWidth * 0.009 }}>
      <FreDelButton onPress={deleOnPress} />
    </View>
  </View>
);

/*
 *자유게시판에 있는 게시글 '좋아요 버튼' 컴포넌트 임미다.
 **/
export const FreLikeButtton: React.FC<ButtonProps> = ({
  children,
  onPress,
  like,
}) => {
  return (
    <TouchableOpacity
      style={FreButtonStyles.FreLikeButtonStyle}
      onPress={onPress}
    >
      <AntDesign name="heart" size={deviceWidth * 0.0246} color="#4BB781" />
      <Text
        style={[
          textStyle.semibold08,
          { color: "#000000" },
          { marginLeft: deviceWidth * 0.006 },
          { lineHeight: deviceHeight * 0.0155 },
        ]}
      >
        {like}
      </Text>
    </TouchableOpacity>
  );
};

export const FreeListIclucontnButton: React.FC<ButtonProps> = ({
  children,
  nickname,
  freposttime,
  fretit,
  frecont,
  grade,
  like,
  onPress,
}) => {
  return (
    <FreeListButton onPress={onPress}>
      {/* 첫 번쨰 뷰 */}

      <View
        style={[
          {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text
            style={[
              textStyle.semibold10,
              {
                color: "#000000",
                marginLeft: deviceWidth * 0.034,
              },
            ]}
          >
            {fretit}
          </Text>
        </View>
      </View>

      {/* 두번 쨰 뷰 */}

      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Text
          style={[
            textStyle.regular08,
            {
              color: "#969996",
              marginLeft: deviceWidth * 0.034,
            },
          ]}
        >
          {frecont}
        </Text>
      </View>

      {/* 세번 쨰 뷰 */}

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
              {nickname}
            </Text>
          </View>
          <View
            style={{
              height: "100%",
              marginLeft: deviceWidth * 0.01,
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
              {freposttime}
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
            <ChatIcon />
          </View>
          <View>
            <Text
              style={[
                textStyle.semibold07,
                { color: "#4BB781", marginLeft: deviceWidth * 0.018 },
              ]}
            >
              8{like}
            </Text>
          </View>
        </View>
      </View>
      {children}
    </FreeListButton>
  );
};
