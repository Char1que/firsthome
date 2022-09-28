/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Social from "./components/Social";
import Works from "./components/Works";
import NotFoundPage from "./components/NotFoundPage";
import Chat from "./components/Chat";
import AboutMyWork from "./components/AboutMyWork";
import Home from "./components/Home";

function App() {
    return (
        <div>
            <div className="navigation">
                <NavLink className="navigationMenu" to={"/home"}>Главная</NavLink>
                <NavLink className="navigationMenu" to={"/social"}>Мои соц. сети</NavLink>
                <NavLink className="navigationMenu" to={"/works"}>Мои работы</NavLink>
                <NavLink className="navigationMenu" to={"/chat"}>Чат</NavLink>
            </div>
            <Routes >
                    <Route path={"/home"} element={<Home/>}/>
                    <Route  path={"/social"} element={<Social/>}/>
                    <Route  path={"/works"} element={<Works/>}/>
                    <Route path={"/chat"} element={<Chat/>}/>
                    <Route path={"/aboutmywork/:id"} element={<AboutMyWork/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}
export default App;
