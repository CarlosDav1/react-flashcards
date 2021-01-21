import React from 'react';
import './App.css';
import DeckComponent from './deck/DeckComponent'
import DeckCreation from './deckCreation/DeckCreation'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import demo from './deck/deckDemo.json'

function App() {

  return (
      <div className="parentContainer">
          <Router>
            <Route path="/" exact component={DeckComponent}/>
            <Route path="/create" component={DeckCreation}/>
          </Router>
      </div>
  );
}

export default App;