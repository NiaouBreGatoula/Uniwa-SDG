import { SimpleIndicator, SpecialIndicator } from "../types/SDG_Indicators";
import { percentageChange, roundToFour } from "./generalUtils";

// SIMPLE INDICATORS
export const calcSimpleIndicator = (indicator: SimpleIndicator): number => {
    const sectionValues = indicator.sections.map((section) => {
    if (section.value === null) {
      throw new Error(
        `calcSimpleIndicatorScore: Section: ${section.inputName} value is null`
      );
    }
    return section.value;
  });

  const result = roundToFour(
    sectionValues.reduce(
      (acc, currValue) => acc + currValue * indicator.weight,
      0
    )
  );

  indicator.score = result;
  return result;
};

export const calcSpecialIndicator = (indicator: SpecialIndicator): number => {
  if (indicator.type === "green") { // go for green
    return calcGreenIndicator(indicator);
  }

  if (indicator.type === "pink") { // go for pink
    return calcPinkIndicator(indicator);
   }

  if (indicator.type === "white") { // go for white
        return calcWhiteIndicator(indicator);
  }


  throw new Error("calcSpecialIndicator: Indicator type not found");
};


const calcWhiteIndicator = (indicator: SpecialIndicator): number => {
    if (
         indicator.currentValue === null ||
        !indicator.currentValue 
    ) {
        throw new Error(
            "calcWhiteIndicator: currentValues or comparisonValues are null"
        );
    }

    const result = roundToFour(indicator.currentValue * indicator.weight);
    indicator.score = result;

    console.log(`Indicator: ${indicator.label}`);
    console.log(`Type: ${indicator.type}`);
    console.log("final score: ", result);
    console.log("------------------------------------");

    return result;
};



const calcGreenIndicator = (indicator: SpecialIndicator): number => {
    if (
        !indicator.currentValues ||
    indicator.currentValues[0] === null ||
        indicator.currentValues[1] === null ||
        !indicator.comparisonValues ||
    indicator.comparisonValues[0] === null ||
    indicator.comparisonValues[1] === null
  ) {
    throw new Error(
      "calcGreenIndicator: currentValues or comparisonValues are null"
    );
  }
  
  const currentValue = indicator.currentValues[0] / indicator.currentValues[1];
  const comparisonValue =
    indicator.comparisonValues[0] / indicator.comparisonValues[1];

  //   const div_result = currentValue / comparisonValue;
  const percentageChangeValue = percentageChange(currentValue, comparisonValue);

  let finalValue = 0;

  if (percentageChangeValue <= 1) {
    finalValue = 1 / percentageChangeValue;
  }

  const result = roundToFour(finalValue * indicator.weight);
  indicator.score = result;

  console.log(`Indicator: ${indicator.label}`);
  console.log(`Type: ${indicator.type}`);
  console.log("percentageChangeValue: ", roundToFour(percentageChangeValue));
  console.log("final score: ", result);
  console.log("------------------------------------");

  return result;
};

const calcPinkIndicator = (indicator: SpecialIndicator): number => {
    if (
    !indicator.currentValues ||
    indicator.currentValues[0] === null ||
    indicator.currentValues[1] === null ||
    !indicator.comparisonValues ||
    indicator.comparisonValues[0] === null ||
    indicator.comparisonValues[1] === null
  ) {
    throw new Error(
      "calcGreenIndicator: currentValues or comparisonValues are null"
    );
  }
  const currentValue = indicator.currentValues[0] / indicator.currentValues[1];
  const comparisonValue =
    indicator.comparisonValues[0] / indicator.comparisonValues[1];

  //   const div_result = currentValue / comparisonValue;
  const percentageChangeValue = percentageChange(currentValue, comparisonValue);

  let finalValue = 0;

  if (percentageChangeValue >= 1) {
    finalValue = percentageChangeValue;
  }

  const result = roundToFour(finalValue * indicator.weight);
  indicator.score = result;

  console.log(`Indicator: ${indicator.label}`);
  console.log(`Type: ${indicator.type}`);
  console.log("percentageChangeValue: ", roundToFour(percentageChangeValue));
  console.log("final score: ", result);
  console.log("------------------------------------");

  return result;
};

export const getIndicatorSectionsSum = (indicator: SimpleIndicator): number => {
  return indicator.sections.reduce((acc, section) => {
    if (section.value === null) {
      throw new Error(
        `getIndicatorSectionsSum: Section: ${section.inputName} value is null`
      );
    }
    return acc + section.value;
  }, 0);
};