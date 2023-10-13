import React, { useState, useRef } from "react";
import {
  Animated,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";
import { Entypo } from "@expo/vector-icons";
import TextStyle from "../../Styles/TextStyle";
import GradeDropdownStyle from "../../Styles/DropdownStyles/GradeDropdownStyle";
import VoteRegiDateDropdownStyle from "../../Styles/DropdownStyles/VoteRegiDateDropdownStyle";

interface DropdownProps {
  onSelected?: (item: string) => void;
}

export const VoteRegiDateDropDown: React.FC<DropdownProps> = ({
  onSelected,
}) => {
  const data = ["1학년", "2학년", "3학년", "4학년"];

  const months = [...Array(12).keys()].map((i) => i + 1);
  const dates = [...Array(31).keys()].map((i) => i + 1);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const translateY = useRef(new Animated.Value(-30)).current;
  const rotation = useRef(new Animated.Value(0)).current;

  const rotationDeg = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const handleToggleDropdown = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: isOpen ? -10 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(rotation, {
        toValue: isOpen ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsOpen(!isOpen);
    });
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    handleToggleDropdown();
    if (onSelected) {
      onSelected(item);
    }
  };

  return (
    <View style={VoteRegiDateDropdownStyle.container}>
      <TouchableOpacity
        style={VoteRegiDateDropdownStyle.button}
        onPress={handleToggleDropdown}
      >
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              TextStyle.bold13,
              {
                color: "#333333",
                textAlign: "center",
                lineHeight: deviceHeight * 0.027,
              },
            ]}
          >
            {selectedItem || "학년"}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: deviceWidth * 0.57,
            }}
          >
            <Animated.View style={{ transform: [{ rotate: rotationDeg }] }}>
              <Entypo
                name="chevron-small-up"
                size={deviceWidth * 0.06}
                color="black"
              />
            </Animated.View>
          </View>
        </View>
      </TouchableOpacity>

      {isOpen && (
        <Animated.View
          style={[
            VoteRegiDateDropdownStyle.dropdown,
            { transform: [{ translateY }] },
          ]}
        >
          <ScrollView style={{ maxHeight: deviceHeight * 0.14 }}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={VoteRegiDateDropdownStyle.item}
                onPress={() => handleSelectItem(item)}
              >
                <Text style={VoteRegiDateDropdownStyle.itemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
};

export default VoteRegiDateDropDown;
