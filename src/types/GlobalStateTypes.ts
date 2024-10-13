export interface GlobalState {
  appState: AppState | null;
  targetedYear: YearType;
  setTargetedYear: React.Dispatch<React.SetStateAction<YearType>>;
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AppState {
  currentYear: Map<string, SectionData>;
  comparisonYear: Map<string, SectionData>;
}

export interface SectionData {
  inputName: string;
  selectedValue: number | null;
}

export type YearType = "currentYear" | "comparisonYear";
