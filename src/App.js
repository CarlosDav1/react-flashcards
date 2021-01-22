import React, { useState } from 'react';
import './App.css';
import DeckCreation from './deckCreation/DeckCreation'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DeckEdit from './deck/DeckEdit'

import './deck/deckComponent.css';
import Card from './card/Card'
import DeckDisplay from './deck/DeckDisplay'

function App() {
  let [deck, setDeck] = useState(null);
  console.log(deck);

  return (
      <div className="parentContainer">
          <Router>
            <Route path="/" exact><DeckDisplay changeDeck={setDeck}/></Route>
            <Route path="/card"><Card deck={deck} finished={setDeck}/></Route>
            <Route path="/create" component={DeckCreation}/>
            <Route path="/edit" ><DeckEdit test="ok" deckToEdit={deck}/></Route>
          </Router>
      </div>
  );
}

export default App;