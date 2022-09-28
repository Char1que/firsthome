import React, {useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {Box} from "@mui/material";
import {ListItemButton} from "@mui/material";
import {ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";
import '../App.css';

const Chat = () => {
    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [famaly, setFamaly] = useState("");
    const [chat, setChats] = useState([{
        id: 1, name: "Petr", work: "System Admin" + " "
    }, {
        id: 2, name: "Denis", work: "Engineer" + " "
    }, {
        id: 3, name: "Nasty", work: "Doctor" + " "
    }]);
    const hangleSubmit = (event) => {
        event.preventDefault();
        setMessageList((prevState) => [...prevState, {
            id: giveLastID, text: text, name: name, famaly: famaly,
        },]);
        setText("");
        setName("");
        setFamaly("");
    };
    const giveLastID = (array) => {
        return array.length ? array[array.length - 1].id + 1 : 0;
    };

    useEffect(() => {
        setTimeout(() => {
            botAnswer();
        }, 1000);
        // eslint-disable-next-line
    }, [messageList]);

    const botAnswer = () => {
        const lastAuthor = messageList[messageList.length - 1];
        if (lastAuthor && lastAuthor.name) {
            setMessageList((prevState) => [...prevState, {
                id: giveLastID(prevState), text: `Сообщение от ${lastAuthor.name} ${lastAuthor.famaly} отправлено.`,
            },]);
        }
    };
    const handleDelete = (id) => {
        const filtered = chat.filter((chat) => chat.id !== id )
        setChats(filtered)
    }
    return (<div>
            {chat.map((chat) => {
                return (<div key={chat.id}>
                        <NavLink to={`/aboutmywork/${chat.id}`} key={chat.id}>
                            {chat.name}
                            {" " + chat.work}
                        </NavLink>
                        <Button onClick={() => handleDelete(chat.id)} type="submit" className="delete" variant="contained">X</Button>
                    </div>)
            })}
            <form className="enter" onSubmit={hangleSubmit}>
                <Box className="enterSwap">
                    <nav aria-label="main mailbox folders">
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Spam"/>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Spam"/>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Spam"/>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Spam"/>
                        </ListItemButton>
                    </nav>
                </Box>
                <TextField label="Фамилия" autoFocus id="standard-basic" variant="standard" value={famaly}
                           onChange={(event) => setFamaly(event.target.value)}/>
                <TextField label="Имя" id="standard-basic" variant="standard" value={name}
                           onChange={(event) => setName(event.target.value)}/>
                <TextField label="Сообщение" id="standard-basic" variant="standard" value={text}
                           onChange={(event) => setText(event.target.value)}/>
                <Button sx={{height: "50px"}} type="submit" className="sending" variant="contained">
                    Отправить сообщение
                </Button>
            </form>
            {messageList.map((message) => {
                return (<div key={message.id}>
                        {message.name}
                        {" " + message.text}
                    </div>);
            })}
        </div>);
};

export default Chat;