import './App.css';
import React, { useState } from 'react';
import Start from './imageOver'
import Reasons from './reasons'

function App() {

  return (
    <div className="App" >
      <header className="App-header">
        <h1 className="rainbow-text">Why does Jun Foongy suck</h1>
        <Start />
        <Reasons/>
      </header>
    </div>
  );
}

export default App;
