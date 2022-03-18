import React, { useEffect, useState } from 'react';
import './App.css';
import { FormControl, InputLabel, Input } from '@mui/material';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function App() {

  // HOOKS
  // useState = variable in REACT
  // useEffect = run code on a condition in REACT
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // run once when the app component loads
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
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

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //all the logic to send a message
    setMessages([...messages, { username: username, message: input }]);   //...messages(keeps the previous chat messages and add input message along with it)

    setInput("");
  }

  return (
    <div className="App">
      <img src="https://www.pngkit.com/png/detail/128-1284523_group-chat-icon-google-group-chat-icon.png" />
      <h1>👩‍💻 👨‍💻 Hello Texter ! ✨🙋‍♀️✨</h1>

      <h2>🎊 Welcome {username} 🎊</h2>

      <form className="app_form">

        <FormControl className='app_formControl'>
          <Input className='app_input' placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className='app_iconButton' disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>

      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
