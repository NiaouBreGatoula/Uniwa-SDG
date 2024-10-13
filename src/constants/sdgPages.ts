import { SDG } from "../types/sdgTypes";
// import {
//   indicator_01,
//   indicator_02,
//   indicator_03,
//   indicator_04,
//   indicator_05,
//   indicator_06,
//   indicator_07,
//   indicator_08,
//   indicator_09,
//   indicator_10,
//   indicator_11,
//   indicator_12,
//   indicator_13,
//   indicator_14,
//   indicator_15,
//   indicator_16,
//   indicator_17,
//   indicator_18,
//   indicator_19,
//   indicator_20,
//   indicator_21,
//   indicator_22,
//   indicator_23,
//   indicator_24,
//   indicator_25,
//   indicator_26,
//   indicator_27,
//   indicator_28,
//   indicator_29,
//   indicator_30,
//   indicator_31,
//   indicator_32,
//   indicator_33,
//   indicator_34,
// } from "./indicators";

import {
  indicator_01,
  indicator_02,
  indicator_03,
  indicator_04,
  indicator_05,
  indicator_06,
  indicator_07,
  indicator_08,
  indicator_09,
  indicator_10,
  indicator_11,
  indicator_12,
  indicator_13,
  indicator_14,
  indicator_15,
  indicator_16,
  indicator_17,
  indicator_18,
  indicator_19,
  indicator_20,
  indicator_21,
  indicator_22,
  indicator_23,
  indicator_24,
  indicator_25,
  indicator_26,
  indicator_27,
  indicator_28,
  indicator_29,
  indicator_30,
  indicator_31,
  indicator_32,
  indicator_33,
  indicator_34,
} from "./indicators.testdata";

/// My Implementation of SDG Data

const SDG_01: SDG = {
  label: "SDG 01",
  standsFor: "No Poverty",
  indicators: [indicator_01, indicator_02],
};

const SDG_02: SDG = {
  label: "SDG 02",
  standsFor: "Zero Hunger",
  indicators: [indicator_03, indicator_04],
};

const SDG_03: SDG = {
  label: "SDG 03",
  standsFor: "Good Health and Well-being",
  indicators: [indicator_05, indicator_06],
};

const SDG_04: SDG = {
  label: "SDG 04",
  standsFor: "Quality Education",
  indicators: [indicator_07, indicator_08],
};

const SDG_05: SDG = {
  label: "SDG 05",
  standsFor: "Quality Education",
  indicators: [indicator_09, indicator_10, indicator_11, indicator_12],
};

const SDG_06: SDG = {
  label: "SDG 06",
  standsFor: "Quality Education",
  indicators: [indicator_13, indicator_14],
};

const SDG_07: SDG = {
  label: "SDG 07",
  standsFor: "Quality Education",
  indicators: [indicator_15, indicator_16, indicator_17],
};

const SDG_08: SDG = {
  label: "SDG 08",
  standsFor: "Quality Education",
  indicators: [],
};

const SDG_09: SDG = {
  label: "SDG 09",
  standsFor: "Quality Education",
  indicators: [indicator_18],
};

const SDG_10: SDG = {
  label: "SDG 10",
  standsFor: "Quality Education",
  indicators: [indicator_19],
};

const SDG_11: SDG = {
  label: "SDG 11",
  standsFor: "Quality Education",
  indicators: [indicator_20, indicator_21, indicator_22],
};

const SDG_12: SDG = {
  label: "SDG 12",
  standsFor: "Quality Education",
  indicators: [indicator_22, indicator_23, indicator_24],
};

const SDG_13: SDG = {
  label: "SDG 13",
  standsFor: "Quality Education",
  indicators: [indicator_25, indicator_26],
};

const SDG_14: SDG = {
  label: "SDG 14",
  standsFor: "Quality Education",
  indicators: [indicator_27],
};

const SDG_15: SDG = {
  label: "SDG 15",
  standsFor: "Quality Education",
  indicators: [indicator_28],
};

const SDG_16: SDG = {
  label: "SDG 16",
  standsFor: "Quality Education",
  indicators: [indicator_29],
};

const SDG_17: SDG = {
  label: "SDG 17",
  standsFor: "Quality Education",
  indicators: [
    indicator_30,
    indicator_31,
    indicator_32,
    indicator_33,
    indicator_34,
  ],
};

const allSDGs: SDG[] = [
  SDG_01,
  SDG_02,
  SDG_03,
  SDG_04,
  SDG_05,
  SDG_06,
  SDG_07,
  SDG_08,
  SDG_09,
  SDG_10,
  SDG_11,
  SDG_12,
  SDG_13,
  SDG_14,
  SDG_15,
  SDG_16,
  SDG_17,
];

const weirdIndicatorInputNames = ["3", "8", "9", "13", "17", "18", "24", "30"];
const incompleteIndicators = ["Indicator 25"];

export {
  SDG_01,
  SDG_02,
  SDG_03,
  SDG_04,
  SDG_05,
  SDG_06,
  SDG_07,
  SDG_08,
  SDG_09,
  SDG_10,
  SDG_11,
  SDG_12,
  SDG_13,
  SDG_14,
  SDG_15,
  SDG_16,
  SDG_17,
  allSDGs,
  weirdIndicatorInputNames,
  incompleteIndicators,
};
