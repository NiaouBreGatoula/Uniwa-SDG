import { SimpleIndicator, SpecialIndicator } from "../types/SDG_Indicators";

const indicator_01: SimpleIndicator = {
  label: "Indicator 01",
  weight: 0.784,
  score: null,

  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      value: null,
      inputName: "1-1",

      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "1-2",

      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "1-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_02: SimpleIndicator = {
  label: "Indicator 02",
  weight: 0.216,
  score: null,

  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      value: null,
      inputName: "2-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "2-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "2-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_03: SpecialIndicator = {
  label: "Indicator 03",
  weight: 0.58,

  score: null,
  sections: [
    {
      label: "(Current Year) - Waste",
      value: null,
      inputName: "3-1",
      type: "NumberField",
      placeholder: "Enter the amount of waste in kg",
    },
    {
      label: "(Current Year) - Campus Population",
      value: null,
      inputName: "3-2",
      type: "NumberField",
      placeholder: "Enter the number of people",
    },
    {
      label: "(Comparison Year) - Waste",
      value: null,
      inputName: "3-3",
      type: "NumberField",
      placeholder: "Enter the amount of waste in kg",
    },
    {
      label: "(Comparison Year) - Campus Population",
      value: null,
      inputName: "3-4",
      type: "NumberField",
      placeholder: "Enter the number of people",
    },
  ],
  type: "green",
  comparisonValues: [null, null],
  currentValues: [null, null],
};

const indicator_04: SimpleIndicator = {
  label: "Indicator 04",
  weight: 0.42,

  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      value: null,
      inputName: "4-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "4-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "4-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_05: SimpleIndicator = {
  label: "Indicator 05",
  weight: 0.663,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      value: null,
      inputName: "5-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "5-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "5-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_06: SimpleIndicator = {
  label: "Indicator 06",
  weight: 0.337,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      value: null,
      inputName: "6-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "6-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "6-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_07: SimpleIndicator = {
  label: "Indicator 07",
  weight: 0.701,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      value: null,
      inputName: "7-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "7-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "7-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_08: SpecialIndicator = {
  label: "Indicator 08",
  weight: 0.299,
  score: null,
  sections: [
    {
      label: "(Current Year) - First Year Students",
      value: null,
      inputName: "8-1",
      type: "NumberField",
      placeholder: "Enter the number of students",
    },
    {
      label: "(Current Year) - Year's Graduates",
      value: null,
      inputName: "8-2",
      type: "NumberField",
      placeholder: "Enter the number of students",
    },
    {
      label: "(Comparison Year) - First Year Students",
      value: null,
      inputName: "8-3",
      type: "NumberField",
      placeholder: "Enter the number of students",
    },
    {
      label: "(Comparison Year) - Year's Graduates",
      value: null,
      inputName: "8-4",
      type: "NumberField",
      placeholder: "Enter the number of students",
    },
  ],
  type: "pink",
  comparisonValues: [null, null],
  currentValues: [null, null],
};

const indicator_09: SpecialIndicator = {
  label: "Indicator 09",
  weight: 0.193,
  score: null,
  sections: [
    {
      label: "(Current Year) - Female Senior Staff",
      value: null,
      inputName: "9-1",
      type: "NumberField",
      placeholder: "Enter the number of staff",
    },
    {
      label: "(Current Year) - Total Senior Staff",
      value: null,
      inputName: "9-2",
      type: "NumberField",
      placeholder: "Enter the number of staff",
    },
    {
      label: "(Comparison Year) - Female Senior Staff",
      value: null,
      inputName: "9-3",
      type: "NumberField",
      placeholder: "Enter the number of staff",
    },
    {
      label: "(Comparison Year) - Total Senior Staff",
      value: null,
      inputName: "9-4",
      type: "NumberField",
      placeholder: "Enter the number of staff",
    },
  ],
  type: "pink",
  comparisonValues: [null, null],
  currentValues: [null, null],
};

const indicator_10: SimpleIndicator = {
  label: "Indicator 10",
  weight: 0.257,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "10-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "10-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "10-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_11: SimpleIndicator = {
  label: "Indicator 11",
  weight: 0.427,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "11-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "11-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "11-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_12: SimpleIndicator = {
  label: "Indicator 12",
  weight: 0.123,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "12-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "12-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "12-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_13: SpecialIndicator = {
  label: "Indicator 13",
  weight: 0.552,
  score: null,
  sections: [
    {
      label: "(Current Year) - Cubic Meters of Water (m³)",
      value: null,
      inputName: "13-1",
      type: "NumberField",
      placeholder: "Enter the number of cubic meters (m³)",
    },
    {
      label: "(Current Year) - Campus Population",
      value: null,
      inputName: "13-2",
      type: "NumberField",
      placeholder: "Enter the number of people",
    },
    {
      label: "(Comparison Year) - Cubic Meters of Water (m³)",
      value: null,
      inputName: "13-3",
      type: "NumberField",
      placeholder: "Enter the number of cubic meters (m³)",
    },
    {
      label: "(Comparison Year) - Campus Population",
      value: null,
      inputName: "13-4",
      type: "NumberField",
      placeholder: "Enter the number of people",
    },
  ],
  type: "green",
  comparisonValues: [null, null],
  currentValues: [null, null],
};

const indicator_14: SimpleIndicator = {
  label: "Indicator 14",
  weight: 0.448,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "14-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "14-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "14-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_15: SimpleIndicator = {
  label: "Indicator 15",
  weight: 0.58,

  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "15-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "15-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "15-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_16: SimpleIndicator = {
  label: "Indicator 16",
  weight: 0.264,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "16-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "16-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "16-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_17: SpecialIndicator = {
  label: "Indicator 17",
  weight: 0.176,
  score: null,
  sections: [
    {
      label: "(Current Year) - Total Energy Consumption (GJ)",
      value: null,
      inputName: "17-1",
      type: "NumberField",
      placeholder: "Enter the total energy consumption in GJ",
    },
    {
      label: "(Current Year) - University Floor Area (m²)",
      value: null,
      inputName: "17-2",
      type: "NumberField",
      placeholder: "Enter the total floor area in m²",
    },
    {
      label: "(Comparison Year) - Total Energy Consumption (GJ)",
      value: null,
      inputName: "17-3",
      type: "NumberField",
      placeholder: "Enter the total energy consumption in GJ",
    },
    {
      label: "(Comparison Year) - University Floor Area (m²)",
      value: null,
      inputName: "17-4",
      type: "NumberField",
      placeholder: "Enter the total floor area in m²",
    },
  ],
  type: "green",
  comparisonValues: [null, null],
  currentValues: [null, null],
};

const indicator_18: SpecialIndicator = {
  label: "Indicator 18",
  weight: 1,
  score: null,
  sections: [
    {
      label: "(Current Year) - Research Income",
      value: null,
      inputName: "18-1",
      type: "NumberField",
      placeholder: "Enter the research income",
    },
    {
      label: "(Current Year) - Number of Research Staff",
      value: null,
      inputName: "18-2",
      type: "NumberField",
      placeholder: "Enter the number of research staff",
    },
    {
      label: "(Comparison Year) - Research Income",
      value: null,
      inputName: "18-3",
      type: "NumberField",
      placeholder: "Enter the research income",
    },
    {
      label: "(Comparison Year) - Number of Research Staff",
      value: null,
      inputName: "18-4",
      type: "NumberField",
      placeholder: "Enter the number of research staff",
    },
  ],
  type: "pink",
  comparisonValues: [null, null],
  currentValues: [null, null],
};

const indicator_19: SimpleIndicator = {
  label: "Indicator 19",
  weight: 1,

  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "19-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "19-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "19-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_20: SimpleIndicator = {
  label: "Indicator 20",
  weight: 0.465,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      value: null,
      inputName: "20-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "20-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "20-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_21: SimpleIndicator = {
  label: "Indicator 21",
  weight: 0.535,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "21-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "21-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "21-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_22: SimpleIndicator = {
  label: "Indicator 22",
  weight: 0.291,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "22-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "22-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "22-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_23: SimpleIndicator = {
  label: "Indicator 23",
  weight: 0.422,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "23-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "23-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "23-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_24: SpecialIndicator = {
  label: "Indicator 24",
  weight: 0.266,
  score: null,
  sections: [
    {
      label: "(Current Year) - Amount of Recycled Waste (KG)",
      value: null,
      inputName: "24-1",
      type: "NumberField",
      placeholder: "Enter the amount of recycled waste in kg",
    },
    {
      label: "(Current Year) - Amount of Waste (KG)",
      value: null,
      inputName: "24-2",
      type: "NumberField",
      placeholder: "Enter the amount of waste in kg",
    },
    {
      label: "(Comparison Year) - Amount of Recycled Waste (KG)",
      value: null,
      inputName: "24-3",
      type: "NumberField",
      placeholder: "Enter the amount of recycled waste in kg",
    },
    {
      label: "(Comparison Year) - Amount of Waste (KG)",
      value: null,
      inputName: "24-4",
      type: "NumberField",
      placeholder: "Enter the amount of waste in kg",
    },
  ],
  type: "green",
  comparisonValues: [null, null],
  currentValues: [null, null],
};

// const indicator_25: SimpleIndicator = {
//   label: "Indicator 25",
//   weight: 0.589,
// score: null,
//   sections: [
//     {
//       label: "Section 1",
//       // possibleValues: ["0", "1"],
//       value: null,
//       inputName: "25-1",
//       type: "Radio",
//     },
//     {
//       label: "Section 2",
//       // possibleValues: ["0", "1"],
//       value: null,
//       inputName: "25-2",
//       type: "Radio",
//     },
//     {
//       label: "Section 3",
//       // possibleValues: ["0", "1"],
//       value: null,
//       inputName: "25-3",
//       type: "Radio",
//     },
//   ],
//   type: "Radio",
// };

const indicator_26: SimpleIndicator = {
  label: "Indicator 26",
  weight: 1,

  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "26-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "26-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "26-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_27: SimpleIndicator = {
  label: "Indicator 27",
  weight: 1,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "27-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "27-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "27-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_28: SimpleIndicator = {
  label: "Indicator 28",
  weight: 1,

  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "28-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "28-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "28-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_29: SimpleIndicator = {
  label: "Indicator 29",
  weight: 1,

  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "29-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "29-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "29-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_30: SpecialIndicator = {
  label: "Indicator 30",
  weight: 0.241,
  score: null,
  sections: [
    {
      label: "(Current Year) - Number of Publications",
      value: null,
      inputName: "30-1",
      type: "NumberField",
      placeholder: "Enter the number of publications",
    },
    {
      label: "(Current Year) - Number of Research Staff",
      value: null,
      inputName: "30-2",
      type: "NumberField",
      placeholder: "Enter the number of research staff",
    },
    {
      label: "(Comparison Year) - Number of Publications",
      value: null,
      inputName: "30-3",
      type: "NumberField",
      placeholder: "Enter the number of publications",
    },
    {
      label: "(Comparison Year) - Number of Research Staff",
      value: null,
      inputName: "30-4",
      type: "NumberField",
      placeholder: "Enter the number of research staff",
    },
  ],
  type: "pink",
  comparisonValues: [null, null],
  currentValues: [null, null],
};

const indicator_31: SimpleIndicator = {
  label: "Indicator 31",
  weight: 0.322,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      value: null,
      inputName: "31-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "31-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "31-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_32: SimpleIndicator = {
  label: "Indicator 32",
  weight: 0.18,

  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      value: null,
      inputName: "32-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "32-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "32-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_33: SimpleIndicator = {
  label: "Indicator 33",
  weight: 0.114,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "33-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "33-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "33-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

const indicator_34: SimpleIndicator = {
  label: "Indicator 34",
  weight: 0.143,
  score: null,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "34-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "34-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      value: null,
      inputName: "34-3",
      type: "Radio",
    },
  ],
  type: "simple",
};

export {
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
  // indicator_25,
  indicator_26,
  indicator_27,
  indicator_28,
  indicator_29,
  indicator_30,
  indicator_31,
  indicator_32,
  indicator_33,
  indicator_34,
};
