import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { deviceWidth, deviceHeight } from "../../Utils/DeviceUtils";

interface DropdownProps {
  data: string[];
  onSelect: (selectedItem: string) => void;
  defaultButtonText: string;
  buttonTextStyle?: object;
  rowStyle?: object;
}
/**
 * 피그마 기준으로 스타일 시트 코드 변경 하기를 바람
 * 화살표 아이콘 추가 해야 함
 * @param
 * @returns
 */
export const Dropdown: React.FC<DropdownProps> = ({
  data,
  onSelect,
  defaultButtonText,
  buttonTextStyle,
  rowStyle,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem) => {
        setSelectedItem(selectedItem);
        onSelect(selectedItem);
      }}
      defaultButtonText={defaultButtonText}
      buttonStyle={{
        marginTop: deviceHeight * 0.02, //수정 해야 함
        backgroundColor: "#f7f8f9",
        paddingLeft: 20,
        width: deviceWidth * 0.8,
        height: deviceHeight * 0.07,
        borderRadius: 11,
      }}
      buttonTextStyle={{ textAlign: "left" }}
      rowStyle={rowStyle}
    />
  );
};

export default Dropdown;
