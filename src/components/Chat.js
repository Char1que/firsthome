import React, {useState} from 'react';
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import '../App.css';

const Chat = () => {
    const [name, setName] = useState("");
    const [chat, setChats] = useState([{
        id: 1, name: "Petr", work: "System Admin"
    }, {
        id: 2, name: "Denis", work: "Engineer"
    }, {
        id: 3, name: "Nasty", work: "Doctor"
    }]);
    const handleDelete = (id) => {
        const filtered = chat.filter((chat) => chat.id !== id)
        setChats(filtered)
    }
    const handleAdd = () => {
        const obj = {
            id: Date.now(),
            name: name
        }
        setChats(prevState => [...prevState, obj])
    }
    return (<div>
        <input autoFocus className="addUser" value={name} onChange={(e) => setName(e.target.value)}/>
        <Button onClick={handleAdd} variant="contained">
            Добавить пользователя
        </Button>
        <div className="chat">
            {chat.map((chat) => {
                return (<div key={chat.id}>
                    <NavLink className="chatName" to={`/aboutmywork/${chat.id}`} key={chat.id}>
                        {chat.name + " "}
                        { chat.work}
                    </NavLink>
                    <Button onClick={() => handleDelete(chat.id)} type="submit" variant="contained">X</Button>
                </div>)
            })}
        </div>
    </div>);
};
export default Chat;