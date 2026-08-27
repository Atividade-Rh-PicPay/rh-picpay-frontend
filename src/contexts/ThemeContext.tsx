import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";

interface ThemeContextValue {
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const STORAGE_KEY = "pickpeople-theme";

export function ThemeContextProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState<boolean>(() => {
        return localStorage.getItem(STORAGE_KEY) === "dark";
});

useEffect(() => {
    localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
}, [isDark]);

function toggleTheme() {
    setIsDark((prev) => !prev);
}

return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
    <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
    </StyledThemeProvider>
    </ThemeContext.Provider>
);
}

export function useThemeContext(): ThemeContextValue {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContextProvider");
}
    return context;
}