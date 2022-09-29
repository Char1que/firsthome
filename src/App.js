/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Social from "./components/Social";
import Works from "./components/Works";
import NotFoundPage from "./components/NotFoundPage";
import Chat from "./components/Chat";
import AboutMyWork from "./components/AboutMyWork";
import Home from "./components/Home";
import Bot from "./components/Bot";
import PageWrapper from "./PageWrapper";
import {useContext, useState} from "react";
import {ThemeContext} from "./Context";
import {Button} from "@mui/material";

function App() {
    const {themes} = useContext(ThemeContext)
    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = () => {
        setTheme(prevState => prevState === themes.light ? themes.dark : themes.light);
    }
    return (<div>
            <Button onClick={toggleTheme}>
                Переключить стиль
            </Button>
            <div style={{background: themes.background, color: themes.text}}>
                <ThemeContext.Provider value={{themes: theme, toggleTheme: toggleTheme}}>
                    <PageWrapper/>
                </ThemeContext.Provider>
                <div className="navigation">
                    <NavLink className="navigationMenu" to={"/home"}>Главная</NavLink>
                    <NavLink className="navigationMenu" to={"/social"}>Мои соц. сети</NavLink>
                    <NavLink className="navigationMenu" to={"/works"}>Мои работы</NavLink>
                    <NavLink className="navigationMenu" to={"/chat"}>Чат</NavLink>
                    <NavLink className="navigationMenu" to={"/bot"}>Бот</NavLink>
                </div>
                <Routes>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/social"} element={<Social/>}/>
                    <Route path={"/works"} element={<Works/>}/>
                    <Route path={"/chat"} element={<Chat/>}/>
                    <Route path={"/aboutmywork/:id"} element={<AboutMyWork/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                    <Route path={"/bot"} element={<Bot/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
