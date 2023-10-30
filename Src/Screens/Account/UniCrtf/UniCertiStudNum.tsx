import React, { useState } from "react";
import { RegiCommonView } from "../../../Components/CommonScreen/RegiCommon";
import { RegiCertiStudNumProps } from "../../../Utils/NavigationProp/AccountScrProp";

const UniCertiStudNum: React.FC<RegiCertiStudNumProps> = ({
  navigation,
  route,
}) => {
  const [studNum, setStudNum] = useState<string>("");
  const { MEMB_DEP_CD, MEMB_ID, MEMB_SC_CD } = route.params;
  return (
    <RegiCommonView
      IconPress={() => navigation.goBack()}
      value={studNum}
      onChangeText={(text) => setStudNum(text)}
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
        })
      }
      navigation={navigation}
      keyboardType="number-pad"
    />
  );
};

export default UniCertiStudNum;
