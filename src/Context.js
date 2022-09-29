import {createContext} from "react";

export const themes = {
    light: {
        background: "#FFF",
        text: "#000",
        button: "#1976d2"
    },
    dark: {
        background: "#000",
        text: "#FFF",
        button: "#FFF"
    }
}
export const ThemeContext = createContext({themes: themes.light, toggleTheme: () => {}});