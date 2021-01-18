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

/*
TODO: 
- Create a component that allows users to create their own deck, read, update and delete it (CRUD)
- Save custom decks inside local storage

- Create a statistics component to review the progress for the decks
- Add logic to make a full spaced repetition system
*/