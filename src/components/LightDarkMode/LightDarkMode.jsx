import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css"
export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage("theme", "Dark");
    console.log(theme);

    return (
        <div id="LightDark" data-theme={theme}>
            <h2>Hello User</h2>
            <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
                Toggle to {theme === "Light" ? "Dark" : "Light"} Mode
            </button>
        </div>
    );
}