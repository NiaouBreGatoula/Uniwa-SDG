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
  type: "pink" | "green";
  sections: NumberFieldInputSection[];
  currentValues: [number | null, number | null];
  comparisonValues: [number | null, number | null];
}

export type IndicatorVariant = "pink" | "green" | "simple";
