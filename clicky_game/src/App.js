import React from 'react';
import NavBar from './nav.js';
import JumboTron from './jumboTron.js';
import GameBoard from './gameBoard.js';
import './App.css';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <JumboTron/>
      <GameBoard/>
    </div>
  );
}

export default App;
