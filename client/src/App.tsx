import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_SERVER_HOST as string);

function App() {
  const [clientID, setClientID] = useState()
  useEffect(() => {
    socket.on('me', (id) => {
      setClientID(id)
    })
  }, [])

  useEffect(() => {
    console.log(clientID);
  }, [clientID])

  const socketClick = () => {
    console.log('Click');
    
    socket.emit('user-clicked', {
      message: "I clicked on the button"
    })
    console.log(socket);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <button onClick={socketClick}>Click</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts
        </a>
      </header>
    </div>
  );
}

export default App;
