import { useContext } from "react";
import { GlobalStateContext, GlobalState } from "./GlobalState";

// Custom hook to use the global state
const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export default useGlobalState;
