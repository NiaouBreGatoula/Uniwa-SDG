import { SectionData } from "../types/GlobalStateTypes";
import {
  incompleteIndicators,
  weirdIndicatorInputNames,
} from "../constants/sdgPages";
import type { IndicatorType } from "../types/sdgTypes";
import * as IndicatorStructures from "../constants/indicators";
import _ from "lodash";

export const calcFinalSDGScore = (
  sectionDataMap: Map<string, SectionData>
): number => {
  const allIndicatorData = _.cloneDeep({ ...IndicatorStructures });

  // console.log("SectionData", Array.from(sectionData.entries()));
  const allSectionValues: number[] = Array.from(sectionDataMap.entries()).map(
    ([inputName, sectionData], index) => {
      console.log(`#${index} inputName`, inputName);
      console.log(`#${index} sectionData`, sectionData);

      const indicatorIndex = inputName.split("-")[0];

      const indicatorData = getIndicatorData(allIndicatorData, indicatorIndex);

      if (
        sectionData.selectedValue === null &&
        !incompleteIndicators.includes(indicatorData.label)
      ) {
        throw new Error(
          `calcFinalSDGScore: Section: ${sectionData.inputName} value is null`
        );
      }

      indicatorData.sections.forEach((sect) => {
        sect.selectedValue = sectionDataMap.get(sect.inputName)!.selectedValue;
      });

      console.log("indicatorData", indicatorData);

      // Handle weird indicators
      if (weirdIndicatorInputNames.includes(indicatorIndex)) {
        return calcWeirdIndicatorScore(indicatorData);
      } else {
        // Handle normal indicators
        return calcSimpleIndicatorScore(indicatorData);
      }
    }
  );

  return allSectionValues.reduce((acc, currValue) => {
    if (currValue === null) {
      return acc;
    }
    return acc + currValue;
  }, 0);
};

export const calcSimpleIndicatorScore = (
  indicatorData: IndicatorType
): number => {
  console.log("🤓 CalcSimpleIndicatorScore: indicatorData", indicatorData);
  const sectionValues = indicatorData.sections.map((section) => {
    console.log(
      "IncompleteIndicators: ",
      incompleteIndicators.includes(indicatorData.label)
    );
    if (incompleteIndicators.includes(indicatorData.label)) {
      return 0;
    }

    if (section.selectedValue === null) {
      throw new Error(
        `calcSimpleIndicatorScore: Section: ${section.inputName} value is null`
      );
    }
    return section.selectedValue;
  });
  return sectionValues.reduce(
    (acc, currValue) => acc + currValue * indicatorData.weight,
    0
  );
};

export const calcWeirdIndicatorScore = (
  indicatorData: IndicatorType
): number => {
  if (indicatorData.howToHandle === "result < 1 then 0") {
    return Math.max(
      0,
      indicatorData.sections[0].selectedValue! /
        indicatorData.sections[1].selectedValue! /
        indicatorData.weight
    );
  } else {
    return Math.min(
      0,
      indicatorData.sections[0].selectedValue! /
        indicatorData.sections[1].selectedValue! /
        indicatorData.weight
    );
  }
};

const getIndicatorData = (
  allIndicatorData: typeof IndicatorStructures,
  indicatorIndex: string
): IndicatorType => {
  console.log("allIndicatorData", allIndicatorData);
  console.log("indicatorIndex", indicatorIndex);
  const parsedIndicatorName =
    Number(indicatorIndex) >= 10 ? indicatorIndex : `0${indicatorIndex}`;

  const indicatorKey =
    `indicator_${parsedIndicatorName}` as keyof typeof allIndicatorData;

  const indicatorData: IndicatorType = allIndicatorData[indicatorKey];

  return indicatorData;
};
