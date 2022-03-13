import React, { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["hello", "hi", "Whatsapp?"]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    //all the logic to send a message
    setMessages([...messages, input]);   //...messages(keeps the previous chat messages and add input message along with it)

    setInput("");
  }

  return (
    <div className="App">
      <h1>Hello Texter ! ✨🙋‍♀️✨</h1>

      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <Button type="submit" onClick={sendMessage}>Send Message</Button>

      </form>

      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
