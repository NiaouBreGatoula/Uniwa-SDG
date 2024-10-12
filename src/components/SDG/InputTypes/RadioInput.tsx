import { RadioGroup, Radio } from "@nextui-org/react";
import useGlobalState from "../../../contexts/useGlobalState";

const RadioInput = ({ name }: { name: string }) => {
  const { SDGData, handleUserInput } = useGlobalState();

  const [indicatorID, sectionIndex] = name.split("-").map(Number);
  const sections = SDGData?.indicators.get(indicatorID)?.sections;
  const section = sections?.get(sectionIndex);
  const selectedValue = section?.selectedValue;

  return (
    <RadioGroup
      orientation="horizontal"
      value={String(selectedValue ? selectedValue : "")}
      onChange={handleUserInput}
      className="space-x-4"
    >
      {section?.possibleValues?.map((value, valueIndex) => (
        <Radio
          key={valueIndex}
          value={value}
          className="hover:bg-gray-200 focus:ring-blue-500"
        >
          {value}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default RadioInput;
