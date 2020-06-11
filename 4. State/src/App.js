import React from 'react';
import Game from './Game'
import Rando from './Rando'
import './App.css';

function App() {
  return (
    <div className="App">
      <Rando maxNum={50}/>
    </div>
  );
}

export default App;
