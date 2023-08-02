import React from 'react';
import TicTacToe from './TicTacToe';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <TicTacToe />
    </div>
  );
}

export default App;
