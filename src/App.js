import React from 'react';
import Game from './Game';
import './styles.css';

// const App = () => <Game/> ;

export default App;

function App(){
  return(
    <div className='main'>
      <h1 className='title'>Tic Tac Toe Game</h1>
      <Game/> 
    </div>
  )
}
