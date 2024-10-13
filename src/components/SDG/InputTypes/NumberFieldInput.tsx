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
  const { appState, handleUserInput, targetedYear } = useGlobalState();

  if (!appState) {
    return null;
  }

  const selectedValue = appState[targetedYear].get(name)?.selectedValue;

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
