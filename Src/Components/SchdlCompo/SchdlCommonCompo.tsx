import { View, TextInputProps } from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";
import {
  SchdlBefoClikDelButton,
  SchdlBefoCliklEditButton,
  SchdlTimeButton,
} from "./SchdlButton";
import SchdlButtonStyle from "../../Styles/SchdlStyles/SchdlButtonStyle";

interface ButtonProps extends TextInputProps {
  children?: React.ReactNode;
  startDate?: string;
  endDate?: string;
  onPress?: () => void;
  onPressEdit?: () => void;
  onPressDel?: () => void;
}

/*
 *일정페이지의 수정 삭제가 나란히 있는 버튼 영역 컴포넌트 입니다.
 **/
export const SchdlEditDelButton: React.FC<ButtonProps> = ({
  onPressDel,
  onPressEdit,
}) => (
  <View
    style={{
      flexDirection: "row",
    }}
  >
    <SchdlBefoCliklEditButton onPress={onPressEdit} />
    <View style={{ marginLeft: deviceWidth * 0.009 }}>
      <SchdlBefoClikDelButton onPress={onPressDel} />
    </View>
  </View>
);

/*
 * 사용 X
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
        <SchdlTimeButton endDate="2023-10-31" />
      </View>
      {/** 시작날짜 */}
      <View style={SchdlButtonStyle.TimeLineStyle}></View>
      <View>
        <SchdlTimeButton endDate="2023-10-31" />
      </View>
      {/** 종료날짜 */}
    </View>
  );
};
