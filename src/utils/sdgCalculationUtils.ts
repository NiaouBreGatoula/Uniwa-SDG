import { SimpleIndicator, SpecialIndicator } from "../types/SDG_Indicators";
import { calcSimpleIndicator, calcSpecialIndicator } from "./indicatorUtils";

export const calcFinalSDGScore = (
  appStateData: Map<string, SimpleIndicator | SpecialIndicator>
): number => {
  let totalScore = 0;

  const duplicateIndicators = Array.from(appStateData.values());
  const uniqueIndicators = Array.from(new Set(duplicateIndicators));

  uniqueIndicators.forEach((indicator, inputName) => {
    if (indicator === null) {
      throw new Error(`calcFinalSDGScore: Indicator: ${inputName} is null`);
    }

    // console.log("Total Indicators: ", uniqueIndicators);

    if (indicator.type !== "simple") {
      // Managing Special Indicators
      totalScore += calcSpecialIndicator(indicator);
    } else {
      // Managing Simple Indicators
      totalScore += calcSimpleIndicator(indicator);
    }
  });

  return totalScore;
};
