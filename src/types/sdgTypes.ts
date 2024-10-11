export interface Section {
  possibleValues?: string[];
  selectedValue: string | null;
  isTextField?: boolean;
}

export interface IndicatorType {
  label: string;
  weight: number;
  formulaType: string;
  sections: Section[];
  textField?: string;
}

export interface SDG {
  name: string;
  standsFor?: SDGType;
  indicators: IndicatorType[];
}

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
