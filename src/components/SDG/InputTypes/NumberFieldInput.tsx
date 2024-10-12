import { Input } from "@nextui-org/react";
import useGlobalState from "../../../contexts/useGlobalState";

type Size = "sm" | "md" | "lg";

const NumberFieldInput = ({
  name,
  size = "lg",
}: {
  name: string;
  size?: Size;
}) => {
  const { SDGData, handleUserInput } = useGlobalState();

  const [indicatorID, sectionIndex] = name.split("-").map(Number);
  const sections = SDGData?.indicators.get(indicatorID)?.sections;
  const selectedValue = sections?.get(sectionIndex)?.selectedValue;

  return (
    <Input
      size={size}
      type="number"
      label=""
      name={name}
      placeholder="Enter a number"
      value={String(selectedValue ? selectedValue : "")}
      onChange={handleUserInput}
      className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
    />
  );
};

export default NumberFieldInput;
