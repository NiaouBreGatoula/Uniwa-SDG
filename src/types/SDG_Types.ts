// These types are used to define the structure of the SDG data that is used in the application.

import { SimpleIndicator, SpecialIndicator } from "./SDG_Indicators";

export interface SDG {
  label: string;
  standsFor?: SDGType;
    indicators: (SimpleIndicator | SpecialIndicator )[];
    indicatorsWithValues: (SimpleIndicator | SpecialIndicator)[];
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
