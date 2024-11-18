import { NumberFieldInputSection, RadioSection, Section } from "./SDG_Sections";

export interface IndicatorType {
  label: string;
  weight: number;
  type: IndicatorVariant;
  sections: Section[];
  score: number | null;
}

export interface SimpleIndicator extends IndicatorType {
  type: "simple";
  sections: RadioSection[];
}


export interface SpecialIndicator extends IndicatorType {
  type: "pink" | "green" | "white";
  sections: NumberFieldInputSection[];
  currentValue?: number | null;
  currentValues: [number | null, number | null];
  comparisonValues: [number | null, number | null];
}

export type IndicatorVariant = "pink" | "green" | "white" |"simple";
