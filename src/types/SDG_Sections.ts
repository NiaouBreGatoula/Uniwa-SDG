export interface Section {
  label: string;
  value: number | null;
  inputName: string;
  type: SectionType;
  possibleValues?: string[];
  placeholder?: string;
}

export interface RadioSection extends Section {
  type: "Radio";
  possibleValues: string[];
}

export interface NumberFieldInputSection extends Section {
  type: "NumberField";
  placeholder: string;
}

export type SectionType = "Radio" | "NumberField";
