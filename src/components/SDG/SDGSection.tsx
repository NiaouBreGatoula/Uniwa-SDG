import type { Section } from "../../types/sdgTypes";
import NumberFieldInput from "./InputTypes/NumberFieldInput";
import RadioInput from "./InputTypes/RadioInput";

interface SDGSectionProps {
  inputName: string;
  section: Section;
  // sectionIndex: number;
  // indicatorIndex: number;
  // updateIndicatorSection: (
  //   indicatorIndex: number,
  //   sectionIndex: number,
  //   value: string
  // ) => void;
}

const SDGSection = ({ inputName, section }: SDGSectionProps) => {
  const [, sectionIndex] = inputName.split("-").map(Number);

  return (
    <>
      <h3 className="font-medium text-sm mb-2">Section {sectionIndex}</h3>

      {section.type === "NumberField" ? (
        <NumberFieldInput name={inputName} />
      ) : (
        <RadioInput name={inputName} />
      )}
    </>
  );
};

export default SDGSection;
