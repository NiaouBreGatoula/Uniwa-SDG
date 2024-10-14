import { SimpleIndicator, SpecialIndicator } from "./SDG_Indicators";

export interface GlobalState {
  appState: AppState;
  testingMode: boolean;
  // targetedYear: YearType;
  // setTargetedYear: React.Dispatch<React.SetStateAction<YearType>>;
  handleUserInputSpecialIndicator: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleUserInputSimpleIndicator: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export type AppState = Map<string, SimpleIndicator | SpecialIndicator>;

// export interface SectionData {
//   inputName: string;
//   selectedValue: number | null;
// }

// export type YearType = "currentYear" | "comparisonYear";
