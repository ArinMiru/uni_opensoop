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

interface ButtonProps {
  children?: React.ReactNode;
  title?: string;
  poststatus?: string;
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
  children,
  onPress,
  title,
  poststatus,
}) => {
  return (
    <SgsListButton onPress={onPress}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginLeft: deviceWidth * 0.04,
            marginRight: deviceWidth * 0.04,
            alignItems: "center",
          }}
        >
          <SgsListLockIcon />
        </View>
        <View>
          <Text style={[textStyle.semibold12, { color: "#424C43" }]}>
            {title}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              textStyle.semibold08,
              {
                color: "#D72966",
                textAlign: "right",
                marginRight: deviceWidth * 0.04,
              },
            ]}
          >
            {poststatus}
          </Text>
        </View>
      </View>
      {children}
    </SgsListButton>
  );
};
