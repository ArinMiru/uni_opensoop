import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import textStyle from "../../../Styles/TextStyle";
import { deviceHeight, deviceWidth } from "../../../Utils/DeviceUtils";
import { getUserData } from "../../../Utils/_private/ApiData/UserData";
import { VoteStatusButton } from "../../../Components/VoteCompo/VoteButton";
import { VoteRegiButton } from "../../../Components/VoteCompo/VoteButton";
import NewBackgroundStyle from "../../../Styles/NewBackgroundStyle";
import { Background } from "../../../Components/AllCompo/Background";
import { BackIconDelTopbarStyle } from "../../../Components/AllCompo/TopbarCompo";
import { VotePostDetailProp } from "../../../Utils/NavigationProp/NavigationDetailScrProp";
import VoteButtonStyle from "../../../Styles/VoteStyles/VoteButtonStyle";
import { votBubListDetailupCall } from "../../../Services/_private/VoteApi";
import { processInfo } from "../../../Utils/SingleUse/VoteString";
import { votBubDeleteCall } from "../../../Services/_private/VoteApi";
import { CommonActions } from "@react-navigation/native";

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

  const formattedVOT_EXPR_DATE = VOT_EXPR_DATE.split(" ")[0];

  const [processedData, setProcessedData] = useState<VoteItem[]>([]);

  useEffect(() => {
    if (VOT_INFO) {
      const processedInfo = processInfo(VOT_INFO);
      setProcessedData(processedInfo);
    }
  }, [VOT_INFO]);

  const initialSelectedItems = VOT_SEL_SEQ.split(",").map(Number);

  const [selectedItems, setSelectedItems] =
    useState<number[]>(initialSelectedItems);

  const handleItemClick = (index: number) => {
    // setSelectedItems를 통해 selectedItems 상태를 업데이트하는 함수
    setSelectedItems((prevSelectedItems) => {
      // 이전 선택된 아이템들의 복사본을 만든다.
      let updatedSelectedItems = [...prevSelectedItems];

      // 만약 초기 선택이 -1이면, 즉, 아무것도 선택되지 않은 상태라면 배열을 비운다.
      if (updatedSelectedItems.length === 1 && updatedSelectedItems[0] === -1) {
        updatedSelectedItems = [];
      }

      // 중복 선택이 가능한 투표 (VOT_TYPE_CD === "02")인 경우 로직
      if (VOT_TYPE_CD === "02") {
        // 현재 클릭된 항목이 이미 선택된 항목들 중에 있는지 확인
        const selectedIndex = updatedSelectedItems.indexOf(index);
        if (selectedIndex > -1) {
          // 이미 선택되어 있다면, 그 항목을 선택된 항목들의 목록에서 제거

          updatedSelectedItems.splice(selectedIndex, 1);
        } else {
          // 선택되어 있지 않다면, 새로운 항목을 선택된 항목들의 목록에 추가

          updatedSelectedItems.push(index);
        }
      } else {
        // 중복 선택이 불가능한 투표인 경우 단일 선택만 가능

        updatedSelectedItems = [index];
      }

      // 최종적으로 업데이트된 selectedItems 상태를 로그로 출력

      return updatedSelectedItems;
    });
  };

  const handleSubmitVote = async () => {
    const resultMessage = await votBubListDetailupCall(selectedItems, CRE_SEQ);

    if (resultMessage === "정상적으로 투표되었습니다.") {
      Alert.alert("알림", "정상적으로 투표되었습니다.");
    } else {
      Alert.alert(
        "오류",
        "투표 데이터가 정상적으로 전송되지 않았습니다. 관리자에게 문의하기 바랍니다."
      );
    }
  };
  const dellPress = async () => {
    try {
      const result = await votBubDeleteCall(CRE_SEQ);
      if (result && result.RSLT_CD) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "BottomTabNavigations",
                state: {
                  routes: [
                    {
                      name: "VotePostPage",
                    },
                  ],
                },
              },
            ],
          })
        );
        Alert.alert("성공", "삭제 성공");
      } else {
        navigation.goBack();
        Alert.alert("실패", "삭제 실패");
      }
    } catch (error) {
      navigation.goBack();
    }
  };

  return (
    <Background>
      <BackIconDelTopbarStyle
        Title="투표"
        MEMB_DEP_NM={userData?.MEMB_DEP_NM ?? ""}
        MEMB_SC_NM={userData?.MEMB_SC_NM ?? ""}
        onPress={() => navigation.goBack()}
        onPressDel={dellPress}
      />
      <View style={[NewBackgroundStyle.OnlyTopRadiusBackgroundStyle]}>
        <View
          style={{
            flex: 1,
            width: deviceWidth * 0.775,
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              marginBottom: "3%",
            }}
          >
            <Text style={[textStyle.bold23, { color: "#1E232C" }]}>
              {VOT_TITLE}
            </Text>
          </View>
          <View
            style={{
              flex: 0.4,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginBottom: "4%",
            }}
          >
            <Text style={[textStyle.medium09, { color: "#9E9E9E" }]}>
              {formattedVOT_EXPR_DATE} {"마감"}
            </Text>
          </View>
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
          {processedData.map((item) => {
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
          <VoteRegiButton onPress={handleSubmitVote} />
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
              onPress={() =>
                navigation.navigate("VotePostStatusPage", {
                  VOT_TITLE: VOT_TITLE,
                  VOT_DESC: VOT_DESC,
                  VOT_INFO: VOT_INFO,
                  VOT_EXPR_DATE: VOT_EXPR_DATE,
                  CRE_SEQ: CRE_SEQ,
                  VOT_TYPE_CD: VOT_TYPE_CD,
                  VOT_SEL_SEQ: VOT_SEL_SEQ,
                })
              }
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
