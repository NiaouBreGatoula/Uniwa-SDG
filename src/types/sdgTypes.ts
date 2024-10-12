// These types are used to define the structure of the SDG data that is used in the application.

export interface SDG {
  label: string;
  standsFor?: SDGType;
  indicators: IndicatorType[];
}

export interface IndicatorType {
  label: string;
  weight: number;
  sections: Section[];
  type: IndicatorVariant;
}

export type IndicatorVariant = "Radio" | "NumberField";

export interface Section {
  label: string;
  placeholder?: string;
  possibleValues?: string[];
  selectedValue: string | null;
  type: SectionType;
}

export type SectionType = "Radio" | "NumberField";

export type SDGType =
  | "No Poverty"
  | "Zero Hunger"
  | "Good Health and Well-being"
  | "Quality Education"
  | "Gender Equality"
  | "Clean Water and Sanitation"
  | "Affordable and Clean Energy"
  | "Decent Work and Economic Growth"
  | "Industry, Innovation, and Infrastructure"
  | "Reduced Inequality"
  | "Sustainable Cities and Communities"
  | "Responsible Consumption and Production"
  | "Climate Action"
  | "Life Below Water"
  | "Life on Land"
  | "Peace, Justice, and Strong Institutions"
  | "Partnerships for the Goals";
