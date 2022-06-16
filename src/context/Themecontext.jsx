import { createContext , useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, settheme] = useState("light");

    const toggletheme = () => {
        if(theme === "light")
        {
            settheme("dark");
        }
        else{
            settheme("light");
        }
    };

    return <ThemeContext.Provider 
    value={{
        theme,
        islight : theme === "light",
        toggletheme,
    }}
    >{children}</ThemeContext.Provider>
}