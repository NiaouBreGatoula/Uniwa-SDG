import { RadioGroup, Radio } from "@nextui-org/react";
import useGlobalState from "../../../contexts/useGlobalState";

const RadioInput = ({
  name,
  possibleValues,
}: {
  name: string;
  possibleValues: string[];
}) => {
  const { appState, handleUserInput, targetedYear } = useGlobalState();

  if (!appState) {
    return null;
  }

  const selectedValue = appState[targetedYear].get(name)?.selectedValue;

  return (
    <RadioGroup
      orientation="horizontal"
      value={String(selectedValue ? selectedValue : "")}
      className="space-x-4"
      name={name}
      onChange={handleUserInput}
    >
      {possibleValues.map((value, valueIndex) => (
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
