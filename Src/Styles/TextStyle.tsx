import { StyleSheet } from "react-native";
import { responsiveFontSize } from "../Utils/ResponsiveFontSize";

/* App에서 사용하는 모든 TextStyle File  */

export default StyleSheet.create({
  /*-------------------------------------------*/

  /*
    Text Font 모양 
    { fontWeight: '100' }, // Thin
    { fontWeight: '200' }, // Ultra Light
    { fontWeight: '300' }, // Light
    { fontWeight: '400' }, // Regular
    { fontWeight: '500' }, // Medium
    { fontWeight: '600' }, // Semibold
    { fontWeight: '700' }, // Bold
    { fontWeight: '800' }, // Heavy
    { fontWeight: '900' }, // Black
  */

  /*----------------medium---------------------*/
  medium09: {
    fontFamily: "Medium",
    fontWeight: "500" /*medium*/,
    fontSize: responsiveFontSize(9),
  },

  medium12: {
    fontFamily: "Medium",
    fontWeight: "500" /*medium*/,
    fontSize: responsiveFontSize(12),
  },

  medium13: {
    fontFamily: "Medium",
    fontWeight: "500" /*medium*/,
    fontSize: responsiveFontSize(13),
  },

  medium14: {
    fontFamily: "Medium",
    fontWeight: "500" /*medium*/,
    fontSize: responsiveFontSize(26),
  },

  medium20: {
    fontFamily: "Medium",
    fontWeight: "500" /*medium*/,
    fontSize: responsiveFontSize(35),
  },

  /*----------------semibold-------------------*/

  semibold07: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: responsiveFontSize(7),
  },

  semibold08: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: responsiveFontSize(8),
  },

  semibold10: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: responsiveFontSize(12),
  },

  semibold12: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: responsiveFontSize(12),
  },

  semibold13: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: responsiveFontSize(30),
  },

  semibold14: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: responsiveFontSize(14),
  },

  semibold19: {
    fontFamily: "SemiBold",
    fontWeight: "600" /*semibold*/,
    fontSize: responsiveFontSize(19),
  },

  /*-----------------bold---------------------*/

  bold08: {
    fontFamily: "Bold",
    fontWeight: "700" /*bold*/,
    fontSize: responsiveFontSize(20),
  },

  bold11: {
    fontFamily: "Bold",
    fontWeight: "700" /*bold*/,
    fontSize: responsiveFontSize(11),
  },

  bold12: {
    fontFamily: "Bold",
    fontWeight: "700" /*bold*/,
    fontSize: responsiveFontSize(12),
  },

  bold25: {
    fontFamily: "Bold",
    fontWeight: "700" /*bold*/,
    fontSize: responsiveFontSize(50),
  },

  /*----------------regular-------------------*/

  regular07: {
    fontFamily: "Regular",
    fontWeight: "400" /*regular*/,
    fontSize: responsiveFontSize(7),
  },

  regular08: {
    fontFamily: "Regular",
    fontWeight: "400" /*regular*/,
    fontSize: responsiveFontSize(8),
  },

  regular10: {
    fontFamily: "Regular",
    fontWeight: "400" /*regular*/,
    fontSize: responsiveFontSize(10),
  },

  regular13: {
    fontFamily: "Regular",
    fontWeight: "400" /*regular*/,
    fontSize: responsiveFontSize(13),
  },

  /*------------------------------------------*/
});
