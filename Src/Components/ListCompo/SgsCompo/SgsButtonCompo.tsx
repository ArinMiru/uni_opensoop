import {
  View,
  Platform,
  TextInputProps,
  TouchableOpacity,
  Text,
} from "react-native";
import { deviceWidth, deviceHeight } from "../../../Utils/DeviceUtils";
import { SgsListButton, SgsTimeBox } from "./SgsCompo";
import { SgsListLockIcon } from "../../IconCompo/SgsIcon";
import textStyle from "../../../Styles/TextStyle";

interface ButtonProps extends TextInputProps {
  children?: React.ReactNode;
  onPress?: () => void;
}

/**
 * @Dowon(김도원 생성)
 * SgsListContentButton
 * 건의게시판의 게시글의 내용을 보여주는 버튼입니다.
 * 게시글의 제목, 비공개 게시물 표시, 게시글의 내용을 보여줍니다.
 */
export const SgsListContentButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <SgsListButton>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 0.4,
            alignItems: "center",
          }}
        >
          <SgsListLockIcon />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              textStyle.semibold12,
              {
                color: "#424C43",
                textAlign: "left",
              },
            ]}
          >
            제목
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              textStyle.semibold08,
              {
                color: "#D72966",
                textAlign: "right",
                marginRight: deviceWidth * 0.02,
              },
            ]}
          >
            비공개 게시물
          </Text>
        </View>
      </View>
      {children}
    </SgsListButton>
  );
};
