import { SDG } from "../types/sdgTypes";

/// My Implementation of SDG Data

export const sdgData: SDG[] = [
  {
    name: "SDG 01",
    standsFor: "No Poverty",
    indicators: [
      {
        label: "Indicator I1",
        weight: 0.784,
        sections: [
          { possibleValues: ["0", "0.25", "1"], selectedValue: null },
          { possibleValues: ["0", "1"], selectedValue: null },
          { possibleValues: ["0", "1"], selectedValue: null },
        ],
      },
      {
        label: "Indicator I2",
        weight: 0.216,
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
    // TODO: We need the ability to add Number Input Fields, sections should accepts array of possibleValues
    name: "SDG 02",
    standsFor: "Zero Hunger",
    indicators: [
      {
        label: "Indicator I3",
        weight: 0.58,
        sections: [
          {
            NumberInputFields: [
              { name: "Annual Waste", placeholder: "Enter number in Kilos" },
            ],
            selectedValue: null,
          },
          {
            NumberInputFields: [
              {
                name: "Campus Population",
                placeholder: "Enter number of people",
              },
            ],
            selectedValue: null,
          },
          //   { possibleValues: ["0", "1"], selectedValue: null },
          //   { isTextField: true, selectedValue: null },
          //   { possibleValues: ["0", "1"], selectedValue: null },
        ],
      },
      {
        label: "Indicator I4",
        weight: 0.42,
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
    standsFor: "Good Health and Well-being",
    indicators: [
      {
        label: "Indicator I5",
        weight: 0.663,
        sections: [{ possibleValues: ["0", "0.5", "1"], selectedValue: null }],
      },
      {
        label: "Indicator I6",
        weight: 0.337,
        sections: [{ possibleValues: ["0", "0.5", "1"], selectedValue: null }],
      },
    ],
  },
];
