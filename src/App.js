import React from 'react';
import './App.css';
import DeckComponent from './deck/DeckComponent'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import demo from './deck/deckDemo.json'

function App() {

  return (
      <div className="parentContainer">
          <DeckComponent />
      </div>
  );
}

export default App;
