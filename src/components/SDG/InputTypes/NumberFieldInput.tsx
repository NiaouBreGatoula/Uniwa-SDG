import { Input } from "@nextui-org/react";
import useGlobalState from "../../../contexts/useGlobalState";

type Size = "sm" | "md" | "lg";

interface NumberFieldInputProps {
  name: string;
  size?: Size;
  placeholder?: string;
}

const NumberFieldInput = ({
  name,
  size = "lg",
  placeholder,
}: NumberFieldInputProps) => {
  const { appState, handleUserInputSpecialIndicator } = useGlobalState();
  // const [targetYear, setTargetYear] = useState<
  //   "currentYear" | "comparisonYear"
  // >("currentYear");

  if (!appState) {
    return null;
  }

  const selectedValue = appState.get(name)?.sections.find((section) => {
    return section.inputName === name;
  })?.value;

  return (
    <Input
      size={size}
      type="number"
      label=""
      name={name}
      placeholder={placeholder}
      value={String(selectedValue ? selectedValue : "")}
      onChange={handleUserInputSpecialIndicator}
      className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
    />
  );
};

export default NumberFieldInput;
