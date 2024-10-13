import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { GlobalStateProvider } from "./contexts/GlobalState.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </NextUIProvider>
  </StrictMode>
);
