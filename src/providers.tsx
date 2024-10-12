// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { GlobalStateProvider } from "./contexts/GlobalState";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <GlobalStateProvider>{children}</GlobalStateProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
