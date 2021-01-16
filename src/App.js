import React from 'react';
import './App.css';
import Card from './card/Card'
import DeckComponent from './deck/DeckComponent'

function App() {
  return (
    <div className="parentContainer">
      {/*<Card />*/}
      <DeckComponent />
    </div>
  );
}

export default App;
