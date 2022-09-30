/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import {Route, Routes} from "react-router-dom";
import Works from "./components/Works";
import NotFoundPage from "./components/NotFoundPage";
import Chat from "./components/Chat";
import AboutWork from "./components/AboutWork";
import Home from "./components/Home";
import Bot from "./components/Bot";
import Header from "./components/Header";
import {useState} from "react";
import {themes,ThemeContext} from "./Context";

function App() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
    const toggleTheme = () => {
        setCurrentTheme(prevState => prevState === themes.light ? themes.dark : themes.light)
    }
    return (<div style={{background: currentTheme.background, color: currentTheme.text}}>
            <ThemeContext.Provider value={{theme: currentTheme, toggleTheme: toggleTheme}}>
            <Header/>
                <Routes>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/works"} element={<Works/>}/>
                    <Route path={"/chat"} element={<Chat/>}/>
                    <Route path={"chat/:id"} element={<AboutWork/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                    <Route path={"/bot"} element={<Bot/>}/>
                </Routes>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
