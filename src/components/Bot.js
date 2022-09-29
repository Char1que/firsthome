import React, {useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";
import '../App.css';

const Bot = () => {
    const [messageList, setMessageList] = useState([]);
    const [famaly, setFamaly] = useState("");
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const giveLastID = (array) => {
        return array.length ? array[array.length - 1].id + 1 : 0;
    };
    const hangleSubmit = (event) => {
        event.preventDefault();
        setMessageList((prevState) => [...prevState, {
            id: giveLastID, text: text, name: name, famaly: famaly,
        },]);
        setText("");
        setName("");
        setFamaly("");
    };
    const botAnswer = () => {
        const lastAuthor = messageList[messageList.length - 1];
        if (lastAuthor && lastAuthor.name) {
            setMessageList((prevState) => [...prevState, {
                id: giveLastID(prevState), text: `Сообщение от ${lastAuthor.name} ${lastAuthor.famaly} отправлено.`,
            },]);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            botAnswer();
        }, 1000);
        // eslint-disable-next-line
    }, [messageList]);
    return (
        <div>
            <form className="enter" onSubmit={hangleSubmit}>
                {/*<Box >*/}
                {/*    <nav aria-label="main mailbox folders">*/}
                {/*        <ListItemButton sx={{ width: 100 }} component="a" href="#simple-list">*/}
                {/*            <ListItemText primary="Spam"/>*/}
                {/*        </ListItemButton>*/}
                {/*        <ListItemButton component="a" href="#simple-list">*/}
                {/*            <ListItemText primary="Spam"/>*/}
                {/*        </ListItemButton>*/}
                {/*        <ListItemButton component="a" href="#simple-list">*/}
                {/*            <ListItemText primary="Spam"/>*/}
                {/*        </ListItemButton>*/}
                {/*        <ListItemButton component="a" href="#simple-list">*/}
                {/*            <ListItemText primary="Spam"/>*/}
                {/*        </ListItemButton>*/}
                {/*    </nav>*/}
                {/*</Box>*/}
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
        </div>
    );
};
export default Bot;