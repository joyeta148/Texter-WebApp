import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h1>Hello Texter ! ✨🙋‍♀️✨</h1>

      <input value={input} onChange={event => setInput(event.target.value)} />
      <button>Send Message</button>
      {/* input field */}
      {/* button */}
      {/* messages themselves */}
    </div>
  );
}

export default App;
