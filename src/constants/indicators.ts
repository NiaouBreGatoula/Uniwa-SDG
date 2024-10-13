import { IndicatorType } from "../types/sdgTypes";

const indicator_01: IndicatorType = {
  label: "Indicator 01",
  weight: 0.784,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      selectedValue: null,
      inputName: "1-1",

      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "1-2",

      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "1-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_02: IndicatorType = {
  label: "Indicator 02",
  weight: 0.216,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      selectedValue: null,
      inputName: "2-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "2-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "2-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_03: IndicatorType = {
  label: "Indicator 03",
  weight: 0.58,
  sections: [
    {
      label: "Waste",
      selectedValue: null,
      inputName: "3-1",
      type: "NumberField",
      placeholder: "Enter the amount of waste in kg",
    },
    {
      label: "Campus Population",
      selectedValue: null,
      inputName: "3-2",
      type: "NumberField",
      placeholder: "Enter the number of people",
    },
  ],
  type: "NumberField",
};

const indicator_04: IndicatorType = {
  label: "Indicator 04",
  weight: 0.42,
  sections: [
    {
      label: "Waste (KG)",
      selectedValue: null,
      inputName: "4-1",
      type: "NumberField",
      placeholder: "Enter the amount of waste in kg",
    },
    {
      label: "Campus Population",
      selectedValue: null,
      inputName: "4-2",
      type: "NumberField",
      placeholder: "Enter the number of people",
    },
  ],
  type: "NumberField",
};

const indicator_05: IndicatorType = {
  label: "Indicator 05",
  weight: 0.663,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      selectedValue: null,
      inputName: "5-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "5-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "5-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_06: IndicatorType = {
  label: "Indicator 06",
  weight: 0.337,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      selectedValue: null,
      inputName: "6-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "6-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "6-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_07: IndicatorType = {
  label: "Indicator 07",
  weight: 0.701,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      selectedValue: null,
      inputName: "7-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "7-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "7-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_08: IndicatorType = {
  label: "Indicator 08",
  weight: 0.299,
  sections: [
    {
      label: "First Year Students",
      selectedValue: null,
      inputName: "8-1",
      type: "NumberField",
      placeholder: "Enter the number of students",
    },
    {
      label: "Year's Graduates",
      selectedValue: null,
      inputName: "8-2",
      type: "NumberField",
      placeholder: "Enter the number of students",
    },
  ],
  type: "NumberField",
};

const indicator_09: IndicatorType = {
  label: "Indicator 09",
  weight: 0.193,
  sections: [
    {
      label: "Female Senior Staff",
      selectedValue: null,
      inputName: "9-1",
      type: "NumberField",
      placeholder: "Enter the number of staff",
    },
    {
      label: "Total Senior Staff",
      selectedValue: null,
      inputName: "9-2",
      type: "NumberField",
      placeholder: "Enter the number of staff",
    },
  ],
  type: "NumberField",
};

const indicator_10: IndicatorType = {
  label: "Indicator 10",
  weight: 0.257,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "10-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "10-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "10-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_11: IndicatorType = {
  label: "Indicator 11",
  weight: 0.427,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "11-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "11-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "11-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_12: IndicatorType = {
  label: "Indicator 12",
  weight: 0.123,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "12-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "12-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "12-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_13: IndicatorType = {
  label: "Indicator 13",
  weight: 0.552,
  sections: [
    {
      label: "Cubic Meters of Water (m³)",
      selectedValue: null,
      inputName: "13-1",
      type: "NumberField",
      placeholder: "Enter the number of cubic meters (m³)",
    },
    {
      label: "Campus Population",
      selectedValue: null,
      inputName: "13-2",
      type: "NumberField",
      placeholder: "Enter the number of people",
    },
  ],
  type: "NumberField",
};

const indicator_14: IndicatorType = {
  label: "Indicator 14",
  weight: 0.448,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "14-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "14-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "14-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_15: IndicatorType = {
  label: "Indicator 15",
  weight: 0.58,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "15-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "15-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "15-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_16: IndicatorType = {
  label: "Indicator 16",
  weight: 0.264,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "16-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "16-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "16-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_17: IndicatorType = {
  label: "Indicator 17",
  weight: 0.176,
  sections: [
    {
      label: "Total Energy Consumption (GJ)",
      selectedValue: null,
      inputName: "17-1",
      type: "NumberField",
      placeholder: "Enter the total energy consumption in GJ",
    },
    {
      label: "University Floor Area (m²)",
      selectedValue: null,
      inputName: "17-2",
      type: "NumberField",
      placeholder: "Enter the total floor area in m²",
    },
  ],
  type: "NumberField",
};

const indicator_18: IndicatorType = {
  label: "Indicator 18",
  weight: 1,
  sections: [
    {
      label: "Research Income",
      selectedValue: null,
      inputName: "18-1",
      type: "NumberField",
      placeholder: "Enter the research income",
    },
    {
      label: "Number of Research Staff",
      selectedValue: null,
      inputName: "18-2",
      type: "NumberField",
      placeholder: "Enter the number of research staff",
    },
  ],
  type: "NumberField",
};

const indicator_19: IndicatorType = {
  label: "Indicator 19",
  weight: 1,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "19-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "19-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "19-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_20: IndicatorType = {
  label: "Indicator 20",
  weight: 0.465,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      selectedValue: null,
      inputName: "20-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "20-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "20-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_21: IndicatorType = {
  label: "Indicator 21",
  weight: 0.535,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "21-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "21-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "21-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_22: IndicatorType = {
  label: "Indicator 22",
  weight: 0.291,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "22-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "22-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "22-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_23: IndicatorType = {
  label: "Indicator 23",
  weight: 0.422,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "23-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "23-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "23-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_24: IndicatorType = {
  label: "Indicator 24",
  weight: 0.266,
  sections: [
    {
      label: "Amount of Recycled Waste (KG)",
      selectedValue: null,
      inputName: "24-1",
      type: "NumberField",
      placeholder: "Enter the amount of recycled waste in kg",
    },
    {
      label: "Amount of Waste (KG)",
      selectedValue: null,
      inputName: "24-2",
      type: "NumberField",
      placeholder: "Enter the amount of waste in kg",
    },
  ],
  type: "NumberField",
};

const indicator_25: IndicatorType = {
  label: "Indicator 25",
  weight: 0.411,
  sections: [
    {
      label: "Section 1",
      // possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "25-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      // possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "25-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      // possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "25-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_26: IndicatorType = {
  label: "Indicator 26",
  weight: 1,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "26-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "26-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "26-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_27: IndicatorType = {
  label: "Indicator 27",
  weight: 1,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "27-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "27-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "27-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_28: IndicatorType = {
  label: "Indicator 28",
  weight: 1,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "28-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "28-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "28-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_29: IndicatorType = {
  label: "Indicator 29",
  weight: 1,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "29-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "29-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "29-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_30: IndicatorType = {
  label: "Indicator 30",
  weight: 0.241,
  sections: [
    {
      label: "Number of Publications",
      selectedValue: null,
      inputName: "30-1",
      type: "NumberField",
      placeholder: "Enter the number of publications",
    },
    {
      label: "Number of Research Staff",
      selectedValue: null,
      inputName: "30-2",
      type: "NumberField",
      placeholder: "Enter the number of research staff",
    },
  ],
  type: "NumberField",
};

const indicator_31: IndicatorType = {
  label: "Indicator 31",
  weight: 0.322,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      selectedValue: null,
      inputName: "31-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "31-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "31-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_32: IndicatorType = {
  label: "Indicator 32",
  weight: 0.18,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "0.25", "1"],
      selectedValue: null,
      inputName: "32-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "32-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "32-3",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_33: IndicatorType = {
  label: "Indicator 33",
  weight: 0.114,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "33-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "33-2",
      type: "Radio",
    },
  ],
  type: "Radio",
};

const indicator_34: IndicatorType = {
  label: "Indicator 34",
  weight: 0.143,
  sections: [
    {
      label: "Section 1",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "34-1",
      type: "Radio",
    },
    {
      label: "Section 2",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "34-2",
      type: "Radio",
    },
    {
      label: "Section 3",
      possibleValues: ["0", "1"],
      selectedValue: null,
      inputName: "34-3",
      type: "Radio",
    },
  ],
  type: "Radio",
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
};
