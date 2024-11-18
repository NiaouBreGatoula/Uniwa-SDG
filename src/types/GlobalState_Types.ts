import { SimpleIndicator, SpecialIndicator } from "./SDG_Indicators";

export interface GlobalState {
  appState: AppState;
  testingMode: boolean;
  handleUserInputSpecialIndicator: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleUserInputSimpleIndicator: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  toggleTestMode: () => void;  // Προσθήκη του toggleTestMode
}

export type AppState = Map<string, SimpleIndicator | SpecialIndicator>;

// export interface SectionData {
//   inputName: string;
//   selectedValue: number | null;
// }

// export type YearType = "currentYear" | "comparisonYear";
