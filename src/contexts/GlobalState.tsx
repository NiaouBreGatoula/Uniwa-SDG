import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  //   Dispatch,
  //   SetStateAction,
} from "react";
import { AppState, GlobalState } from "../types/GlobalState_Types";

import { allSDGs } from "../constants/sdgPages";
import { SimpleIndicator, SpecialIndicator } from "../types/SDG_Indicators";
import { cloneDeep } from "lodash";

// Create the context with an initial value of undefined (to be set later)
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// Create a provider component
interface GlobalStateProviderProps {
  children: ReactNode;
}

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const testingMode = true;

  const [appState, setAppState] = useState<AppState>(() => {
    const initialAppState = new Map<
      string,
      SimpleIndicator | SpecialIndicator
    >();
    allSDGs.forEach((sdg) => {
      if (testingMode) {
        sdg.indicatorsWithValues.forEach((indicator) => {
          indicator.sections.forEach((section) => {
            initialAppState.set(section.inputName, indicator);
          });
        });
      } else {
        sdg.indicators.forEach((indicator) => {
          indicator.sections.forEach((section) => {
            initialAppState.set(section.inputName, indicator);
          });
        });
      }
    });
    return initialAppState;
  });

  // console.log("Rendered GlobalStateProvider");

  // useEffect(() => {
  //   // 1. Create a Map with the section name as the key and the section data as the value
  //   const initialAppState = new Map<
  //     string,
  //     SimpleIndicator | SpecialIndicator
  //   >();

  //   // 2. Retrieve all the sections from the allSDGs Array and add them to the Map
  //   allSDGs.forEach((sdg) => {
  //     sdg.indicators.forEach((indicator) => {
  //       indicator.sections.forEach((section) => {
  //         initialAppState.set(section.inputName, indicator);
  //       });
  //     });
  //   });

  //   // 4. Set the initial state
  //   if (!appState) {
  //     setAppState(initialAppState);
  //   }
  // }, []);

  const handleUserInputSimpleIndicator = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name: inputName, value: inputValue } = event.target; // E.g. inputName: "1-2", value: "0.25"

      // Update the state immutably
      setAppState((prev) => {
        // Check if the value is a string that can be converted into a number
        if (isNaN(Number(inputValue))) {
          console.error(
            "handleUserInput: input value cannot be converted into a number"
          );
          return prev;
        }

        // Clone the state, so we don't mutate the original
        const stateClone = cloneDeep(prev);

        // Update the section data
        const desiredIndicator = stateClone.get(inputName) as SimpleIndicator;

        if (!desiredIndicator) {
          console.error(
            `handleUserInput: Section data not found for ${inputName}`
          );
          return prev;
        }

        if (desiredIndicator.type !== "simple") {
          console.error(
            `handleUserInput: Indicator type is not "simple" for ${inputName}`
          );
          return prev;
        }

        // Find the section data that matches the inputName
        const desiredSectionData = desiredIndicator.sections.find(
          (section) => section.inputName === inputName
        );

        if (!desiredSectionData) {
          console.error(
            `handleUserInput: Section data not found for ${inputName}`
          );
          return prev;
        }

        const updatedSectionData = {
          ...desiredSectionData,
          value: Number(inputValue),
        };

        const updatedIndicatorData = {
          ...desiredIndicator,
          sections: desiredIndicator.sections.map((section) =>
            section.inputName === inputName ? updatedSectionData : section
          ),
        };

        const updatedMap = new Map(stateClone);
        updatedMap.set(inputName, updatedIndicatorData);

        return updatedMap;
      });

      // console.log("handleUserInput: ", appState);
    },
    [setAppState]
  );

  const handleUserInputSpecialIndicator = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name: inputName, value: inputValue } = event.target; // E.g. inputName: "1-2", value: "0.25"

      // Update the state immutably
      setAppState((prev) => {
        // Check if the value is a string that can be converted into a number
        if (isNaN(Number(inputValue))) {
          console.error(
            "handleUserInput: input value cannot be converted into a number"
          );
          return prev;
        }

        // Clone the state, so we don't mutate the original
        const stateClone = cloneDeep(prev);

        // Update the section data
        const desiredIndicator = stateClone.get(inputName) as SpecialIndicator;

        if (!desiredIndicator) {
          console.error(
            `handleUserInput: Section data not found for ${inputName}`
          );
          return prev;
        }

        if (
          desiredIndicator.type !== "pink" &&
          desiredIndicator.type !== "green"
        ) {
          console.error(
            `handleUserInput: Indicator type is not "pink" or "green" for ${inputName}`
          );
          return prev;
        }

        // Find the section data that matches the inputName
        const desiredSectionData = desiredIndicator.sections.find(
          (section) => section.inputName === inputName
        );

        if (!desiredSectionData) {
          console.error(
            `handleUserInput: Section data not found for ${inputName}`
          );
          return prev;
        }

        switch (inputName.split("-")[1]) {
          case "1":
            desiredIndicator.currentValues[0] = Number(inputValue);
            break;

          case "2":
            desiredIndicator.currentValues[1] = Number(inputValue);
            break;

          case "3":
            desiredIndicator.comparisonValues[0] = Number(inputValue);
            break;

          case "4":
            desiredIndicator.comparisonValues[1] = Number(inputValue);
            break;

          default:
            console.error(
              `handleUserInput: Invalid inputName for Special Indicator: ${inputName}`
            );
            return prev;
        }

        const updatedSectionData = {
          ...desiredSectionData,
          value: Number(inputValue),
        };

        const updatedIndicatorData = {
          ...desiredIndicator,
          sections: desiredIndicator.sections.map((section) =>
            section.inputName === inputName ? updatedSectionData : section
          ),
        };

        const updatedMap = new Map(stateClone);
        updatedMap.set(inputName, updatedIndicatorData);

        return updatedMap;
      });

      // console.log("handleUserInput: ", appState);
    },
    [setAppState]
  );

  return (
    <GlobalStateContext.Provider
      value={{
        appState,
        handleUserInputSpecialIndicator,
        handleUserInputSimpleIndicator,
        testingMode,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
