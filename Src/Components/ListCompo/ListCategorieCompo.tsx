import { View, Text, TextInputProps } from "react-native";
import { deviceWidth } from "../../Utils/DeviceUtils";
import {
  FreBefoClikButton,
  SgsBefoClikButton,
  QstBefoClikButton,
} from "../ListCompo/ListCategorieButton";

interface ButtonProps extends TextInputProps {
  children?: React.ReactNode;
}

/*
 *게시판에서 이동하는 버튼이 모두 들어가 있는 플렉스 영역 컴포
 **/
export const ListCategorieCompo: React.FC<ButtonProps> = ({ children }) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      marginRight: deviceWidth * 0.14,
      width: deviceWidth * 0.7,
      justifyContent: "space-between",
    }}
  >
    <FreBefoClikButton
      text="자유"
      onPress={() => {
        /* 버튼 클릭 시 동작 */
      }}
    />
    <SgsBefoClikButton
      text="건의"
      onPress={() => {
        /* 버튼 클릭 시 동작 */
      }}
    />
    <QstBefoClikButton
      text="질문"
      onPress={() => {
        /* 버튼 클릭 시 동작 */
      }}
    />
    {children}
  </View>
);
