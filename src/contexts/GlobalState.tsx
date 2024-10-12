import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  //   Dispatch,
  //   SetStateAction,
} from "react";

// Define the shape of your global state
export interface GlobalState {
  SDGData: SDGData | null;
  //   setSDGData: Dispatch<SetStateAction<SDGData | null>>;
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SDGData {
  indicators: Map<number, IndicatorData>;
}

interface IndicatorData {
  name: string;
  weight: number;
  sections: Map<number, SectionData>;
  textField?: string;
}

interface SectionData {
  inputType: "radio button" | "number input";
  possibleValues?: string[];
  selectedValue: number | null;
}

// Create the context with an initial value of undefined (to be set later)
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// Create a provider component
interface GlobalStateProviderProps {
  children: ReactNode;
}

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  //   const [count, setCount] = useState<number>(0);
  const [SDGData, setSDGData] = useState<SDGData | null>(null);

  const handleUserInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target; // E.g. "1-2"
      const [indicatorID, sectionIndex] = name.split("-").map(Number);

      // Update the state immutably
      setSDGData((prev) => {
        if (!prev) return null;

        const newIndicators = new Map(prev.indicators);
        const indicatorData = newIndicators.get(indicatorID);
        if (!indicatorData) {
          console.error("handleUserInput: Indicator not found");
          return prev;
        }

        const newSections = new Map(indicatorData.sections);
        const sectionData = newSections.get(sectionIndex);
        if (!sectionData) {
          console.error("handleUserInput: Section not found");
          return prev;
        }

        // Update the section data
        const updatedSectionData = {
          ...sectionData,
          selectedValue: Number(value),
        };

        newSections.set(sectionIndex, updatedSectionData);
        indicatorData.sections = newSections;
        newIndicators.set(indicatorID, {
          ...indicatorData,
          sections: newSections,
        });

        return { ...prev, indicators: newIndicators };
      });
    },
    []
  );

  return (
    <GlobalStateContext.Provider value={{ SDGData, handleUserInput }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
