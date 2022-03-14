import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import Message from './Message';
import db from './firebase';

function App() {

  // HOOKS
  // useState = variable in REACT
  // useEffect = run code on a condition in REACT
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // run once when the app component loads
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  useEffect(() => {
    // run code 
    // if condition is blank[], then this code runs ONCE when the app component loads
    // if we have a varible like [input], it runs every time input changes

    setUsername(prompt("Please enter your name:"));
  }, []) //condition

  const sendMessage = (event) => {
    event.preventDefault();
    //all the logic to send a message
    setMessages([...messages, { username: username, text: input }]);   //...messages(keeps the previous chat messages and add input message along with it)

    setInput("");
  }

  return (
    <div className="App">
      <h1>👩‍💻 👨‍💻 Hello Texter ! ✨🙋‍♀️✨</h1>
      <h2>🎊 Welcome {username} 🎊</h2>

      <form>

        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
        </FormControl>

      </form>

      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }
    </div>
  );
}

export default App;
