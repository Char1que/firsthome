/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const welcome = 'Добро пожаловать в чат';
  const [messageList, setMessageList] = useState ([]);
  const [text, setText] = useState ('');
  const [author, setAuthor] = useState ('');
  const hangleSubmit  = (event) => {
    event.preventDefault();
    setMessageList(prevState => [...prevState, {
      id: giveLastID,
      text: text,
      author: author
    }])
    setText ('')
    setAuthor ('')
  }
  const giveLastID = (array) => {
    return array.length ? array[array.length - 1].id + 1 : 0
  }

  useEffect (() => {
    setTimeout (() => {
      botAnswer()
    }, 2000)
    }, [messageList])

  const botAnswer = () => {
    const lastAuthor = messageList[messageList.length - 1];
    if (lastAuthor && lastAuthor.author) {
      setMessageList(prevState => [
        ...prevState, {
          id: giveLastID(prevState),
          text: `Сообщение от ${lastAuthor.author} отправлено`
        }
      ])
    }
  }
  return (
    <div>
      <h1>
        {welcome}
      </h1>
      <div>
        <form onSubmit={hangleSubmit}>
          <input value={author} onChange={(event) => setAuthor (event.target.value)}/>
          <input value={text} onChange={(event) => setText(event.target.value)}/>
          <button type='submit'>Отправить сообщение</button>
        </form>
        {messageList.map((message => {
        return (
          <div key={message.id}>
            {message.author}
            {message.text}
          </div>
        )
      }),)} </div>
    </div>
  );
}

export default App;
