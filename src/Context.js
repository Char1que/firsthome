import {createContext} from "react";

export const themes = {
    light: {
        background: "#FFF",
        text: "#1976d2",
    },
    dark: {
        background: "#000",
        text: "#FFF",
    }
}
export const ThemeContext = createContext({themes: themes.light, toggleTheme: () => {}});