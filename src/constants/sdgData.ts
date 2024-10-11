import { SDG } from "../types/sdgTypes";

export const sdgData: SDG[] = [
  {
    name: "SDG 01",
    indicators: [
      {
        label: "Indicator I1",
        weight: 0.125,
        formulaType: "poverty",
        sections: [
          { possibleValues: ["0", "0.25", "1"], selectedValue: null },
          { possibleValues: ["0", "1"], selectedValue: null },
          { possibleValues: ["0", "1"], selectedValue: null },
        ],
      },
      {
        label: "Indicator I2",
        weight: 0.125,
        formulaType: "poverty",
        sections: [
          { possibleValues: ["0", "0.25", "1"], selectedValue: null },
          { possibleValues: ["0", "1"], selectedValue: null },
          { possibleValues: ["0", "1"], selectedValue: null },
        ],
      },
    ],
  },
  {
    name: "SDG 01",
    indicators: [
      {
        label: "Indicator I1",
        weight: 0.125,
        formulaType: "poverty",
        sections: [
          { possibleValues: ["0", "1", "0.25", "1"], selectedValue: null },
          { isTextField: true, selectedValue: null },
          { possibleValues: ["0", "1"], selectedValue: null },
        ],
      },
    ],
  },
  {
    name: "SDG 03",
    indicators: [
      {
        label: "Indicator I3",
        weight: 0.5,
        formulaType: "health",
        sections: [{ possibleValues: ["0", "0.5", "1"], selectedValue: null }],
      },
    ],
  },
];


