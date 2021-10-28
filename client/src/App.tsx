import { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks/redux-hooks';
import { setUserSocketID } from './slices/user-slice';

const socket = io(process.env.REACT_APP_SERVER_HOST as string);

function App() {
  const userSocketID = useAppSelector(state => state.user.socketId)
  const dispatch = useAppDispatch()

  useEffect(() => {
    socket.on('me', (id) => {
      dispatch(setUserSocketID({
        socketId: id
      }))
    })
  }, [])

  useEffect(() => {
    console.log(userSocketID);
  }, [userSocketID])

  const socketClick = () => {
    console.log('Click');
    
    socket.emit('user-clicked', {
      message: "I clicked on the button"
    })
    console.log(socket);
    
  }

  return (
    <div className="App">
      <p>{userSocketID}</p>
    </div>
  );
}

export default App;
