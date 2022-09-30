import React, {useContext} from 'react';
import {ThemeContext} from "../Context";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <header>
            <ThemeContext.Provider value={{themes: theme, toggleTheme: toggleTheme}}>
                <Button onClick={toggleTheme}>
                    Переключить стиль
                </Button>
            </ThemeContext.Provider>
            <div >
                <div className="navigation">
                    <NavLink className="navigationMenu" to={"/home"}>Главная</NavLink>
                    <NavLink className="navigationMenu" to={"/works"}>Мои работы</NavLink>
                    <NavLink className="navigationMenu" to={"/chat"}>Чат</NavLink>
                    <NavLink className="navigationMenu" to={"/bot"}>Бот</NavLink>
                </div>
        </div>
        </header>
    );
};

export default Header;