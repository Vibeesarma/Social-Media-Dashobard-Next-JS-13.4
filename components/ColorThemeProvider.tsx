'use client'
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider enableColorScheme={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default ColorThemeProvider;
