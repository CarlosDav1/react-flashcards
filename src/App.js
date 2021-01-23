import React, { useState } from 'react';
import './App.css';
import DeckCreation from './components/DeckCreation'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DeckEdit from './components/DeckEdit'

import './styles/deckComponent.css';
import Card from './components/Card'
import DeckDisplay from './components/DeckDisplay'

function App() {
  let [deck, setDeck] = useState(null);
  let [deckIndexForEdit, setIndex] = useState(0);

  return (
      <div className="parentContainer">
          <Router>
            <Route path="/" exact><DeckDisplay changeDeck={setDeck} setIndex={setIndex}/></Route>
            <Route path="/card"><Card deck={deck} finished={setDeck}/></Route>
            <Route path="/create" component={DeckCreation}/>
            <Route path="/edit" ><DeckEdit goBack={setDeck} deckToEdit={deck} index={deckIndexForEdit}/></Route>
          </Router>
      </div>
  );
}

export default App;