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

interface ButtonProps extends TextInputProps {
  children?: React.ReactNode;
  onPress?: () => void;
}

export const QstListButton: React.FC<ButtonProps> = ({ children, onPress }) => {
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
        <Text
          style={[
            textStyle.semibold10,
            { color: "#00B45A", flex: 1, marginLeft: deviceWidth * 0.01 },
          ]}
        >
          김정일
        </Text>
        <TouchableOpacity>
          <Text
            style={[
              textStyle.bold07,
              {
                color: "#00841D",
              },
            ]}
          >
            답변하기
          </Text>
          <View style={QstButtonStyles.answerLine}></View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 2,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            textStyle.semibold10,
            {
              color: "#000000",
              marginLeft: "6%",
            },
          ]}
        >
          우리의 소망은 통일??
        </Text>
        <TouchableOpacity style={{ marginLeft: deviceWidth * 0.47 }}>
          <Entypo name="triangle-down" size={18} color="#00B45A" />
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};
