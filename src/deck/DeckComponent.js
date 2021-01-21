import React, { useState } from 'react';
import demo from './deckDemo.json';
import './deckComponent.css';
import Card from '../card/Card'
import OneDeck from './OneDeck'
import CreateDeck from './CreateDeck'

function DeckDisplay(props){
    let savedDecks = localStorage.getItem("AllDecksTesting") != null? localStorage.getItem("AllDecksTesting"): JSON.stringify({decks: []});
    let decksToObjects = JSON.parse(savedDecks);
    let change = props.changeDeck;

    return (
        <div className="allDecks">
            <OneDeck deck={demo} change={change}/>
            {decksToObjects.decks.map(prop => <OneDeck key={prop.Name} deck={prop} change={change}/>)}
            <CreateDeck />
        </div>
    );
}

function DeckComponent(){
    let [chosenDeck, setDeck] = useState(null);
    let displayedComponent = 
        chosenDeck === null? 
        <DeckDisplay changeDeck={setDeck}/>:
        <Card deck={chosenDeck} finished={() => setDeck(null)}/>;

    return (
        <>
        {displayedComponent}
        </>
    );
}

export default DeckComponent;