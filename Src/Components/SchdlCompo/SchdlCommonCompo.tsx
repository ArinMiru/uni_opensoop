import {
  View,
  Platform,
  TextInputProps,
  TouchableOpacity,
  Text,
} from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";
import textStyle from "../../Styles/TextStyle";
import {
  SchdlBefoClikDelButton,
  SchdlBefoCliklEditButton,
  SchdlTimeButton,
} from "./SchdlButton";
import SchdlButtonStyle from "../../Styles/SchdlStyles/SchdlButtonStyle";

interface ButtonProps extends TextInputProps {
  children?: React.ReactNode;
  onPress?: () => void;
}

/*
 *일정페이지의 수정 삭제가 나란히 있는 버튼 영역 컴포넌트 입니다.
 **/
export const SchdlEditDelButton: React.FC<ButtonProps> = ({ children }) => (
  <View
    style={{
      flexDirection: "row",
    }}
  >
    <SchdlBefoCliklEditButton
      onPress={() => {
        /* 버튼 클릭 시 동작 */
      }}
    />
    <View style={{ marginLeft: deviceWidth * 0.009 }}>
      <SchdlBefoClikDelButton
        onPress={() => {
          /* 버튼 클릭 시 동작 */
        }}
      />
    </View>
  </View>
);

/*
 * 일정 게시판의 시간을 정하는 버튼 - 버튼 컴포넌트 입니다.
 **/
export const SchdlRegiTimeButton: React.FC<ButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: deviceWidth * 0.82,
        justifyContent: "space-evenly",
      }}
    >
      <View>
        <SchdlTimeButton hour="00" minutes="00" />
      </View>
      <View style={SchdlButtonStyle.TimeLineStyle}></View>
      <View>
        <SchdlTimeButton hour="00" minutes="00" />
      </View>
    </View>
  );
};
