import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const welcome = 'Добро пожаловать в чат';
  const [messageList, setMessageList] = useState (initialState: []);
  const [text, setText] = useState (initialState: "");
  const [author, setAuthor] = useState (initialState: "");
  const hangleSubmit  = (event) => {
    event.preventDefault();
    setMessageList(value: prevState => [...prevState, {
      id: giveLastID,
      text: text,
      author: author
    }])
    setText (value: '')
    setAuthor (value: '')
  }
  const giveLastID = (array) => {
    return array.length ? array[array.length - 1].id + 1 : 0
  }

  useEffect (effect: () => {
    setTimeout (handler: () => {
      botAnswer();
    }, timeout: 5000)
    }, deps:[messageList])

  const botAnswer = () => {
    const lastAuthor = messageList [messageList.length - 1];
    if (lastAuthor && lastAuthor.author) {
      setMessageList(value: prevState => [
        ...prevState, {
          id: giveLastID(prevState),
          text: "Сообщение от ${lastAuthor.author} отправлено"
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
          <input value={author} onChange={(event: ChangeEvent<HTMLInputElement> ) => setAuthor (event.target.value)}/>
          <input value={text} onChange={(event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)}/>
          <button type='submit'>Отправить сообщение</button>
        </form>
        {messageList.map((message => {
        return (
          <div>
            {message.author}
            {message.text}
          </div>
        )
      }),)} </div>
    </div>
  );
}

export default App;
