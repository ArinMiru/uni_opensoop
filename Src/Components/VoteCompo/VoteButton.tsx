/**
 * VoteButton Components (Figma 참고)
 */

import { TouchableOpacity, Text, View } from "react-native";
import textStyle from "../../Styles/TextStyle";
import VoteButtonStyle from "../../Styles/VoteStyles/VoteButtonStyle";
import { AntDesign } from "@expo/vector-icons";
import { deviceWidth } from "../../Utils/DeviceUtils";
import { Entypo } from "@expo/vector-icons";

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  title?: string;
  posttime?: string; // 투표게시판 리스트에서 투표 마감시간
  poststatus?: string; // 투표게시판 리스트에서 투표 상태(미투표, 투표환료)
  votestatusnum?: string; // 투표현황 버튼에서 투표현황 숫자
  onPress?: () => void;
  navigation?: { navigate: (screenName: string) => void };
}

/**
 * @param param0
 * @returns
 */

/**
 * 투표 선택 후 상태 버튼
 */
export const VoteSlctButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity style={VoteButtonStyle.voteSlctStyle} onPress={onPress}>
      <Text style={[textStyle.medium13, { color: "#A2A2A2" }]}>{text} </Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 투표 선택 전 상태 버튼
 */
export const VoteUnSlctButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity style={VoteButtonStyle.voteUnSlctStyle} onPress={onPress}>
      <Text style={[textStyle.medium13, { color: "#333333" }]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 투표 현황 페이지 버튼
 * 투표 현황 페이지에서 투표현황보여주는 박스(버튼)
 * VoteStatusScreen.tsx
 */
export const VoteStatusPageButton: React.FC<ButtonProps> = ({
  children,
  text,
  votestatusnum,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={VoteButtonStyle.voteStatusPageStyle}
      onPress={onPress}
    >
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={[textStyle.medium13, { color: "#333333" }]}>{text}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text style={[textStyle.semibold13, { color: "#166D41" }]}>
          {votestatusnum}
          {"명"}
        </Text>
      </View>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 투표 상세보기 페이지 -> 해당 투표 게시물 투표 현황보기 버튼
 * 매니저만 보이는 버튼
 * VoteStatusScreen.tsx
 * VotePostScreen.tsx
 */
export const VoteStatusButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity style={VoteButtonStyle.voteStatusStyle} onPress={onPress}>
      <Text style={[textStyle.medium13, { color: "#7A7A7A" }]}>투표현황</Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 투표게시물 버튼 클릭 후 -> 투표 상세페이지 투표하기 버튼
 * 투표하기 버튼
 * VotePostScreen.tsx
 */
export const VoteRegiButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity style={VoteButtonStyle.voteRegiStyle} onPress={onPress}>
      <Text style={[textStyle.semibold13, { color: "#FFFFFF" }]}>투표하기</Text>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 투표 게시물 등록 -> 투표 선택지 늘리는 버튼
 * VotePostRegiScreen.tsx
 */
export const AddVoteOptionButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={VoteButtonStyle.addVoteOptionStyle}
      onPress={onPress}
    >
      <AntDesign name="plus" size={21} color="#A2A2A2" />
      {children}
    </TouchableOpacity>
  );
};

/**
 * 투표게시판 투표 진행 중 보기 버튼
 * 투표 구분 코드로 투표 진행 중인 게시물 보여주는 버튼
 * VOT_GO_CD 기준
 * VB(투표 전), VC(투표 취소) , VF(투표 종료), VG(투표 중)
 * 투표 종료와 투표 중만 사용 예정
 * VotePostListScreen.tsx
 */
export const ViewUnvottedButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <View
      style={{
        height: deviceWidth * 0.2,
        width: deviceWidth * 1,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={[
          VoteButtonStyle.viewUnvottedButtonStyle,
          { left: deviceWidth * 0.07 },
          { flexDirection: "row" },
          { justifyContent: "center" },
          { alignItems: "center" },
        ]}
        onPress={onPress}
      >
        <Entypo name="circle" size={deviceWidth * 0.05} color="#4BB781" />
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            alignContent: "center",
            paddingLeft: deviceWidth * 0.03,
          }}
        >
          <Text
            style={[
              textStyle.regular09,
              { color: "#4BB781" },
              { lineHeight: deviceWidth * 0.06 },
            ]}
          >
            투표중
          </Text>
        </View>
        {children}
      </TouchableOpacity>
    </View>
  );
};

/**
 * 투표게시물 등록 복수 선택 버튼
 * VotePostRegiPage.tsx
 */
export const ViewDupleVoteButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <View
      style={{
        flex: 1,
        marginLeft: deviceWidth * 0.009,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "flex-start",
      }}
    >
      <TouchableOpacity
        style={[
          VoteButtonStyle.viewUnvottedButtonStyle,
          { flexDirection: "row" },
        ]}
        onPress={onPress}
      >
        <Entypo name="circle" size={deviceWidth * 0.05} color="#4BB781" />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={[
              textStyle.regular11,
              { color: "#000000" },
              { marginLeft: deviceWidth * 0.03 },
              { lineHeight: deviceWidth * 0.06 },
            ]}
          >
            복수선택
          </Text>
        </View>
        {children}
      </TouchableOpacity>
    </View>
  );
};

/**
 * 투표게시물 등록 익명 선택 버튼
 * VotePostRegiPage.tsx
 */
export const ViewAnnymButton: React.FC<ButtonProps> = ({
  children,
  text,
  onPress,
}) => {
  return (
    <View
      style={{
        flex: 1,
        marginLeft: deviceWidth * 0.13,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "flex-start",
      }}
    >
      <TouchableOpacity
        style={[
          VoteButtonStyle.viewUnvottedButtonStyle,
          { flexDirection: "row" },
        ]}
        onPress={onPress}
      >
        <Entypo name="circle" size={deviceWidth * 0.05} color="#4BB781" />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={[
              textStyle.regular11,
              { color: "#000000" },
              { marginLeft: deviceWidth * 0.03 },
              { lineHeight: deviceWidth * 0.06 },
            ]}
          >
            익명
          </Text>
        </View>
        {children}
      </TouchableOpacity>
    </View>
  );
};

/**
 * 투표게시판 리스트 버튼(미투표)
 * 미투표 상태 게시물 버튼
 * VotePostListScreen.tsx
 */
export const UnVotedListButton: React.FC<ButtonProps> = ({
  children,
  title,
  posttime,
  poststatus,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={VoteButtonStyle.UnVotedListButtonStyle}
      onPress={onPress}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 0.3,
          }}
        ></View>
        <View
          style={{
            flex: 3,
            flexDirection: "column",
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={[textStyle.semibold10, { color: "#090909" }]}>
              {title}
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={[textStyle.semibold08, { color: "#9E9E9E" }]}>
              {posttime}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text style={[textStyle.semibold08, { color: "#4BB781" }]}>
            {poststatus}
          </Text>
        </View>
      </View>
      {children}
    </TouchableOpacity>
  );
};

/**
 * 투표게시판 리스트 버튼(투표완료)
 * 투표완료 상태 게시물 버튼
 * VotePostListScreen.tsx
 */
export const VotedListButton: React.FC<ButtonProps> = ({
  children,
  title,
  posttime,
  poststatus,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={VoteButtonStyle.VotedListButtonStyle}
      onPress={onPress}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 0.3,
          }}
        ></View>
        <View
          style={{
            flex: 3,
            flexDirection: "column",
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={[textStyle.semibold10, { color: "#909090" }]}>
              {title}
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={[textStyle.semibold08, { color: "#C3C3C3" }]}>
              {posttime}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text style={[textStyle.semibold08, { color: "#C3C3C3" }]}>
            {poststatus}
          </Text>
        </View>
      </View>
      {children}
    </TouchableOpacity>
  );
};
