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

interface ButtonProps extends TextInputProps {
  children?: React.ReactNode;
  onPress?: () => void;
}

/*
 *자유게시판에서 수정 삭제 버튼이 나란히 있는 영역의 컴포넌트 임댜.
 **/
export const FreEditDelButton: React.FC<ButtonProps> = ({ children }) => (
  <View
    style={{
      flexDirection: "row",
      lineHeight: Platform.OS === "android" ? deviceHeight * 0.04 : 0,
      ...Platform.select({
        ios: {
          lineHeight: deviceHeight * 0.05,
        },
      }),
    }}
  >
    <FreEditButton
      onPress={() => {
        /* 버튼 클릭 시 동작 */
      }}
    />
    <FreDelButton
      onPress={() => {
        /* 버튼 클릭 시 동작 */
      }}
    />
  </View>
);

/*
 *자유게시판에 있는 게시글 '좋아요 버튼' 컴포넌트 임미다.
 **/
export const FreLikeButtton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={FreButtonStyles.FreLikeButtonStyle}
      onPress={onPress}
    >
      <AntDesign name="heart" size={deviceWidth * 0.0246} color="#4BB781" />
      <Text
        style={[
          textStyle.semibold07,
          { color: "#000000" },
          { marginLeft: deviceWidth * 0.006 },
          {
            lineHeight: Platform.OS === "android" ? deviceHeight * 0.0155 : 0,
            ...Platform.select({
              ios: {
                height: deviceHeight * 0.02,
                lineHeight: deviceHeight * 0.019,
              },
            }),
          },
        ]}
      >
        150
      </Text>
      {children}
    </TouchableOpacity>
  );
};

export const FreeListIclucontnButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <FreeListButton>
      <View
        style={[
          FreButtonStyles.horizontalLine,
          { flex: 1.5, flexDirection: "row", alignItems: "center" },
        ]}
      >
        <OpenProfileIcon />
        <Text style={[textStyle.semibold10, { color: "#4BB781", flex: 1 }]}>
          닉네임
        </Text>
        <Text
          style={[
            textStyle.regular07,
            {
              color: "#000000",
              marginTop: deviceHeight * 0.02,
            },
          ]}
        >
          0초전
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          width: "100%",
        }}
      >
        <Text
          style={[
            textStyle.semibold10,
            {
              color: "#000000",
              marginLeft: "5%",
              marginTop: Platform.OS === "ios" ? "3%" : 0,
            },
          ]}
        >
          제목 없음
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          width: "100%",
          borderBottomLeftRadius: 11,
          borderBottomRightRadius: 11,
        }}
      >
        <Text
          style={[
            textStyle.regular08,
            {
              color: "#424C43",
              marginLeft: "5%",
            },
          ]}
        >
          먹이를 찾아 산기슭을 어슬렁 거리는 김도원
        </Text>
      </View>
      {children}
    </FreeListButton>
  );
};
