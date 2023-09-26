import {
  View,
  Platform,
  TextInputProps,
  TouchableOpacity,
  Text,
} from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import textStyle from "../../../Styles/TextStyle";
import { OpenProfileIcon } from "../../IconCompo/ProfileIcon";
import QstButtonStyles from "../../../Styles/ListStyles/QstStyles/QstButtonStyles";
import { Entypo } from "@expo/vector-icons";

/**
 * @Dowon(김도원 수정)
 * QstListButton
 * nickname: 닉네임
 * postanswer: 답변하기
 * postcontent: 게시글 내용
 * Interface ButtonProps 추가
 */

interface ButtonProps extends TextInputProps {
  children?: React.ReactNode;
  nickname?: string;
  postanswer?: string;
  postcontent?: string;
  onPress?: () => void;
}

const renderSeparator = () => (
  <View style={{ height: 1, backgroundColor: "#8B8B8B" }} />
);

//  ItemSeparatorComponent={renderSeparator} // 항목 사이에 구분선 삽입

export const QstListButton: React.FC<ButtonProps> = ({
  children,
  onPress,
  nickname,
  postcontent,
  postanswer,
}) => {
  return (
    <View style={QstButtonStyles.QstListStyle}>
      <View
        style={[
          QstButtonStyles.horizontalLine,
          {
            flex: 1.5,
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <OpenProfileIcon />
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={[textStyle.semibold10, { color: "#00B45A", left: "2%" }]}
          >
            {nickname}
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={[
              textStyle.bold07,
              {
                color: "#00841D",
              },
            ]}
          >
            {postanswer}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1.5,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={[
              textStyle.semibold10,
              {
                color: "#000000",
                marginLeft: "6%",
              },
            ]}
          >
            {postcontent}
          </Text>
        </View>
        <View
          style={{
            flex: 0.16,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Entypo
              name="triangle-down"
              size={deviceWidth * 0.05}
              color="#00B45A"
            />
          </TouchableOpacity>
        </View>
      </View>
      {children}
    </View>
  );
};
