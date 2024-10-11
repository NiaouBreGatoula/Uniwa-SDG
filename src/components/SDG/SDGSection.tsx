import { Input, RadioGroup, Radio } from "@nextui-org/react";
import type { Section } from "../../types/sdgTypes";

interface SDGSectionProps {
  section: Section;
  sectionIndex: number;
  indicatorIndex: number;
  updateIndicatorSection: (
    indicatorIndex: number,
    sectionIndex: number,
    value: string
  ) => void;
}

const SDGSection = ({
  section,
  sectionIndex,
  indicatorIndex,
  updateIndicatorSection,
}: SDGSectionProps) => {
  return (
    <>
      <h3 className="font-medium text-sm mb-2">Section {sectionIndex + 1}</h3>

      {section.isTextField ? (
        <Input
          size="lg"
          type="number"
          label=""
          placeholder="Enter a number"
          value={section.selectedValue || ""}
          onChange={(e) =>
            updateIndicatorSection(indicatorIndex, sectionIndex, e.target.value)
          }
          className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      ) : (
        <RadioGroup
          orientation="horizontal"
          value={section.selectedValue || ""}
          onChange={(event) =>
            updateIndicatorSection(
              indicatorIndex,
              sectionIndex,
              event.target.value
            )
          }
          className="space-x-4"
        >
          {section.possibleValues?.map((value, valueIndex) => (
            <Radio
              key={valueIndex}
              value={value}
              className="hover:bg-gray-200 focus:ring-blue-500"
            >
              {value}
            </Radio>
          ))}
        </RadioGroup>
      )}
    </>
  );
};

export default SDGSection;
