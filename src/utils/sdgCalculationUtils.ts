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

  // const allSectionValues: number[] = Array.from(sectionDataMap.entries()).map(
  //   ([inputName, indicatorData]) => {
  //     // console.log(`#${index} inputName`, inputName);
  //     // console.log(`#${index} sectionData`, sectionData);

  //     if (
  //       sectionData.value === null &&
  //       !incompleteIndicators.includes(indicatorData.label)
  //     ) {
  //       throw new Error(
  //         `calcFinalSDGScore: Section: ${sectionData.inputName} value is null`
  //       );
  //     }

  //     indicatorData.sections.forEach((sect) => {
  //       sect.value = sectionDataMap.get(sect.inputName)!.value;
  //     });

  //     // console.log("indicatorData", indicatorData);

  //     // Handle weird indicators
  //     if (weirdIndicatorInputNames.includes(indicatorIndex)) {
  //       return calcWeirdIndicatorScore(indicatorData);
  //     } else {
  //       // Handle normal indicators
  //       return calcSimpleIndicatorScore(indicatorData);
  //     }
  //   }
  // );

  // return allSectionValues.reduce((acc, currValue) => {
  //   if (currValue === null) {
  //     return acc;
  //   }
  //   return acc + currValue;
  // }, 0);
};

// const getIndicatorData = (
//   allIndicatorData: typeof IndicatorStructures,
//   indicatorIndex: string
// ): IndicatorType => {
//   console.log("allIndicatorData", allIndicatorData);
//   console.log("indicatorIndex", indicatorIndex);
//   const parsedIndicatorName =
//     Number(indicatorIndex) >= 10 ? indicatorIndex : `0${indicatorIndex}`;

//   const indicatorKey =
//     `indicator_${parsedIndicatorName}` as keyof typeof allIndicatorData;

//   const indicatorData: IndicatorType = allIndicatorData[indicatorKey];

//   return indicatorData;
// };
