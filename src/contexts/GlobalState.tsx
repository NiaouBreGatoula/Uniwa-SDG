import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  //   Dispatch,
  //   SetStateAction,
} from "react";
import {
  AppState,
  GlobalState,
  SectionData,
  YearType,
} from "../types/GlobalStateTypes";

import { allSDGs } from "../constants/sdgPages";

// Create the context with an initial value of undefined (to be set later)
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// Create a provider component
interface GlobalStateProviderProps {
  children: ReactNode;
}

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  //   const [count, setCount] = useState<number>(0);
  const [appState, setAppState] = useState<AppState | null>(null);
  const [targetedYear, setTargetedYear] = useState<YearType>("currentYear");

  // Initialize the app state

  // 1. Create a Map with the section name as the key and the section data as the value
  const sectionsInit = new Map<string, SectionData>();

  // 2. Retrieve all the sections from the allSDGs Array and add them to the Map
  allSDGs.forEach((sdg) => {
    sdg.indicators.forEach((indicator) => {
      indicator.sections.forEach((section) => {
        sectionsInit.set(section.inputName, {
          selectedValue: null,
          inputName: section.inputName,
        });
      });
    });
  });

  // 3. Create the initial state
  const initialState: AppState = {
    currentYear: sectionsInit,
    comparisonYear: sectionsInit,
  };

  // 4. Set the initial state
  if (!appState) {
    setAppState(initialState);
  }

  const handleUserInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name: inputName, value } = event.target; // E.g. "1-2"

      console.log("The Event: ", event.target);

      // Update the state immutably
      setAppState((prev) => {
        if (!prev) {
          console.error(
            "handleUserInput: AppState not found, probably not initialized"
          );
          return null;
        }

        // Check if the value is a number
        if (isNaN(Number(value))) {
          console.error(
            "handleUserInput: input value cannot be converted into a number"
          );
          return prev;
        }

        // Clone the state, so we don't mutate the original
        const stateClone = { ...prev };

        // Update the section data
        const desiredSectionData = stateClone[targetedYear].get(inputName);

        if (!desiredSectionData) {
          console.error(
            `handleUserInput: Section data not found for ${inputName}`
          );
          return prev;
        }

        const updatedSectionData = {
          ...desiredSectionData,
          selectedValue: Number(value),
        };

        stateClone[targetedYear].set(inputName, updatedSectionData);

        return stateClone;
      });

      console.log("handleUserInput: ", appState);
    },
    [appState, targetedYear]
  );

  return (
    <GlobalStateContext.Provider
      value={{ appState, handleUserInput, targetedYear, setTargetedYear }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
