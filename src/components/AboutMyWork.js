import React, {useState} from 'react';
import {useParams} from "react-router-dom";

const AboutMyWork = () => {
    const [about,setAbout] = useState([
        {
            id: 1,
            work: "asdasdasd",
            chatId: 1
        },
        {
            id: 2,
            work: "asdasdasd",
            chatId: 2
        },
        {
            id: 3,
            work: "asdasdasd",
            chatId: 3
        }
    ]);
    const id = useParams();

    return (
        <div>
            
        </div>
    );
};

export default AboutMyWork;