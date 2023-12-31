import React, { useState } from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { RegiCertiStudNumProps } from "../../../Utils/NavigationProp/AccountScrProp";

const UniCertiStudNum: React.FC<RegiCertiStudNumProps> = ({
  navigation,
  route,
}) => {
  const [studNum, setStudNum] = useState<string>("");
  const { MEMB_DEP_CD, MEMB_ID, MEMB_SC_CD, MEMB_GRA } = route.params;

  const handleStudNumChange = (text: string) => {
    const onlyNumbers = /^\d+$/;
    if (onlyNumbers.test(text) || text === "") {
      setStudNum(text);
    }
  };

  return (
    <RegiCommonView
      IconPress={() => navigation.goBack()}
      value={studNum}
      onChangeText={handleStudNumChange}
      bigtext="학번"
      smalltext="선택하기"
      inputtext="학번"
      buttontext="다음"
      onPress={() =>
        navigation.navigate("UniCertiEmail", {
          MEMB_DEP_CD: MEMB_DEP_CD,
          MEMB_ID: MEMB_ID,
          MEMB_SC_CD: MEMB_SC_CD,
          MEMB_NUM: studNum,
          MEMB_GRA: MEMB_GRA,
        })
      }
      navigation={navigation}
      keyboardType="number-pad"
    />
  );
};

export default UniCertiStudNum;
