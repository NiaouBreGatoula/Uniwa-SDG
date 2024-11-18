import { RadioGroup, Radio } from "@nextui-org/react";
import useGlobalState from "../../../contexts/useGlobalState";

const RadioInput = ({
  name,
  possibleValues,
}: {
  name: string;
  possibleValues: string[];
}) => {
  const { appState, handleUserInputSimpleIndicator } = useGlobalState();

  if (!appState) {
    return null;
  }

  const selectedValue = appState.get(name)?.sections.find((section) => {
    return section.inputName === name;
  })?.value;

  // console.log(`Radio Name: ${name}`);
  // console.log("Radio Possible Values: ", possibleValues);
  // console.log("Targeted Year: ", targetedYear);
  // console.log("Radio Selected Value: ", selectedValue);

  return (
    <RadioGroup
      orientation="horizontal"
      value={String(selectedValue !== null ? selectedValue : "")}
      className="space-x-4"
      name={name}
      onChange={handleUserInputSimpleIndicator}
    >
      {possibleValues.map((value, valueIndex) => (
        <Radio
          key={`${name}-${valueIndex}`}
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
