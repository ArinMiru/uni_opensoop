import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { AccountBackground } from "../../../Components/AllCompo/Background";
import { VoteStatusButton } from "../../../Components/VoteCompo/VoteButton";
import {
  VoteSlctButton,
  VoteUnSlctButton,
  VoteuntocheButton,
} from "../../../Components/VoteCompo/VoteButton";
import { VoteRegiButton } from "../../../Components/VoteCompo/VoteButton";
import { ScreenProps } from "../../../Navigations/StackNavigator";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { BackIconTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { VotePostDetailProp } from "../../../Utils/NavigationProp/NavigationDetailScrProp";
import VoteButtonStyle from "../../../Styles/VoteStyles/VoteButtonStyle";

interface VoteItem {
  index: number;
  text: string;
}

const VotePostDetailPage: React.FC<VotePostDetailProp> = ({
  navigation,
  route,
}) => {
  const userData = getUserData(); // 현재 사용자 데이터
  const {
    VOT_TITLE,
    VOT_DESC,
    VOT_INFO,
    VOT_EXPR_DATE,
    CRE_SEQ,
    VOT_TYPE_CD,
    VOT_SEL_SEQ,
  } = route.params;
  let LOGIN_ID = "";

  if (userData !== null) {
    LOGIN_ID = userData.LOGIN_ID;
  }

  const voteList: VoteItem[] = VOT_INFO.split(",").map((item, index) => {
    const [_, text] = item.split(":");
    return { index, text };
  });

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  console.log("VOTE_TYPE_CD 값:", VOT_TYPE_CD); // VOT_TYPE_CD 값 확인

  const handleItemClick = (index: number) => {
    console.log("클릭된 항목의 인덱스:", index); // 클릭된 항목의 인덱스 확인
    if (VOT_TYPE_CD === "02") {
      const updatedSelectedItems = [...selectedItems];
      if (updatedSelectedItems.includes(index)) {
        const indexToRemove = updatedSelectedItems.indexOf(index);
        updatedSelectedItems.splice(indexToRemove, 1);
      } else {
        updatedSelectedItems.push(index);
      }
      setSelectedItems(updatedSelectedItems);
      console.log("업데이트된 selectedItems:", updatedSelectedItems); // 업데이트된 selectedItems 확인
    } else {
      setSelectedItems([index]);
    }
  };

  return (
    <Background>
      <BackIconTopbarStyle
        Title="투표"
        MEMB_DEP_NM={userData?.MEMB_DEP_NM ?? ""}
        MEMB_SC_NM={userData?.MEMB_SC_NM ?? ""}
        onPress={() => navigation.goBack()}
      />
      <View style={[NewBackgroundStyle.OnlyTopRadiusBackgroundStyle]}>
        <View
          style={{
            flex: 1,
            width: deviceWidth * 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={[
              textStyle.bold25,
              { marginLeft: deviceWidth * 0.06 },
              { color: "#1E232C" },
            ]}
          >
            {VOT_TITLE}
          </Text>
          <Text
            style={[
              textStyle.medium09,
              { marginRight: deviceWidth * 0.06 },
              { color: "#9E9E9E" },
            ]}
          >
            {VOT_EXPR_DATE} {"마감"}
          </Text>
        </View>
        <View
          style={{
            flex: 4,
            flexDirection: "column",
            width: deviceWidth * 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {voteList.map((item) => {
            const isSelected = selectedItems.includes(item.index);
            return (
              <TouchableOpacity
                key={item.index}
                style={[
                  isSelected
                    ? VoteButtonStyle.voteSlctStyle
                    : VoteButtonStyle.voteUnSlctStyle,
                  { marginBottom: deviceHeight * 0.03 },
                ]}
                onPress={() => handleItemClick(item.index)}
              >
                {isSelected ? (
                  <Text style={[textStyle.medium13, { color: "#A2A2A2" }]}>
                    {item.text}
                  </Text>
                ) : (
                  <Text style={[textStyle.medium13, { color: "#333333" }]}>
                    {item.text}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            flex: 1,
            width: deviceWidth * 1,
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <VoteRegiButton />
        </View>
        {["02", "03", "05"].includes(userData?.TIT_CD ?? "") ? (
          <View
            style={{
              flex: 3.5,
              width: deviceWidth * 1,
              justifyContent: "flex-start",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <VoteStatusButton
              onPress={() => navigation.navigate("VotePostStatusPage")}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 2,
              width: deviceWidth * 1,
              justifyContent: "flex-start",
              alignItems: "center",
              alignContent: "center",
            }}
          ></View>
        )}
      </View>
    </Background>
  );
};

export default VotePostDetailPage;
